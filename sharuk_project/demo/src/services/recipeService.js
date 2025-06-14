import axios from 'axios';

// TheMealDB API endpoint (free, no API key required)
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

class RecipeService {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    calculateNutrition(matchedIngredients, cartItems) {
        let totalNutrition = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            fiber: 0,
            sugar: 0,
            sodium: 0
        };

        // Get nutrition values from cart items
        const cartNutrition = {};
        Object.values(cartItems).forEach(item => {
            if (item.product && item.product.nutrition) {
                cartNutrition[item.product.name.toLowerCase()] = item.product.nutrition;
            }
        });

        // Calculate nutrition based on matched ingredients
        matchedIngredients.forEach(ingredient => {
            const cleanIngredient = ingredient.toLowerCase();
            // Find matching cart item
            for (const [cartItem, nutrition] of Object.entries(cartNutrition)) {
                if (cleanIngredient.includes(cartItem) || cartItem.includes(cleanIngredient)) {
                    // Add nutrition values for this ingredient
                    Object.keys(totalNutrition).forEach(nutrient => {
                        if (nutrition[nutrient]) {
                            totalNutrition[nutrient] += parseFloat(nutrition[nutrient]);
                        }
                    });
                    break;
                }
            }
        });

        // Round values to whole numbers
        Object.keys(totalNutrition).forEach(key => {
            totalNutrition[key] = Math.round(totalNutrition[key]);
        });

        return totalNutrition;
    }

    async getRecommendedRecipes(cartItems) {
        if (!cartItems || Object.keys(cartItems).length === 0) {
            console.log('No cart items provided');
            return [];
        }

        try {
            // Extract product names from cart items
            const cartProducts = Object.values(cartItems)
                .filter(item => item && item.product)
                .map(item => ({
                    name: item.product.name.toLowerCase(),
                    quantity: item.quantity
                }));

            console.log('Cart products:', cartProducts);

            // Fetch all categories first
            const categoriesResponse = await this.axiosInstance.get('/categories.php');
            const categories = categoriesResponse.data.categories;
            
            let allRecipes = [];
            
            // Fetch recipes for each category
            for (const category of categories) {
                const recipesResponse = await this.axiosInstance.get(`/filter.php?c=${category.strCategory}`);
                if (recipesResponse.data.meals) {
                    // Get detailed information for each recipe
                    for (const recipe of recipesResponse.data.meals) {
                        const detailResponse = await this.axiosInstance.get(`/lookup.php?i=${recipe.idMeal}`);
                        if (detailResponse.data.meals) {
                            const recipeDetail = detailResponse.data.meals[0];
                            
                            // Extract ingredients and measures
                            const ingredients = [];
                            for (let i = 1; i <= 20; i++) {
                                const ingredient = recipeDetail[`strIngredient${i}`];
                                const measure = recipeDetail[`strMeasure${i}`];
                                if (ingredient && ingredient.trim()) {
                                    ingredients.push(`${measure} ${ingredient}`.trim());
                                }
                            }

                            allRecipes.push({
                                id: recipeDetail.idMeal,
                                name: recipeDetail.strMeal,
                                category: recipeDetail.strCategory,
                                ingredients: ingredients,
                                instructions: recipeDetail.strInstructions,
                                image: recipeDetail.strMealThumb
                            });
                        }
                    }
                }
            }

            // Process recipes to add match information
            const processedRecipes = allRecipes.map(recipe => {
                const matchedIngredients = [];
                const missingIngredients = [];

                recipe.ingredients.forEach(ingredient => {
                    const cleanIngredient = ingredient.toLowerCase();
                    // Extract the main ingredient name without measurement
                    const ingredientName = cleanIngredient.replace(/^[\d\s./]+/, '').trim();
                    
                    // Check if this ingredient exists in cart
                    const matched = cartProducts.some(cartProduct => {
                        const cartItemName = cartProduct.name.toLowerCase();
                        
                        // For meat items, be very strict with matching
                        if (ingredientName.includes('chicken') || 
                            ingredientName.includes('beef') || 
                            ingredientName.includes('pork') || 
                            ingredientName.includes('lamb') || 
                            ingredientName.includes('fish') || 
                            ingredientName.includes('shrimp')) {
                            return cartItemName === ingredientName;
                        }
                        
                        // For other ingredients, match exact words
                        return cartItemName === ingredientName;
                    });

                    if (matched) {
                        matchedIngredients.push(ingredient);
                    } else {
                        missingIngredients.push(ingredient);
                    }
                });

                // Calculate match score with higher weight for main ingredients
                const mainIngredientScore = matchedIngredients.some(ing => {
                    const ingLower = ing.toLowerCase().replace(/^[\d\s./]+/, '').trim();
                    return cartProducts.some(cartProduct => {
                        const cartItemName = cartProduct.name.toLowerCase();
                        // Strict matching for main ingredients
                        return cartItemName === ingLower;
                    });
                }) ? 0.4 : 0;

                const otherIngredientsScore = recipe.ingredients.length > 0 ? 
                    (matchedIngredients.length / recipe.ingredients.length) * 0.6 : 0;

                const matchScore = mainIngredientScore + otherIngredientsScore;

                return {
                    ...recipe,
                    matchedIngredients,
                    missingIngredients,
                    matchScore,
                    nutrition: this.calculateNutrition(matchedIngredients, cartItems)
                };
            });

            // Filter out recipes with 0% match score and sort by match score
            return processedRecipes
                .filter(recipe => recipe.matchScore > 0)
                .sort((a, b) => b.matchScore - a.matchScore)
                .slice(0, 5);

        } catch (error) {
            console.error('Error in getRecommendedRecipes:', error);
            return [];
        }
    }

    async searchRecipes(query) {
        if (!query) return [];
        
        try {
            const response = await this.axiosInstance.get(`/search.php?s=${query}`);
            
            if (!response.data.meals) return [];

            return response.data.meals.map(recipe => ({
                id: recipe.idMeal,
                name: recipe.strMeal,
                image: recipe.strMealThumb,
                category: recipe.strCategory
            }));
        } catch (error) {
            console.error('Error searching recipes:', error);
            return [];
        }
    }
}

// Create and export a single instance
const recipeService = new RecipeService();
export { recipeService };