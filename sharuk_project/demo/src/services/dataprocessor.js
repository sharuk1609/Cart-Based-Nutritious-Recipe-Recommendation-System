import axios from 'axios';

class DataProcessor {
    constructor() {
        // TheMealDB API endpoint
        this.API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
    }

    async downloadRecipeData() {
        try {
            // Get a list of all categories
            const categoriesResponse = await axios.get(`${this.API_BASE_URL}/categories.php`);
            const categories = categoriesResponse.data.categories;

            let allRecipes = [];

            // Get recipes for each category
            for (const category of categories) {
                const recipesResponse = await axios.get(`${this.API_BASE_URL}/filter.php?c=${category.strCategory}`);
                const recipes = recipesResponse.data.meals || [];

                // Get detailed information for each recipe
                for (const recipe of recipes) {
                    const detailResponse = await axios.get(`${this.API_BASE_URL}/lookup.php?i=${recipe.idMeal}`);
                    const recipeDetail = detailResponse.data.meals[0];

                    // Extract ingredients and measures
                    const ingredients = [];
                    for (let i = 1; i <= 20; i++) {
                        const ingredient = recipeDetail[`strIngredient${i}`];
                        const measure = recipeDetail[`strMeasure${i}`];
                        if (ingredient && ingredient.trim()) {
                            ingredients.push({
                                name: ingredient,
                                measure: measure
                            });
                        }
                    }

                    // Format recipe data
                    const formattedRecipe = {
                        id: recipeDetail.idMeal,
                        name: recipeDetail.strMeal,
                        category: recipeDetail.strCategory,
                        ingredients: ingredients,
                        instructions: recipeDetail.strInstructions,
                        image: recipeDetail.strMealThumb
                    };

                    allRecipes.push(formattedRecipe);
                }
            }

            // Save to localStorage for now (in real app, should use a proper database)
            localStorage.setItem('recipeData', JSON.stringify(allRecipes));
            return allRecipes;

        } catch (error) {
            console.error('Error downloading recipe data:', error);
            return [];
        }
    }

    // Convert ingredients to feature vectors
    processIngredientsToFeatures(ingredients) {
        // Create a set of all unique ingredients from our dataset
        const allIngredients = new Set();
        const recipeData = JSON.parse(localStorage.getItem('recipeData') || '[]');
        
        recipeData.forEach(recipe => {
            recipe.ingredients.forEach(ing => {
                allIngredients.add(ing.name.toLowerCase());
            });
        });

        // Convert to array and sort for consistent ordering
        const ingredientsList = Array.from(allIngredients).sort();

        // Create one-hot encoding for ingredients
        const features = new Array(ingredientsList.length).fill(0);
        ingredients.forEach(ingredient => {
            const index = ingredientsList.indexOf(ingredient.toLowerCase());
            if (index !== -1) {
                features[index] = 1;
            }
        });

        return features;
    }

    // Prepare training data
    prepareTrainingData() {
        const recipeData = JSON.parse(localStorage.getItem('recipeData') || '[]');
        const trainingData = [];

        recipeData.forEach(recipe => {
            const features = this.processIngredientsToFeatures(
                recipe.ingredients.map(ing => ing.name)
            );
            
            // For now, we'll use category as label (can be enhanced with user preferences)
            const label = recipe.category;
            
            trainingData.push({
                features,
                label
            });
        });

        return trainingData;
    }
}

export const dataProcessor = new DataProcessor();