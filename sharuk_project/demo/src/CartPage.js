import React, { useState, useEffect } from "react";
import "./CartPage.css";
import { recipeService } from "./services/recipeService";

// Helper function to get product by name
const getProductByName = (ingredient) => {
 const allProducts = [
 // Fruits
 { id: 1, name: "Apple", price: 120, image: "https://via.placeholder.com/150" },
 { id: 2, name: "Banana", price: 120, image: "https://via.placeholder.com/150" },
 { id: 3, name: "Grapes", price: 120, image: "https://via.placeholder.com/150" },
 { id: 4, name: "Musk melon", price: 120, image: "https://via.placeholder.com/150" },
 { id: 5, name: "Water melon", price: 120, image: "https://via.placeholder.com/150" },
 { id: 6, name: "Strawberry", price: 150, image: "https://via.placeholder.com/150" },
 { id: 7, name: "Pineapple", price: 100, image: "https://via.placeholder.com/150" },
 { id: 8, name: "Orange", price: 90, image: "https://via.placeholder.com/150" },
 { id: 9, name: "Mango", price: 130, image: "https://via.placeholder.com/150" },
 { id: 10, name: "Blueberry", price: 200, image: "https://via.placeholder.com/150" },

 // Vegetables
 { id: 11, name: "Tomato", price: 30, image: "https://via.placeholder.com/150" },
 { id: 12, name: "Cucumber", price: 20, image: "https://via.placeholder.com/150" },
 { id: 13, name: "Carrot", price: 40, image: "https://via.placeholder.com/150" },
 { id: 14, name: "Spinach", price: 50, image: "https://via.placeholder.com/150" },
 { id: 15, name: "Pepper", price: 60, image: "https://via.placeholder.com/150" },
 { id: 16, name: "Onion", price: 35, image: "https://via.placeholder.com/150" },
 { id: 17, name: "Beetroot", price: 45, image: "https://via.placeholder.com/150" },
 { id: 18, name: "Garlic", price: 50, image: "https://via.placeholder.com/150" },
 { id: 19, name: "Cauliflower", price: 60, image: "https://via.placeholder.com/150" },
 { id: 20, name: "Broccoli", price: 70, image: "https://via.placeholder.com/150" },

 // Spices
 { id: 21, name: "Turmeric", price: 80, image: "https://via.placeholder.com/150" },
 { id: 22, name: "Cinnamon", price: 90, image: "https://via.placeholder.com/150" },
 { id: 23, name: "Cloves", price: 85, image: "https://via.placeholder.com/150" },
 { id: 24, name: "Peppercorns", price: 70, image: "https://via.placeholder.com/150" },
 { id: 25, name: "Chili Powder", price: 75, image: "https://via.placeholder.com/150" },
 { id: 26, name: "Coriander", price: 75, image: "https://via.placeholder.com/150" },
 { id: 27, name: "Saffron", price: 300, image: "https://via.placeholder.com/150" },
 { id: 28, name: "Garam Masala", price: 90, image: "https://via.placeholder.com/150" },
 { id: 29, name: "Fenugreek", price: 80, image: "https://via.placeholder.com/150" },
 { id: 30, name: "Mustard Seeds", price: 40, image: "https://via.placeholder.com/150" },

 // Herbs
 { id: 31, name: "Rosemary", price: 85, image: "https://via.placeholder.com/150" },
 { id: 32, name: "Thyme", price: 95, image: "https://via.placeholder.com/150" },
 { id: 33, name: "Basil", price: 70, image: "https://via.placeholder.com/150" },
 { id: 34, name: "Oregano", price: 65, image: "https://via.placeholder.com/150" },
 { id: 35, name: "Parsley", price: 75, image: "https://via.placeholder.com/150" },
 { id: 36, name: "Dill", price: 60, image: "https://via.placeholder.com/150" },
 { id: 37, name: "Mint", price: 80, image: "https://via.placeholder.com/150" },
 { id: 38, name: "Cilantro", price: 55, image: "https://via.placeholder.com/150" },
 { id: 39, name: "Bay Leaves", price: 50, image: "https://via.placeholder.com/150" },
 { id: 40, name: "Chives", price: 60, image: "https://via.placeholder.com/150" },

 // Grains
 { id: 41, name: "Quinoa", price: 140, image: "https://via.placeholder.com/150" },
 { id: 42, name: "Oats", price: 120, image: "https://via.placeholder.com/150" },
 { id: 43, name: "Barley", price: 110, image: "https://via.placeholder.com/150" },
 { id: 44, name: "Brown Rice", price: 130, image: "https://via.placeholder.com/150" },
 { id: 45, name: "Buckwheat", price: 125, image: "https://via.placeholder.com/150" },
 { id: 46, name: "Millet", price: 115, image: "https://via.placeholder.com/150" },
 { id: 47, name: "Amaranth", price: 95, image: "https://via.placeholder.com/150" },
 { id: 48, name: "Rye", price: 110, image: "https://via.placeholder.com/150" },
 { id: 49, name: "Polenta", price: 105, image: "https://via.placeholder.com/150" },
 { id: 50, name: "Farro", price: 135, image: "https://via.placeholder.com/150" },

 // Dairy
 { id: 51, name: "Milk", price: 40, image: "https://via.placeholder.com/150" },
 { id: 52, name: "Cheese", price: 150, image: "https://via.placeholder.com/150" },
 { id: 53, name: "Butter", price: 100, image: "https://via.placeholder.com/150" },
 { id: 54, name: "Yogurt", price: 80, image: "https://via.placeholder.com/150" },
 { id: 55, name: "Cream", price: 90, image: "https://via.placeholder.com/150" },
 { id: 56, name: "Cottage Cheese", price: 70, image: "https://via.placeholder.com/150" },
 { id: 57, name: "Ricotta", price: 120, image: "https://via.placeholder.com/150" },
 { id: 58, name: "Mozzarella", price: 130, image: "https://via.placeholder.com/150" },
 { id: 59, name: "Swiss Cheese", price: 160, image: "https://via.placeholder.com/150" },
 { id: 60, name: "Parmesan", price: 170, image: "https://via.placeholder.com/150" },

 // Meat & Seafood
 { id: 61, name: "Chicken Breast", price: 250, image: "https://via.placeholder.com/150" },
 { id: 62, name: "Salmon", price: 300, image: "https://via.placeholder.com/150" },
 { id: 63, name: "Pork Tenderloin", price: 280, image: "https://via.placeholder.com/150" },
 { id: 64, name: "Beef Sirloin", price: 350, image: "https://via.placeholder.com/150" },
 { id: 65, name: "Shrimp", price: 270, image: "https://via.placeholder.com/150" },
 { id: 66, name: "Lamb Chops", price: 300, image: "https://via.placeholder.com/150" },
 { id: 67, name: "Duck", price: 320, image: "https://via.placeholder.com/150" },
 { id: 68, name: "Turkey", price: 280, image: "https://via.placeholder.com/150" },
 { id: 69, name: "Crab Legs", price: 400, image: "https://via.placeholder.com/150" },
 { id: 70, name: "Scallops", price: 380, image: "https://via.placeholder.com/150" },

 // Condiments
 { id: 71, name: "Ketchup", price: 45, image: "https://via.placeholder.com/150" },
 { id: 72, name: "Mustard", price: 50, image: "https://via.placeholder.com/150" },
 { id: 73, name: "Mayonnaise", price: 55, image: "https://via.placeholder.com/150" },
 { id: 74, name: "Hot Sauce", price: 60, image: "https://via.placeholder.com/150" },
 { id: 75, name: "Soy Sauce", price: 65, image: "https://via.placeholder.com/150" },
 { id: 76, name: "BBQ Sauce", price: 70, image: "https://via.placeholder.com/150" },
 { id: 77, name: "Vinegar", price: 40, image: "https://via.placeholder.com/150" },
 { id: 78, name: "Hot Mustard", price: 55, image: "https://via.placeholder.com/150" },
 { id: 79, name: "Sweet Chili Sauce", price: 60, image: "https://via.placeholder.com/150" },
 { id: 80, name: "Tartar Sauce", price: 50, image: "https://via.placeholder.com/150" },

 // Legumes & Pulses
 { id: 81, name: "Black Beans", price: 85, image: "https://via.placeholder.com/150" },
 { id: 82, name: "Lentils", price: 75, image: "https://via.placeholder.com/150" },
 { id: 83, name: "Chickpeas", price: 95, image: "https://via.placeholder.com/150" },
 { id: 84, name: "Split Peas", price: 70, image: "https://via.placeholder.com/150" },
 { id: 85, name: "Kidney Beans", price: 90, image: "https://via.placeholder.com/150" },
 { id: 86, name: "Black-eyed Peas", price: 80, image: "https://via.placeholder.com/150" },
 { id: 87, name: "Pinto Beans", price: 85, image: "https://via.placeholder.com/150" },
 { id: 88, name: "Fava Beans", price: 100, image: "https://via.placeholder.com/150" },
 { id: 89, name: "Cannellini Beans", price: 95, image: "https://via.placeholder.com/150" },
 { id: 90, name: "Adzuki Beans", price: 110, image: "https://via.placeholder.com/150" },

 // Others
 { id: 91, name: "Tofu", price: 100, image: "https://via.placeholder.com/150" },
 { id: 92, name: "Tempeh", price: 110, image: "https://via.placeholder.com/150" },
 { id: 93, name: "Seitan", price: 120, image: "https://via.placeholder.com/150" },
 { id: 94, name: "Quorn", price: 130, image: "https://via.placeholder.com/150" },
 { id: 95, name: "Jackfruit", price: 140, image: "https://via.placeholder.com/150" },
 { id: 96, name: "Almond Milk", price: 110, image: "https://via.placeholder.com/150" },
 { id: 97, name: "Coconut Milk", price: 90, image: "https://via.placeholder.com/150" },
 { id: 98, name: "Soy Milk", price: 85, image: "https://via.placeholder.com/150" },
 { id: 99, name: "Oat Milk", price: 95, image: "https://via.placeholder.com/150" },
 { id: 100, name: "Cashew Milk", price: 120, image: "https://via.placeholder.com/150" },
 { id: 101, name: "Sugar", price: 120, image: "https://via.placeholder.com/150" },
 { id: 102, name: "Honey", price: 120, image: "https://via.placeholder.com/150" },
 { id: 103, name: "Flour", price: 120, image: "https://via.placeholder.com/150" },
 ];

 // Find and return the product by name
 return allProducts.find((product) => product.name === ingredient);
};

// Move RecipeModal outside of CartPage
const RecipeModal = ({ recipe, onClose, onAddMissingIngredients }) => {
 if (!recipe) return null;

 return (
 <div className="recipe-modal-overlay" onClick={onClose}>
 <div className="recipe-modal-content" onClick={e => e.stopPropagation()}>
 <button className="close-button" onClick={onClose}>×</button>
 <h2>{recipe.name}</h2>
 <img src={recipe.image} alt={recipe.name} className="recipe-modal-image" />
 
 <div className="recipe-details">
 <h3>Category: {recipe.category}</h3>
 
 <h3>Ingredients:</h3>
 <div className="ingredients-list">
 <div className="matched-ingredients">
 <h4>Available Ingredients:</h4>
 <ul>
 {recipe.matchedIngredients.map((ing, idx) => (
 <li key={`matched-${idx}`}>{ing}</li>
 ))}
 </ul>
 </div>
 
 <div className="missing-ingredients">
 <h4>Missing Ingredients:</h4>
 <ul>
 {recipe.missingIngredients.map((ing, idx) => (
 <li key={`missing-${idx}`}>{ing}</li>
 ))}
 </ul>
 {recipe.missingIngredients.length > 0 && (
 <button 
 onClick={() => onAddMissingIngredients(recipe.missingIngredients)}
 className="add-missing-btn"
 >
 Add Missing Ingredients to Cart
 </button>
 )}
 </div>
 </div>

 <h3>Instructions:</h3>
 <div className="instructions">
 {recipe.instructions.split('\n').map((step, idx) => (
 <p key={idx}>{step}</p>
 ))}
 </div>

 <h3>Nutrition Information (per serving):</h3>
 <div className="nutrition-info">
 <p>Calories: {recipe.nutrition.calories} kcal</p>
 <p>Protein: {recipe.nutrition.protein}g</p>
 <p>Carbs: {recipe.nutrition.carbs}g</p>
 <p>Fat: {recipe.nutrition.fat}g</p>
 <p>Fiber: {recipe.nutrition.fiber}g</p>
 <p>Sugar: {recipe.nutrition.sugar}g</p>
 <p>Sodium: {recipe.nutrition.sodium}mg</p>
 </div>
 </div>
 </div>
 </div>
 );
};

const CartPage = ({ cart = {}, onBack, addToCart, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
 const [recommendedRecipes, setRecommendedRecipes] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [selectedRecipe, setSelectedRecipe] = useState(null);

 const handleAddMissingIngredients = (missingIngredients) => {
 missingIngredients.forEach((ingredient) => {
 const product = getProductByName(ingredient);
 if (product) {
 addToCart(product);
 }
 });
 };

 useEffect(() => {
 const fetchRecommendedRecipes = async () => {
 try {
 setLoading(true);
 console.log('Fetching recipes for cart items:', cart);
 const recipes = await recipeService.getRecommendedRecipes(cart);
 console.log('Received recipes:', recipes);
 setRecommendedRecipes(recipes);
 setError(null);
 } catch (err) {
 console.error('Detailed error:', err);
 setError('Failed to load recommended recipes');
 } finally {
 setLoading(false);
 }
 };

 if (Object.keys(cart).length > 0) {
 fetchRecommendedRecipes();
 } else {
 setRecommendedRecipes([]);
 setLoading(false);
 }
 }, [cart]);

 // Calculate total amount
 const totalAmount = Object.values(cart).reduce((sum, item) => {
 if (!item || !item.product) return sum;
 return sum + (item.product.price * item.quantity);
 }, 0);

 const handleViewRecipe = (recipe) => {
 console.log('Opening recipe:', recipe);
 setSelectedRecipe(recipe);
 };

 return (
 <div className="cart-page">
 <header className="header">
 <div className="company-name">FreshMart</div>
 <h1>Your Cart</h1>
 <button onClick={onBack} className="back-button">
 Back to Home
 </button>
 </header>

 <div className="cart-container">
 <div className="cart-items">
 {Object.values(cart).length === 0 ? (
 <p>Your cart is empty.</p>
 ) : (
 <>
 {Object.values(cart).map((item) => (
 item && item.product && (
 <div key={item.product.id} className="cart-item">
 <img src={item.product.image} alt={item.product.name} />
 <div className="item-details">
 <h3>{item.product.name}</h3>
 <p>${item.product.price}</p>
 </div>
 <div className="quantity-controls">
 <button onClick={() => onDecreaseQuantity(item.product.id)}>-</button>
 <span>{item.quantity}</span>
 <button onClick={() => onIncreaseQuantity(item.product.id)}>+</button>
 </div>
 <button 
 onClick={() => onRemoveItem(item.product.id)}
 className="remove-button"
 >
 Remove
 </button>
 </div>
 )
 ))}
 <div className="cart-total">
 <h3>Total: ${totalAmount.toFixed(2)}</h3>
 </div>
 </>
 )}
 </div>

 <div className="recommended-recipes">
 <h2>Recommended Recipes</h2>
 {loading ? (
 <p className="loading">Loading recipes...</p>
 ) : error ? (
 <p className="error">{error}</p>
 ) : recommendedRecipes.length === 0 ? (
 <p>No recipes found based on your selected items.</p>
 ) : (
 <div className="recipe-grid">
 {recommendedRecipes.map((recipe) => (
 <div key={recipe.id} className="recipe-card">
 <img src={recipe.image} alt={recipe.name} />
 <div className="recipe-card-content">
 <h3>{recipe.name}</h3>
 <p>Category: {recipe.category}</p>
 <p>Match Score: {(recipe.matchScore * 100).toFixed(0)}%</p>
 <button 
 onClick={() => handleViewRecipe(recipe)}
 className="view-recipe-btn"
 >
 View Recipe
 </button>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 </div>

 {selectedRecipe && (
 <RecipeModal 
 recipe={selectedRecipe} 
 onClose={() => setSelectedRecipe(null)}
 onAddMissingIngredients={handleAddMissingIngredients}
 />
 )}
 </div>
 );
};

export default CartPage;