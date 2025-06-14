import * as tf from '@tensorflow/tfjs';
import { dataProcessor } from './dataProcessor';

class MLService {
    constructor() {
        this.model = null;
        this.initialized = false;
        this.labelEncoder = null;
    }

    async initialize() {
        try {
            // Download recipe data if not already present
            const recipeData = JSON.parse(localStorage.getItem('recipeData') || '[]');
            if (recipeData.length === 0) {
                await dataProcessor.downloadRecipeData();
            }

            // Create and train the model
            await this.createAndTrainModel();
            this.initialized = true;
        } catch (error) {
            console.error('Error initializing ML model:', error);
        }
    }

    async createAndTrainModel() {
        // Get training data
        const trainingData = dataProcessor.prepareTrainingData();
        if (trainingData.length === 0) return;

        // Get unique labels and create label encoder
        const uniqueLabels = [...new Set(trainingData.map(item => item.label))];
        this.labelEncoder = {
            encode: (label) => uniqueLabels.indexOf(label),
            decode: (index) => uniqueLabels[index]
        };

        // Prepare features and labels
        const features = tf.tensor2d(trainingData.map(item => item.features));
        const labels = tf.tensor1d(trainingData.map(item => this.labelEncoder.encode(item.label)))
            .oneHot(uniqueLabels.length);

        // Create model
        this.model = tf.sequential({
            layers: [
                tf.layers.dense({
                    inputShape: [trainingData[0].features.length],
                    units: 128,
                    activation: 'relu'
                }),
                tf.layers.dropout({ rate: 0.3 }),
                tf.layers.dense({
                    units: 64,
                    activation: 'relu'
                }),
                tf.layers.dropout({ rate: 0.2 }),
                tf.layers.dense({
                    units: uniqueLabels.length,
                    activation: 'softmax'
                })
            ]
        });

        // Compile model
        this.model.compile({
            optimizer: tf.train.adam(0.001),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });

        // Train model
        await this.model.fit(features, labels, {
            epochs: 50,
            batchSize: 32,
            validationSplit: 0.2,
            callbacks: {
                onEpochEnd: (epoch, logs) => {
                    console.log(`Epoch ${epoch + 1}: loss = ${logs.loss.toFixed(4)}, accuracy = ${logs.acc.toFixed(4)}`);
                }
            }
        });

        // Clean up tensors
        features.dispose();
        labels.dispose();
    }

    async getRecommendedRecipes(cartItems) {
        if (!this.initialized) {
            await this.initialize();
        }

        try {
            // Convert cart items to features
            const ingredients = cartItems.map(item => item.product.name);
            const features = tf.tensor2d([dataProcessor.processIngredientsToFeatures(ingredients)]);

            // Get predictions
            const predictions = await this.model.predict(features).array();
            features.dispose();

            // Get recipe data
            const recipeData = JSON.parse(localStorage.getItem('recipeData') || '[]');

            // Calculate recipe scores based on predictions and ingredients
            const recommendations = recipeData.map(recipe => {
                const categoryScore = predictions[0][this.labelEncoder.encode(recipe.category)];
                const ingredientMatch = recipe.ingredients.filter(ing => 
                    ingredients.some(cartIng => 
                        ing.name.toLowerCase().includes(cartIng.toLowerCase())
                    )
                ).length;
                const ingredientScore = ingredientMatch / recipe.ingredients.length;

                return {
                    ...recipe,
                    score: (categoryScore + ingredientScore) / 2
                };
            });

            // Sort by score and return top recommendations
            return recommendations
                .sort((a, b) => b.score - a.score)
                .slice(0, 5);

        } catch (error) {
            console.error('Error getting ML recommendations:', error);
            return [];
        }
    }

    async predictNutrition(ingredients) {
        // For now, return estimated values based on ingredient matching
        // This could be enhanced with a separate nutrition prediction model
        const baseNutrition = {
            calories: 200,
            protein: 10,
            carbs: 25,
            fat: 8
        };

        const multiplier = ingredients.length * 0.8;
        return {
            calories: Math.round(baseNutrition.calories * multiplier),
            protein: Math.round(baseNutrition.protein * multiplier),
            carbs: Math.round(baseNutrition.carbs * multiplier),
            fat: Math.round(baseNutrition.fat * multiplier)
        };
    }
}

export const mlService = new MLService();