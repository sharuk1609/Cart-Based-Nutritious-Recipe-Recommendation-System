import React, { useState } from "react";
import CartPage from "./CartPage";
import "./App.css";



const App = () => {
    const [cart, setCart] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isCartPage, setIsCartPage] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    const categories = [
        { id: 1, name: "Fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&h=300&fit=crop" },  
        { id: 2, name: "Vegetables", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=300&fit=crop" },  
        { id: 3, name: "Spices", image: "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?w=500&h=300&fit=crop" },
        { id: 4, name: "Herbs", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&h=300&fit=crop" }, 
        { id: 5, name: "Grains", image:   "https://plus.unsplash.com/premium_photo-1722945635992-8eda6a907978?w=500&h=300&fit=crop"},  
        { id: 6, name: "Dairy", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=300&fit=crop" },  
        { id: 7, name: "Meat & Seafood", image:"https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=300&fit=crop" },  
        { id: 8, name: "Condiments", image:  "https://images.unsplash.com/photo-1656269457984-bd54c519129a?w=500&h=300&fit=crop" },
        { id: 9, name: "Legumes & Pulses", image:   "https://plus.unsplash.com/premium_photo-1699453179951-4f51c39644ac?w=500&h=300&fit=crop" }, 
        { id: 10, name: "Others", image: "https://images.unsplash.com/photo-1586004619619-64b6ccab2f91?w=500&h=300&fit=crop" },   
    ];
      
       
        const products = [
        // Fruits
        {
            id: 1,
            name: "Apple",
            price: 120,
            image: " https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Fresh, crisp apples with a perfect balance of sweetness and tartness. Great for snacking or cooking.",
            nutrition: {
                calories: 95,
                protein: "0.5g",
                carbs: "25g",
                fat: "0.3g",
                fiber: "4.5g"
            }
        },
        {
            id: 2,
            name: "Banana",
            price: 50,
            image: " https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Ripe, ready-to-eat bananas packed with natural sweetness and essential nutrients.",
            nutrition: {
                calories: 105,
                protein: "1.3g",
                carbs: "27g",
                fat: "0.4g",
                fiber: "3.1g"
            }
        },
        {
            id: 3,
            name: "Grapes",
            price: 80,
            image: " https://plus.unsplash.com/premium_photo-1724250449759-f9bbb5fd4f63?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Sweet and juicy grapes, perfect for snacking or making wine.",
            nutrition: {
                calories: 69,
                protein: "0.7g",
                carbs: "18g",
                fat: "0.2g",
                fiber: "0.9g"
            }
        },
        {
            id: 4,
            name: "Musk Melon",
            price: 60,
            image: " https://plus.unsplash.com/premium_photo-1700089174974-871b8ea3731d?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Refreshing musk melon with a sweet, musky aroma.",
            nutrition: {
                calories: 34,
                protein: "0.8g",
                carbs: "8.2g",
                fat: "0.2g",
                fiber: "0.9g"
            }
        },
        {
            id: 5,
            name: "Water Melon",
            price: 100,
            image: "https://images.unsplash.com/photo-1652031552021-50bcc01121a7?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Hydrating watermelon with high water content and natural sweetness.",
            nutrition: {
                calories: 30,
                protein: "0.6g",
                carbs: "7.6g",
                fat: "0.2g",
                fiber: "0.4g"
            }
        },
        {
            id: 6,
            name: "Strawberry",
            price: 150,
            image: "https://plus.unsplash.com/premium_photo-1724256149016-05c013fe058e?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Sweet and tangy strawberries rich in antioxidants.",
            nutrition: {
                calories: 32,
                protein: "0.7g",
                carbs: "7.7g",
                fat: "0.3g",
                fiber: "2g"
            }
        },
        {
            id: 7,
            name: "Pineapple",
            price: 100,
            image: " https://images.unsplash.com/photo-1565623513508-ffe2588e327c?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Tropical pineapple with sweet, tangy flavor and digestive enzymes.",
            nutrition: {
                calories: 50,
                protein: "0.5g",
                carbs: "13.1g",
                fat: "0.1g",
                fiber: "1.4g"
            }
        },
        {
            id: 8,
            name: "Orange",
            price: 90,
            image: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Vitamin C-rich oranges with refreshing citrus flavor.",
            nutrition: {
                calories: 47,
                protein: "0.9g",
                carbs: "11.8g",
                fat: "0.1g",
                fiber: "2.4g"
            }
        },
        {
            id: 9,
            name: "Mango",
            price: 130,
            image: "https://images.unsplash.com/photo-1631153609867-daf57f90cd42?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Sweet and creamy mangoes, rich in vitamins and antioxidants.",
            nutrition: {
                calories: 60,
                protein: "0.8g",
                carbs: "15g",
                fat: "0.4g",
                fiber: "1.6g"
            }
        },
        {
            id: 10,
            name: "Blueberry",
            price: 200,
            image: "https://images.unsplash.com/photo-1566400628146-ae8f27849e90?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Antioxidant-rich blueberries with sweet-tart flavor.",
            nutrition: {
                calories: 57,
                protein: "0.7g",
                carbs: "14.5g",
                fat: "0.3g",
                fiber: "2.4g"
            }
        },
        {
            id: 11,
            name: "Kiwi",
            price: 180,
            image: "https://images.unsplash.com/photo-1616684000067-36952fde56ec?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Vitamin C-rich kiwi with unique sweet-tart flavor.",
            nutrition: {
                calories: 42,
                protein: "0.8g",
                carbs: "10.1g",
                fat: "0.4g",
                fiber: "2.1g"
            }
        },
        {
            id: 12,
            name: "Pomegranate",
            price: 160,
            image: "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Antioxidant-rich pomegranate with sweet-tart arils.",
            nutrition: {
                calories: 83,
                protein: "1.7g",
                carbs: "18.7g",
                fat: "1.2g",
                fiber: "4g"
            }
        },
        {
            id: 13,
            name: "Guava",
            price: 70,
            image: "https://images.unsplash.com/photo-1689996647327-5d263fbbc79d?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Vitamin C-rich guava with sweet, tropical flavor.",
            nutrition: {
                calories: 68,
                protein: "2.6g",
                carbs: "14.3g",
                fat: "0.9g",
                fiber: "5.4g"
            }
        },
        {
            id: 14,
            name: "Papaya",
            price: 50,
            image: "https://plus.unsplash.com/premium_photo-1723369639392-b742cee4db02?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Digestive enzyme-rich papaya with sweet, tropical flavor.",
            nutrition: {
                calories: 43,
                protein: "0.5g",
                carbs: "10.8g",
                fat: "0.3g",
                fiber: "1.7g"
            }
        },
        {
            id: 15,
            name: "Dragon Fruit",
            price: 250,
            image: "https://images.unsplash.com/photo-1635843110565-cb35d1c03d86?w=500&h=300&fit=crop",
            category: "Fruits",
            description: "Exotic dragon fruit with mild sweetness and unique appearance.",
            nutrition: {
                calories: 60,
                protein: "1.2g",
                carbs: "13g",
                fat: "0.4g",
                fiber: "3g"
            }
        },
       
        // Vegetables
        {
            id: 16,
            name: "Tomato",
            price: 30,
            image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Fresh, juicy tomatoes perfect for salads, cooking, or making sauces.",
            nutrition: {
                calories: 22,
                protein: "1.1g",
                carbs: "4.8g",
                fat: "0.2g",
                fiber: "1.2g"
            }
        },
        {
            id: 17,
            name: "Cucumber",
            price: 20,
            image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Hydrating cucumber with crisp texture and mild flavor.",
            nutrition: {
                calories: 15,
                protein: "0.6g",
                carbs: "3.6g",
                fat: "0.1g",
                fiber: "0.5g"
            }
        },
        {
            id: 18,
            name: "Carrot",
            price: 40,
            image: " https://images.unsplash.com/photo-1582515073490-39981397c445?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Beta-carotene rich carrots with sweet, crunchy texture.",
            nutrition: {
                calories: 41,
                protein: "0.9g",
                carbs: "9.6g",
                fat: "0.2g",
                fiber: "2.8g"
            }
        },
        {
            id: 19,
            name: "Spinach",
            price: 50,
            image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Iron-rich spinach with tender leaves and mild flavor.",
            nutrition: {
                calories: 23,
                protein: "2.9g",
                carbs: "3.6g",
                fat: "0.4g",
                fiber: "2.2g"
            }
        },
        {
            id: 20,
            name: "Bell Pepper",
            price: 60,
            image: "https://images.unsplash.com/photo-1506365069540-904bcc762636?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Vitamin C-rich bell peppers with sweet, crisp texture.",
            nutrition: {
                calories: 31,
                protein: "1g",
                carbs: "6g",
                fat: "0.3g",
                fiber: "2.1g"
            }
        },
        {
            id: 21,
            name: "Onion",
            price: 60,
            image: "https://images.unsplash.com/photo-1683355739329-cea18ba93f02?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Flavorful onions with layers of sweet and pungent taste.",
            nutrition: {
                calories: 40,
                protein: "1.1g",
                carbs: "9.3g",
                fat: "0.1g",
                fiber: "1.7g"
            }
        },
        {
            id: 22,
            name: "Beetroot",
            price: 45,
            image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Nutrient-rich beetroot with earthy sweetness.",
            nutrition: {
                calories: 43,
                protein: "1.6g",
                carbs: "9.6g",
                fat: "0.2g",
                fiber: "2.8g"
            }
        },
        {
            id: 23,
            name: "Garlic",
            price: 100,
            image: " https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Aromatic garlic with intense flavor and health benefits.",
            nutrition: {
                calories: 149,
                protein: "6.4g",
                carbs: "33.1g",
                fat: "0.5g",
                fiber: "2.1g"
            }
        },
        {
            id: 24,
            name: "Cauliflower",
            price: 40,
            image: "https://images.unsplash.com/photo-1692956706779-576c151ec712?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Versatile cauliflower with mild, nutty flavor.",
            nutrition: {
                calories: 25,
                protein: "1.9g",
                carbs: "5g",
                fat: "0.3g",
                fiber: "2.5g"
            }
        },
        {
            id: 25,
            name: "Broccoli",
            price: 70,
            image: "https://images.unsplash.com/photo-1614336215203-05a588f74627?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Nutrient-dense broccoli with crisp texture.",
            nutrition: {
                calories: 34,
                protein: "2.8g",
                carbs: "7g",
                fat: "0.4g",
                fiber: "2.6g"
            }
        },
        {
            id: 26,
            name: "Potato",
            price: 40,
            image: "https://images.unsplash.com/photo-1675501344642-92d35d90fe51?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Starchy potatoes perfect for various cooking methods.",
            nutrition: {
                calories: 77,
                protein: "2g",
                carbs: "17g",
                fat: "0.1g",
                fiber: "2.2g"
            }
        },
        {
            id: 27,
            name: "Sweet Potato",
            price: 40,
            image: "https://images.unsplash.com/photo-1730815048561-45df6f7f331d?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Nutritious sweet potatoes with natural sweetness.",
            nutrition: {
                calories: 86,
                protein: "1.6g",
                carbs: "20.1g",
                fat: "0.1g",
                fiber: "3g"
            }
        },
        {
            id: 28,
            name: "Brinjal",
            price: 50,
            image: "https://images.unsplash.com/photo-1683543122945-513029986574?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Versatile eggplant with meaty texture.",
            nutrition: {
                calories: 25,
                protein: "1g",
                carbs: "5.9g",
                fat: "0.2g",
                fiber: "3g"
            }
        },
        {
            id: 29,
            name: "Zucchini",
            price: 55,
            image: "https://images.unsplash.com/photo-1730202351667-a4599d13a92c?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Mild-flavored zucchini with tender texture.",
            nutrition: {
                calories: 17,
                protein: "1.2g",
                carbs: "3.1g",
                fat: "0.3g",
                fiber: "1g"
            }
        },
        {
            id: 30,
            name: "Mushroom",
            price: 100,
            image:  "https://images.unsplash.com/photo-1729757241143-e6658da191e9?w=500&h=300&fit=crop",
            category: "Vegetables",
            description: "Umami-rich mushrooms with meaty texture.",
            nutrition: {
                calories: 22,
                protein: "3.1g",
                carbs: "3.3g",
                fat: "0.3g",
                fiber: "1g"
            }
        },
       
        // Spices
        {
            id: 31,
            name: "Turmeric",
            price: 80,
            image: "https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Anti-inflammatory turmeric with warm, earthy flavor.",
            nutrition: {
                calories: 29,
                protein: "0.9g",
                carbs: "6.3g",
                fat: "0.3g",
                fiber: "2.1g"
            }
        },
        {
            id: 32,
            name: "Cinnamon",
            price: 90,
            image: "https://images.unsplash.com/photo-1622798337764-259682f03741?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Sweet and aromatic cinnamon with warming properties.",
            nutrition: {
                calories: 247,
                protein: "4g",
                carbs: "80.6g",
                fat: "1.2g",
                fiber: "53.1g"
            }
        },
        {
            id: 33,
            name: "Cloves",
            price: 85,
            image: "https://images.unsplash.com/photo-1604002192780-0f2c815fc29e?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Strongly aromatic cloves with intense flavor.",
            nutrition: {
                calories: 274,
                protein: "6g",
                carbs: "65.5g",
                fat: "13g",
                fiber: "33.9g"
            }
        },
        {
            id: 34,
            name: "Peppercorns",
            price: 70,
            image: "https://images.unsplash.com/photo-1649952052743-5e8f37c348c5?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Classic black peppercorns with sharp, pungent flavor.",
            nutrition: {
                calories: 251,
                protein: "10.4g",
                carbs: "63.9g",
                fat: "3.3g",
                fiber: "25.3g"
            }
        },
        {
            id: 35,
            name: "Chili Powder",
            price: 75,
            image: "https://images.unsplash.com/photo-1625921133217-8d978f7872b8?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Spicy chili powder with complex flavor profile.",
            nutrition: {
                calories: 282,
                protein: "12g",
                carbs: "49.7g",
                fat: "14.3g",
                fiber: "34.8g"
            }
        },
        {
            id: 36,
            name: "Coriander",
            price: 75,
            image: "https://images.unsplash.com/photo-1652209741060-041f95ad2abf?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Fresh and citrusy coriander seeds.",
            nutrition: {
                calories: 298,
                protein: "12.4g",
                carbs: "55g",
                fat: "17.8g",
                fiber: "41.9g"
            }
        },
        {
            id: 37,
            name: "Saffron",
            price: 300,
            image: "https://images.unsplash.com/photo-1643471672168-f4a4b6cfa440?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Premium saffron with distinct aroma and flavor.",
            nutrition: {
                calories: 310,
                protein: "11.4g",
                carbs: "65.4g",
                fat: "5.9g",
                fiber: "3.9g"
            }
        },
        {
            id: 38,
            name: "Garam Masala",
            price: 90,
            image:  "https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Aromatic blend of ground spices.",
            nutrition: {
                calories: 280,
                protein: "10g",
                carbs: "60g",
                fat: "12g",
                fiber: "25g"
            }
        },
        {
            id: 39,
            name: "Fenugreek",
            price: 80,
            image: " https://images.unsplash.com/photo-1640671511581-0cc93ea3ebf2?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Maple-scented fenugreek seeds with bitter-sweet taste.",
            nutrition: {
                calories: 323,
                protein: "23g",
                carbs: "58.4g",
                fat: "6.4g",
                fiber: "24.6g"
            }
        },
        {
            id: 40,
            name: "Mustard Seeds",
            price: 40,
            image: "https://images.unsplash.com/photo-1701188542949-210beb8e382c?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Sharp and pungent mustard seeds.",
            nutrition: {
                calories: 508,
                protein: "26.1g",
                carbs: "28.1g",
                fat: "36.2g",
                fiber: "12.2g"
            }
        },
        {
            id: 41,
            name: "Cardamom",
            price: 120,
            image: "https://images.unsplash.com/photo-1622824497447-b284a5493027?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Sweet and aromatic cardamom pods.",
            nutrition: {
                calories: 311,
                protein: "10.8g",
                carbs: "68.5g",
                fat: "6.7g",
                fiber: "28g"
            }
        },
        {
            id: 42,
            name: "Cumin",
            price: 65,
            image: " https://images.unsplash.com/photo-1701189975806-97b11541ec82?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Warm and earthy cumin seeds.",
            nutrition: {
                calories: 375,
                protein: "17.8g",
                carbs: "44.2g",
                fat: "22.3g",
                fiber: "10.5g"
            }
        },
        {
            id: 43,
            name: "Star Anise",
            price: 95,
            image: "https://images.unsplash.com/photo-1679744951863-85dbd8ac386e?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Licorice-flavored star-shaped spice.",
            nutrition: {
                calories: 337,
                protein: "17.6g",
                carbs: "50g",
                fat: "15.9g",
                fiber: "14.6g"
            }
        },
        {
            id: 44,
            name: "Bay Leaves",
            price: 50,
            image: " https://images.unsplash.com/photo-1634612830627-3d0623108087?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmF5JTIwTGVhdmVzfGVufDB8fDB8fHww",
            category: "Spices",
            description: "Aromatic bay leaves for soups and stews.",
            nutrition: {
                calories: 313,
                protein: "7.6g",
                carbs: "74.9g",
                fat: "8.4g",
                fiber: "26.3g"
            }
        },
        {
            id: 45,
            name: "Nutmeg",
            price: 110,
            image: " https://images.unsplash.com/photo-1705231956273-a0c993f7a1d3?w=500&h=300&fit=crop",
            category: "Spices",
            description: "Sweet and nutty ground nutmeg.",
            nutrition: {
                calories: 525,
                protein: "5.8g",
                carbs: "49.3g",
                fat: "36.3g",
                fiber: "20.8g"
            }
        },
       
        // Herbs
        {
            id: 46,
            name: "Rosemary",
            price: 85,
            image: "https://images.unsplash.com/photo-1586161665517-0325578c2784?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Aromatic rosemary with pine-like fragrance.",
            nutrition: {
                calories: 131,
                protein: "3.3g",
                carbs: "20.7g",
                fat: "5.9g",
                fiber: "14.1g"
            }
        },
        {
            id: 47,
            name: "Thyme",
            price: 95,
            image: "https://plus.unsplash.com/premium_photo-1726138617688-e6bfd9f0de5c?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Fragrant thyme with minty, lemony flavor.",
            nutrition: {
                calories: 101,
                protein: "5.6g",
                carbs: "24.5g",
                fat: "1.7g",
                fiber: "14g"
            }
        },
        {
            id: 48,
            name: "Basil",
            price: 70,
            image: "https://images.unsplash.com/photo-1629157247277-48f870757026?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Sweet basil with fresh, peppery aroma.",
            nutrition: {
                calories: 23,
                protein: "3.2g",
                carbs: "2.7g",
                fat: "0.6g",
                fiber: "1.6g"
            }
        },
        {
            id: 49,
            name: "Oregano",
            price: 65,
            image: "https://images.unsplash.com/photo-1567454932354-6cafa1ca23e2?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Strongly flavored oregano with Mediterranean notes.",
            nutrition: {
                calories: 265,
                protein: "9g",
                carbs: "68.9g",
                fat: "4.3g",
                fiber: "42.5g"
            }
        },
        {
            id: 50,
            name: "Parsley",
            price: 75,
            image: "https://images.unsplash.com/photo-1590759485418-90509afec818?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Fresh parsley with bright, clean flavor.",
            nutrition: {
                calories: 36,
                protein: "3g",
                carbs: "6.3g",
                fat: "0.8g",
                fiber: "3.3g"
            }
        },
        {
            id: 51,
            name: "Dill",
            price: 60,
            image: "https://images.unsplash.com/photo-1694916202336-e49dc321954d?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Feathery dill with anise-like flavor.",
            nutrition: {
                calories: 43,
                protein: "3.5g",
                carbs: "7g",
                fat: "1.1g",
                fiber: "2.1g"
            }
        },
        {
            id: 52,
            name: "Mint",
            price: 80,
            image: "https://images.unsplash.com/photo-1588908933351-eeb8cd4c4521?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Cooling mint with refreshing aroma.",
            nutrition: {
                calories: 70,
                protein: "3.8g",
                carbs: "14.9g",
                fat: "0.9g",
                fiber: "8g"
            }
        },
        {
            id: 53,
            name: "Cilantro",
            price: 55,
            image: "https://images.unsplash.com/photo-1723810330043-dd05647294cb?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Fresh cilantro with citrusy, herbal notes.",
            nutrition: {
                calories: 23,
                protein: "2.1g",
                carbs: "3.7g",
                fat: "0.5g",
                fiber: "2.8g"
            }
        },
        {
            id: 54,
            name: "Bay Leaves",
            price: 50,
            image: "https://images.unsplash.com/photo-1462374382194-b17428f8c5c4?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Aromatic bay leaves for soups and stews.",
            nutrition: {
                calories: 313,
                protein: "7.6g",
                carbs: "74.9g",
                fat: "8.4g",
                fiber: "26.3g"
            }
        },
        {
            id: 55,
            name: "Chives",
            price: 60,
            image: "https://plus.unsplash.com/premium_photo-1726880591323-ce8e64b02a41?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Delicate chives with mild onion flavor.",
            nutrition: {
                calories: 30,
                protein: "3.3g",
                carbs: "4.4g",
                fat: "0.7g",
                fiber: "2.5g"
            }
        },
        {
            id: 56,
            name: "Sage",
            price: 90,
            image: "https://images.unsplash.com/photo-1617314608196-356afaecfe7c?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Earthy sage with strong, savory flavor.",
            nutrition: {
                calories: 315,
                protein: "10.6g",
                carbs: "60.7g",
                fat: "12.7g",
                fiber: "40.3g"
            }
        },
        {
            id: 57,
            name: "Tarragon",
            price: 85,
            image: "https://plus.unsplash.com/premium_photo-1675802754634-3e0967bd3fab?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Anise-flavored tarragon with subtle sweetness.",
            nutrition: {
                calories: 295,
                protein: "22.8g",
                carbs: "50.2g",
                fat: "7.2g",
                fiber: "7.4g"
            }
        },
        {
            id: 58,
            name: "Lavender",
            price: 100,
            image: "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Floral lavender with sweet, aromatic notes.",
            nutrition: {
                calories: 49,
                protein: "0.7g",
                carbs: "10.9g",
                fat: "0.7g",
                fiber: "5g"
            }
        },
        {
            id: 59,
            name: "Lemongrass",
            price: 75,
            image: "https://images.unsplash.com/photo-1560705889-dc78ff46bbd6?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Citrusy lemongrass with fresh, tangy flavor.",
            nutrition: {
                calories: 99,
                protein: "1.8g",
                carbs: "25.3g",
                fat: "0.3g",
                fiber: "0g"
            }
        },
        {
            id: 60,
            name: "Marjoram",
            price: 70,
            image:  "https://images.unsplash.com/photo-1501085934018-450c8e615dbc?w=500&h=300&fit=crop",
            category: "Herbs",
            description: "Sweet marjoram with citrus and pine notes.",
            nutrition: {
                calories: 271,
                protein: "12.7g",
                carbs: "60.6g",
                fat: "7g",
                fiber: "40.3g"
            }
        },
       
        // Grains
        {
            id: 61,
            name: "Quinoa",
            price: 140,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Nutrient-rich quinoa perfect for salads, bowls, or as a side dish.",
            nutrition: {
                calories: 120,
                protein: "4.4g",
                carbs: "21.3g",
                fat: "1.9g",
                fiber: "2.8g"
            }
        },
        {
            id: 62,
            name: "Oats",
            price: 120,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Whole grain oats rich in fiber and perfect for breakfast.",
            nutrition: {
                calories: 389,
                protein: "16.9g",
                carbs: "66.3g",
                fat: "6.9g",
                fiber: "10.6g"
            }
        },
        {
            id: 63,
            name: "Barley",
            price: 110,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Nutty barley with chewy texture, great for soups and salads.",
            nutrition: {
                calories: 354,
                protein: "12.5g",
                carbs: "73.5g",
                fat: "2.3g",
                fiber: "17.3g"
            }
        },
        {
            id: 64,
            name: "Brown Rice",
            price: 130,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Whole grain brown rice with nutty flavor and chewy texture.",
            nutrition: {
                calories: 216,
                protein: "5g",
                carbs: "45g",
                fat: "1.8g",
                fiber: "3.5g"
            }
        },
        {
            id: 65,
            name: "Buckwheat",
            price: 125,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Gluten-free buckwheat with earthy flavor, perfect for porridge.",
            nutrition: {
                calories: 343,
                protein: "13.3g",
                carbs: "71.5g",
                fat: "3.4g",
                fiber: "10g"
            }
        },
        {
            id: 66,
            name: "Millet",
            price: 115,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Ancient grain millet with mild, nutty flavor.",
            nutrition: {
                calories: 378,
                protein: "11g",
                carbs: "72.9g",
                fat: "4.2g",
                fiber: "8.5g"
            }
        },
        {
            id: 67,
            name: "Amaranth",
            price: 95,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Protein-rich amaranth with earthy, nutty taste.",
            nutrition: {
                calories: 371,
                protein: "14.5g",
                carbs: "65.2g",
                fat: "6.5g",
                fiber: "6.7g"
            }
        },
        {
            id: 68,
            name: "Rye",
            price: 110,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Whole grain rye with robust, earthy flavor.",
            nutrition: {
                calories: 338,
                protein: "10.3g",
                carbs: "75.9g",
                fat: "1.6g",
                fiber: "15.1g"
            }
        },
        {
            id: 69,
            name: "Polenta",
            price: 105,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Creamy polenta made from ground cornmeal.",
            nutrition: {
                calories: 85,
                protein: "2.1g",
                carbs: "18.2g",
                fat: "0.4g",
                fiber: "1.8g"
            }
        },
        {
            id: 70,
            name: "Farro",
            price: 135,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Ancient wheat grain with chewy texture and nutty flavor.",
            nutrition: {
                calories: 340,
                protein: "12g",
                carbs: "68g",
                fat: "2.5g",
                fiber: "10g"
            }
        },
        {
            id: 71,
            name: "Wild Rice",
            price: 150,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Nutritious wild rice with chewy texture and nutty flavor.",
            nutrition: {
                calories: 166,
                protein: "6.5g",
                carbs: "35g",
                fat: "0.6g",
                fiber: "3g"
            }
        },
        {
            id: 72,
            name: "Sorghum",
            price: 100,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Gluten-free ancient grain with mild, nutty flavor.",
            nutrition: {
                calories: 329,
                protein: "10.7g",
                carbs: "72g",
                fat: "3.5g",
                fiber: "6.7g"
            }
        },
        {
            id: 73,
            name: "Teff",
            price: 145,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Tiny Ethiopian grain with mild, nutty flavor.",
            nutrition: {
                calories: 367,
                protein: "13.3g",
                carbs: "73.1g",
                fat: "2.4g",
                fiber: "8g"
            }
        },
        {
            id: 74,
            name: "Spelt",
            price: 130,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Ancient wheat variety with nutty, slightly sweet flavor.",
            nutrition: {
                calories: 338,
                protein: "14.6g",
                carbs: "70.2g",
                fat: "2.4g",
                fiber: "10.7g"
            }
        },
        {
            id: 75,
            name: "Kamut",
            price: 160,
            image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&h=500&fit=crop",
            category: "Grains",
            description: "Ancient wheat grain with rich, buttery flavor.",
            nutrition: {
                calories: 337,
                protein: "14.7g",
                carbs: "70.4g",
                fat: "2.2g",
                fiber: "11.1g"
            }
        },
        {
            id: 76,
            name: "Milk",
            price: 40,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Fresh, whole milk rich in calcium and essential nutrients.",
            nutrition: {
                calories: 103,
                protein: "8g",
                carbs: "12g",
                fat: "2.4g",
                fiber: "0g"
            }
        },
        {
            id: 77,
            name: "Cheese",
            price: 150,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Aged cheddar cheese with rich, sharp flavor.",
            nutrition: {
                calories: 402,
                protein: "22.9g",
                carbs: "1.3g",
                fat: "33.1g",
                fiber: "0g"
            }
        },
        {
            id: 78,
            name: "Butter",
            price: 100,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Creamy butter made from fresh cream.",
            nutrition: {
                calories: 717,
                protein: "0.9g",
                carbs: "0.1g",
                fat: "81.1g",
                fiber: "0g"
            }
        },
        {
            id: 79,
            name: "Yogurt",
            price: 80,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Creamy yogurt with live active cultures.",
            nutrition: {
                calories: 61,
                protein: "3.5g",
                carbs: "4.7g",
                fat: "3.3g",
                fiber: "0g"
            }
        },
        {
            id: 80,
            name: "Cream",
            price: 90,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Heavy cream perfect for whipping and cooking.",
            nutrition: {
                calories: 340,
                protein: "2.8g",
                carbs: "2.8g",
                fat: "36.1g",
                fiber: "0g"
            }
        },
        {
            id: 81,
            name: "Cottage Cheese",
            price: 70,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Fresh cottage cheese with creamy curds.",
            nutrition: {
                calories: 98,
                protein: "11.1g",
                carbs: "3.4g",
                fat: "4.3g",
                fiber: "0g"
            }
        },
        {
            id: 82,
            name: "Ricotta",
            price: 120,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Fresh ricotta cheese with smooth, creamy texture.",
            nutrition: {
                calories: 174,
                protein: "11.3g",
                carbs: "3.8g",
                fat: "13g",
                fiber: "0g"
            }
        },
        {
            id: 83,
            name: "Mozzarella",
            price: 130,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Fresh mozzarella with soft, elastic texture.",
            nutrition: {
                calories: 280,
                protein: "28g",
                carbs: "3.1g",
                fat: "17g",
                fiber: "0g"
            }
        },
        {
            id: 84,
            name: "Swiss Cheese",
            price: 160,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Aged Swiss cheese with distinctive holes.",
            nutrition: {
                calories: 380,
                protein: "27g",
                carbs: "1.5g",
                fat: "28g",
                fiber: "0g"
            }
        },
        {
            id: 85,
            name: "Parmesan",
            price: 170,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Aged Parmesan with sharp, nutty flavor.",
            nutrition: {
                calories: 392,
                protein: "35.7g",
                carbs: "4.1g",
                fat: "25.8g",
                fiber: "0g"
            }
        },
        {
            id: 86,
            name: "Feta",
            price: 140,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Crumbly feta cheese with tangy flavor.",
            nutrition: {
                calories: 264,
                protein: "14.2g",
                carbs: "4.1g",
                fat: "21.3g",
                fiber: "0g"
            }
        },
        {
            id: 87,
            name: "Brie",
            price: 180,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Creamy Brie with edible rind.",
            nutrition: {
                calories: 334,
                protein: "20.7g",
                carbs: "0.5g",
                fat: "27.7g",
                fiber: "0g"
            }
        },
        {
            id: 88,
            name: "Gouda",
            price: 150,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Aged Gouda with rich, caramel-like flavor.",
            nutrition: {
                calories: 356,
                protein: "24.9g",
                carbs: "1.4g",
                fat: "27.4g",
                fiber: "0g"
            }
        },
        {
            id: 89,
            name: "Cheddar",
            price: 130,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Sharp cheddar cheese with rich flavor.",
            nutrition: {
                calories: 402,
                protein: "22.9g",
                carbs: "1.3g",
                fat: "33.1g",
                fiber: "0g"
            }
        },
        {
            id: 90,
            name: "Blue Cheese",
            price: 190,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=500&fit=crop",
            category: "Dairy",
            description: "Aged blue cheese with distinctive mold veins.",
            nutrition: {
                calories: 353,
                protein: "21.4g",
                carbs: "1.4g",
                fat: "28.7g",
                fiber: "0g"
            }
        },
        {
            id: 91,
            name: "Chicken Breast",
            price: 250,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Lean, tender chicken breast perfect for grilling, baking, or stir-frying.",
            nutrition: {
                calories: 165,
                protein: "31g",
                carbs: "0g",
                fat: "3.6g",
                fiber: "0g"
            }
        },
        {
            id: 92,
            name: "Salmon",
            price: 300,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Fresh Atlantic salmon rich in omega-3 fatty acids.",
            nutrition: {
                calories: 208,
                protein: "22.1g",
                carbs: "0g",
                fat: "13.4g",
                fiber: "0g"
            }
        },
        {
            id: 93,
            name: "Pork Tenderloin",
            price: 280,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Lean pork tenderloin with tender texture.",
            nutrition: {
                calories: 143,
                protein: "26g",
                carbs: "0g",
                fat: "3.5g",
                fiber: "0g"
            }
        },
        {
            id: 94,
            name: "Beef Sirloin",
            price: 350,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Premium beef sirloin with rich flavor.",
            nutrition: {
                calories: 243,
                protein: "27g",
                carbs: "0g",
                fat: "15.4g",
                fiber: "0g"
            }
        },
        {
            id: 95,
            name: "Shrimp",
            price: 270,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Fresh shrimp with sweet, delicate flavor.",
            nutrition: {
                calories: 99,
                protein: "24g",
                carbs: "0.2g",
                fat: "0.3g",
                fiber: "0g"
            }
        },
        {
            id: 96,
            name: "Lamb Chops",
            price: 300,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Tender lamb chops with rich flavor.",
            nutrition: {
                calories: 294,
                protein: "25g",
                carbs: "0g",
                fat: "21.3g",
                fiber: "0g"
            }
        },
        {
            id: 97,
            name: "Duck",
            price: 320,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Whole duck with rich, gamey flavor.",
            nutrition: {
                calories: 337,
                protein: "19g",
                carbs: "0g",
                fat: "28.4g",
                fiber: "0g"
            }
        },
        {
            id: 98,
            name: "Turkey",
            price: 280,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Lean turkey breast with mild flavor.",
            nutrition: {
                calories: 135,
                protein: "30g",
                carbs: "0g",
                fat: "3g",
                fiber: "0g"
            }
        },
        {
            id: 99,
            name: "Crab Legs",
            price: 400,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Sweet crab legs with tender meat.",
            nutrition: {
                calories: 97,
                protein: "19.4g",
                carbs: "0g",
                fat: "1.5g",
                fiber: "0g"
            }
        },
        {
            id: 100,
            name: "Scallops",
            price: 380,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Sweet sea scallops with tender texture.",
            nutrition: {
                calories: 111,
                protein: "23.2g",
                carbs: "0g",
                fat: "0.8g",
                fiber: "0g"
            }
        },
        {
            id: 101,
            name: "Tuna",
            price: 290,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Fresh tuna steak rich in omega-3 fatty acids.",
            nutrition: {
                calories: 184,
                protein: "30g",
                carbs: "0g",
                fat: "6.3g",
                fiber: "0g"
            }
        },
        {
            id: 102,
            name: "Lobster",
            price: 450,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Fresh lobster with sweet, tender meat.",
            nutrition: {
                calories: 89,
                protein: "19g",
                carbs: "0.5g",
                fat: "0.5g",
                fiber: "0g"
            }
        },
        {
            id: 103,
            name: "Ribeye Steak",
            price: 420,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Premium ribeye steak with rich marbling.",
            nutrition: {
                calories: 291,
                protein: "24g",
                carbs: "0g",
                fat: "21g",
                fiber: "0g"
            }
        },
        {
            id: 104,
            name: "Ground Beef",
            price: 260,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Fresh ground beef perfect for burgers and meatloaf.",
            nutrition: {
                calories: 332,
                protein: "20g",
                carbs: "0g",
                fat: "28g",
                fiber: "0g"
            }
        },
        {
            id: 105,
            name: "Pork Belly",
            price: 310,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Meat & Seafood",
            description: "Rich pork belly with perfect fat-to-meat ratio.",
            nutrition: {
                calories: 518,
                protein: "9.3g",
                carbs: "0g",
                fat: "53g",
                fiber: "0g"
            }
        },
        {
            id: 106,
            name: "Baking Powder",
            price: 45,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Double-acting baking powder for perfect rise in baked goods.",
            nutrition: {
                calories: 53,
                protein: "0g",
                carbs: "28g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 107,
            name: "Baking Soda",
            price: 35,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Pure sodium bicarbonate for baking and cleaning.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 108,
            name: "Vanilla Extract",
            price: 120,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Pure vanilla extract for rich, authentic flavor.",
            nutrition: {
                calories: 288,
                protein: "0.1g",
                carbs: "12.7g",
                fat: "0.1g",
                fiber: "0g"
            }
        },
        {
            id: 109,
            name: "Cocoa Powder",
            price: 150,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Unsweetened cocoa powder for rich chocolate flavor.",
            nutrition: {
                calories: 228,
                protein: "19.6g",
                carbs: "57.9g",
                fat: "13.7g",
                fiber: "33.2g"
            }
        },
        {
            id: 110,
            name: "Yeast",
            price: 40,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Active dry yeast for bread and pizza dough.",
            nutrition: {
                calories: 325,
                protein: "40.4g",
                carbs: "41.2g",
                fat: "7.6g",
                fiber: "26.9g"
            }
        },
        {
            id: 111,
            name: "Cornstarch",
            price: 50,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Fine cornstarch for thickening sauces and gravies.",
            nutrition: {
                calories: 381,
                protein: "0.3g",
                carbs: "91.3g",
                fat: "0.1g",
                fiber: "0.9g"
            }
        },
        {
            id: 112,
            name: "Cream of Tartar",
            price: 60,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Tartaric acid for stabilizing egg whites and preventing sugar crystallization.",
            nutrition: {
                calories: 258,
                protein: "0g",
                carbs: "61.5g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 113,
            name: "Food Coloring",
            price: 30,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Natural food coloring for vibrant baked goods.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 114,
            name: "Gelatin",
            price: 70,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Unflavored gelatin for jellies and desserts.",
            nutrition: {
                calories: 335,
                protein: "85.6g",
                carbs: "0g",
                fat: "0.1g",
                fiber: "0g"
            }
        },
        {
            id: 115,
            name: "Marshmallows",
            price: 80,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Soft, fluffy marshmallows for desserts and hot cocoa.",
            nutrition: {
                calories: 318,
                protein: "1.8g",
                carbs: "81.3g",
                fat: "0.2g",
                fiber: "0.1g"
            }
        },
        {
            id: 116,
            name: "Sprinkles",
            price: 40,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Colorful sprinkles for decorating cakes and cookies.",
            nutrition: {
                calories: 500,
                protein: "0g",
                carbs: "100g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 117,
            name: "Chocolate Chips",
            price: 100,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Semi-sweet chocolate chips for cookies and baking.",
            nutrition: {
                calories: 480,
                protein: "5g",
                carbs: "63g",
                fat: "30g",
                fiber: "3g"
            }
        },
        {
            id: 118,
            name: "Nuts",
            price: 150,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Mixed nuts for baking and snacking.",
            nutrition: {
                calories: 607,
                protein: "20g",
                carbs: "21g",
                fat: "54g",
                fiber: "7g"
            }
        },
        {
            id: 119,
            name: "Dried Fruits",
            price: 120,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Mixed dried fruits for baking and snacking.",
            nutrition: {
                calories: 359,
                protein: "3.4g",
                carbs: "95g",
                fat: "0.5g",
                fiber: "9.8g"
            }
        },
        {
            id: 120,
            name: "Coconut Flakes",
            price: 90,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Baking",
            description: "Sweetened coconut flakes for baking and desserts.",
            nutrition: {
                calories: 443,
                protein: "4.4g",
                carbs: "53.4g",
                fat: "31.7g",
                fiber: "9.1g"
            }
        },
        {
            id: 121,
            name: "Candy",
            price: 60,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Assorted candies for snacking and decorating.",
            nutrition: {
                calories: 387,
                protein: "0g",
                carbs: "98g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 122,
            name: "Chips",
            price: 70,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Crispy potato chips in various flavors.",
            nutrition: {
                calories: 536,
                protein: "7g",
                carbs: "53g",
                fat: "34g",
                fiber: "4g"
            }
        },
        {
            id: 123,
            name: "Popcorn",
            price: 50,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Kernel popcorn for popping at home.",
            nutrition: {
                calories: 387,
                protein: "13g",
                carbs: "78g",
                fat: "5g",
                fiber: "15g"
            }
        },
        {
            id: 124,
            name: "Pretzels",
            price: 65,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Crunchy pretzels in various shapes and sizes.",
            nutrition: {
                calories: 380,
                protein: "9g",
                carbs: "80g",
                fat: "3g",
                fiber: "3g"
            }
        },
        {
            id: 125,
            name: "Nuts Mix",
            price: 180,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Mixed nuts and dried fruits for healthy snacking.",
            nutrition: {
                calories: 607,
                protein: "20g",
                carbs: "21g",
                fat: "54g",
                fiber: "7g"
            }
        },
        {
            id: 126,
            name: "Granola Bars",
            price: 85,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Healthy granola bars with nuts and dried fruits.",
            nutrition: {
                calories: 490,
                protein: "10g",
                carbs: "64g",
                fat: "24g",
                fiber: "5g"
            }
        },
        {
            id: 127,
            name: "Dried Fruits Mix",
            price: 95,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Mixed dried fruits for healthy snacking.",
            nutrition: {
                calories: 359,
                protein: "3.4g",
                carbs: "95g",
                fat: "0.5g",
                fiber: "9.8g"
            }
        },
        {
            id: 128,
            name: "Trail Mix",
            price: 160,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Energy-packed trail mix with nuts, seeds, and dried fruits.",
            nutrition: {
                calories: 462,
                protein: "14g",
                carbs: "45g",
                fat: "30g",
                fiber: "6g"
            }
        },
        {
            id: 129,
            name: "Rice Cakes",
            price: 45,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Light and crispy rice cakes in various flavors.",
            nutrition: {
                calories: 35,
                protein: "0.7g",
                carbs: "7.3g",
                fat: "0.3g",
                fiber: "0.4g"
            }
        },
        {
            id: 130,
            name: "Crackers",
            price: 55,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Snacks",
            description: "Crispy crackers in various flavors and styles.",
            nutrition: {
                calories: 445,
                protein: "7g",
                carbs: "71g",
                fat: "16g",
                fiber: "3g"
            }
        },
        {
            id: 131,
            name: "Coffee Beans",
            price: 200,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Premium coffee beans for fresh brewing.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 132,
            name: "Tea Leaves",
            price: 150,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "High-quality tea leaves for brewing.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 133,
            name: "Juice",
            price: 80,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Fresh fruit juice in various flavors.",
            nutrition: {
                calories: 111,
                protein: "0.7g",
                carbs: "26.8g",
                fat: "0.3g",
                fiber: "0.5g"
            }
        },
        {
            id: 134,
            name: "Soda",
            price: 40,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Carbonated soft drinks in various flavors.",
            nutrition: {
                calories: 140,
                protein: "0g",
                carbs: "39g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 135,
            name: "Energy Drinks",
            price: 90,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Energy drinks with caffeine and vitamins.",
            nutrition: {
                calories: 110,
                protein: "0g",
                carbs: "27g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 136,
            name: "Water",
            price: 30,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Pure bottled water for hydration.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 137,
            name: "Sports Drinks",
            price: 70,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Electrolyte-rich sports drinks for hydration.",
            nutrition: {
                calories: 80,
                protein: "0g",
                carbs: "21g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 138,
            name: "Hot Chocolate",
            price: 100,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Rich hot chocolate mix for warm drinks.",
            nutrition: {
                calories: 377,
                protein: "9g",
                carbs: "77g",
                fat: "3g",
                fiber: "3g"
            }
        },
        {
            id: 139,
            name: "Coconut Water",
            price: 85,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Natural coconut water for hydration.",
            nutrition: {
                calories: 19,
                protein: "0.7g",
                carbs: "3.7g",
                fat: "0.2g",
                fiber: "1.1g"
            }
        },
        {
            id: 140,
            name: "Green Tea",
            price: 120,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Premium green tea leaves for brewing.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 141,
            name: "Coffee Grounds",
            price: 180,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Freshly ground coffee for brewing.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 142,
            name: "Herbal Tea",
            price: 110,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Natural herbal tea blends for relaxation.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 143,
            name: "Fruit Smoothie Mix",
            price: 130,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Frozen fruit mix for smoothies and shakes.",
            nutrition: {
                calories: 60,
                protein: "1g",
                carbs: "14g",
                fat: "0g",
                fiber: "2g"
            }
        },
        {
            id: 144,
            name: "Protein Powder",
            price: 250,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Whey protein powder for shakes and smoothies.",
            nutrition: {
                calories: 120,
                protein: "24g",
                carbs: "3g",
                fat: "1g",
                fiber: "0g"
            }
        },
        {
            id: 145,
            name: "Matcha Powder",
            price: 200,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Premium Japanese matcha green tea powder.",
            nutrition: {
                calories: 274,
                protein: "30g",
                carbs: "63g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 146,
            name: "Instant Coffee",
            price: 90,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Quick-dissolving instant coffee powder.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 147,
            name: "Chai Tea",
            price: 95,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Spiced chai tea blend for traditional Indian tea.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 148,
            name: "Coconut Milk Powder",
            price: 160,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Dried coconut milk powder for beverages and cooking.",
            nutrition: {
                calories: 466,
                protein: "4.5g",
                carbs: "18g",
                fat: "50g",
                fiber: "0g"
            }
        },
        {
            id: 149,
            name: "Almond Milk",
            price: 140,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Plant-based almond milk for dairy-free beverages.",
            nutrition: {
                calories: 24,
                protein: "1g",
                carbs: "3.4g",
                fat: "2.1g",
                fiber: "0.5g"
            }
        },
        {
            id: 150,
            name: "Soy Milk",
            price: 120,
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
            category: "Beverages",
            description: "Plant-based soy milk for dairy-free beverages.",
            nutrition: {
                calories: 80,
                protein: "7g",
                carbs: "4g",
                fat: "4g",
                fiber: "0.5g"
            }
        },
        {
            id: 151,
            name: "Ketchup",
            price: 45,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Classic tomato ketchup perfect for burgers, fries, and sandwiches.",
            nutrition: {
                calories: 15,
                protein: "0.3g",
                carbs: "3.7g",
                fat: "0g",
                fiber: "0.1g"
            }
        },
        {
            id: 152,
            name: "Mustard",
            price: 50,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Tangy yellow mustard with a perfect balance of spices.",
            nutrition: {
                calories: 3,
                protein: "0.2g",
                carbs: "0.3g",
                fat: "0.2g",
                fiber: "0.1g"
            }
        },
        {
            id: 153,
            name: "Mayonnaise",
            price: 55,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Creamy mayonnaise made with quality ingredients.",
            nutrition: {
                calories: 94,
                protein: "0.1g",
                carbs: "0.6g",
                fat: "10.3g",
                fiber: "0g"
            }
        },
        {
            id: 154,
            name: "Hot Sauce",
            price: 60,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Spicy hot sauce with a perfect blend of chili peppers.",
            nutrition: {
                calories: 0,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 155,
            name: "Soy Sauce",
            price: 65,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Traditional soy sauce with rich umami flavor.",
            nutrition: {
                calories: 8,
                protein: "1.3g",
                carbs: "0.8g",
                fat: "0g",
                fiber: "0.1g"
            }
        },
        {
            id: 156,
            name: "BBQ Sauce",
            price: 70,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Sweet and smoky BBQ sauce perfect for grilling.",
            nutrition: {
                calories: 29,
                protein: "0.3g",
                carbs: "7g",
                fat: "0g",
                fiber: "0.2g"
            }
        },
        {
            id: 157,
            name: "Vinegar",
            price: 40,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Pure white vinegar for cooking and cleaning.",
            nutrition: {
                calories: 3,
                protein: "0g",
                carbs: "0g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 158,
            name: "Hot Mustard",
            price: 55,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Spicy hot mustard with intense flavor.",
            nutrition: {
                calories: 3,
                protein: "0.2g",
                carbs: "0.3g",
                fat: "0.2g",
                fiber: "0.1g"
            }
        },
        {
            id: 159,
            name: "Sweet Chili Sauce",
            price: 60,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Sweet and spicy chili sauce perfect for Asian dishes.",
            nutrition: {
                calories: 35,
                protein: "0.2g",
                carbs: "8.5g",
                fat: "0g",
                fiber: "0.2g"
            }
        },
        {
            id: 160,
            name: "Tartar Sauce",
            price: 50,
            image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=500&fit=crop",
            category: "Condiments",
            description: "Creamy tartar sauce with pickles and herbs.",
            nutrition: {
                calories: 59,
                protein: "0.2g",
                carbs: "1.2g",
                fat: "6.2g",
                fiber: "0g"
            }
        },
        {
            id: 161,
            name: "Black Beans",
            price: 85,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Protein-rich black beans perfect for soups and salads.",
            nutrition: {
                calories: 114,
                protein: "7.6g",
                carbs: "20.4g",
                fat: "0.5g",
                fiber: "7.5g"
            }
        },
        {
            id: 162,
            name: "Lentils",
            price: 75,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Nutritious lentils ideal for soups and curries.",
            nutrition: {
                calories: 116,
                protein: "9g",
                carbs: "20.1g",
                fat: "0.4g",
                fiber: "7.9g"
            }
        },
        {
            id: 163,
            name: "Chickpeas",
            price: 95,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Versatile chickpeas great for hummus and curries.",
            nutrition: {
                calories: 164,
                protein: "8.9g",
                carbs: "27.4g",
                fat: "2.6g",
                fiber: "7.6g"
            }
        },
        {
            id: 164,
            name: "Split Peas",
            price: 70,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Yellow split peas perfect for hearty soups.",
            nutrition: {
                calories: 116,
                protein: "8.3g",
                carbs: "20.5g",
                fat: "0.4g",
                fiber: "8.3g"
            }
        },
        {
            id: 165,
            name: "Kidney Beans",
            price: 90,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Red kidney beans ideal for chili and salads.",
            nutrition: {
                calories: 127,
                protein: "8.7g",
                carbs: "22.8g",
                fat: "0.5g",
                fiber: "6.4g"
            }
        },
        {
            id: 166,
            name: "Black-eyed Peas",
            price: 80,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Southern-style black-eyed peas with great flavor.",
            nutrition: {
                calories: 160,
                protein: "5.2g",
                carbs: "33.5g",
                fat: "0.6g",
                fiber: "5.2g"
            }
        },
        {
            id: 167,
            name: "Pinto Beans",
            price: 85,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Mexican-style pinto beans for burritos and soups.",
            nutrition: {
                calories: 143,
                protein: "9g",
                carbs: "26.2g",
                fat: "0.6g",
                fiber: "9g"
            }
        },
        {
            id: 168,
            name: "Fava Beans",
            price: 100,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Mediterranean fava beans with rich flavor.",
            nutrition: {
                calories: 187,
                protein: "12.9g",
                carbs: "33.4g",
                fat: "0.7g",
                fiber: "9.2g"
            }
        },
        {
            id: 169,
            name: "Cannellini Beans",
            price: 95,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Italian white kidney beans for soups and salads.",
            nutrition: {
                calories: 139,
                protein: "8.7g",
                carbs: "25g",
                fat: "0.4g",
                fiber: "6.4g"
            }
        },
        {
            id: 170,
            name: "Adzuki Beans",
            price: 110,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Legumes & Pulses",
            description: "Sweet red beans popular in Asian desserts.",
            nutrition: {
                calories: 128,
                protein: "7.5g",
                carbs: "24.8g",
                fat: "0.1g",
                fiber: "7.3g"
            }
        },
        {
            id: 171,
            name: "Tofu",
            price: 100,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Versatile tofu made from soybeans, perfect for vegetarian and vegan dishes.",
            nutrition: {
                calories: 144,
                protein: "15.8g",
                carbs: "3.3g",
                fat: "8.7g",
                fiber: "2.3g"
            }
        },
        {
            id: 172,
            name: "Tempeh",
            price: 110,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Fermented soybean cake with nutty flavor.",
            nutrition: {
                calories: 192,
                protein: "20.3g",
                carbs: "7.7g",
                fat: "10.8g",
                fiber: "9.4g"
            }
        },
        {
            id: 173,
            name: "Seitan",
            price: 120,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Wheat-based meat substitute with chewy texture.",
            nutrition: {
                calories: 370,
                protein: "75g",
                carbs: "14g",
                fat: "2g",
                fiber: "0.6g"
            }
        },
        {
            id: 174,
            name: "Quorn",
            price: 130,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Mycoprotein-based meat alternative.",
            nutrition: {
                calories: 100,
                protein: "14g",
                carbs: "4.5g",
                fat: "2g",
                fiber: "0.5g"
            }
        },
        {
            id: 175,
            name: "Jackfruit",
            price: 140,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Young jackfruit with meat-like texture.",
            nutrition: {
                calories: 95,
                protein: "1.7g",
                carbs: "23.2g",
                fat: "0.6g",
                fiber: "1.5g"
            }
        },
        {
            id: 176,
            name: "Almond Milk",
            price: 110,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Creamy almond milk perfect for smoothies and coffee.",
            nutrition: {
                calories: 39,
                protein: "1.5g",
                carbs: "3.4g",
                fat: "2.5g",
                fiber: "0.5g"
            }
        },
        {
            id: 177,
            name: "Coconut Milk",
            price: 90,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Rich coconut milk for curries and desserts.",
            nutrition: {
                calories: 230,
                protein: "2.3g",
                carbs: "5.5g",
                fat: "23.8g",
                fiber: "2.2g"
            }
        },
        {
            id: 178,
            name: "Soy Milk",
            price: 85,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Protein-rich soy milk fortified with vitamins.",
            nutrition: {
                calories: 80,
                protein: "7g",
                carbs: "4g",
                fat: "4g",
                fiber: "0.5g"
            }
        },
        {
            id: 179,
            name: "Oat Milk",
            price: 95,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Creamy oat milk with natural sweetness.",
            nutrition: {
                calories: 120,
                protein: "3g",
                carbs: "16g",
                fat: "5g",
                fiber: "2g"
            }
        },
        {
            id: 180,
            name: "Cashew Milk",
            price: 120,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Smooth cashew milk with rich flavor.",
            nutrition: {
                calories: 25,
                protein: "1g",
                carbs: "1g",
                fat: "2g",
                fiber: "0g"
            }
        },
        {
            id: 181,
            name: "Sugar",
            price: 120,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Pure cane sugar for baking and sweetening.",
            nutrition: {
                calories: 387,
                protein: "0g",
                carbs: "100g",
                fat: "0g",
                fiber: "0g"
            }
        },
        {
            id: 182,
            name: "Honey",
            price: 120,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "Natural honey with antibacterial properties.",
            nutrition: {
                calories: 304,
                protein: "0.3g",
                carbs: "82.4g",
                fat: "0g",
                fiber: "0.2g"
            }
        },
        {
            id: 183,
            name: "Flour",
            price: 120,
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
            category: "Others",
            description: "All-purpose flour for baking and cooking.",
            nutrition: {
                calories: 364,
                protein: "10.3g",
                carbs: "76.3g",
                fat: "1g",
                fiber: "2.7g"
            }
        }
        ];

    const handleAddToCart = (product) => {
        if (!product) return; // Safety check for undefined product
       
        setCart((prevCart) => {
            const currentQuantity = prevCart[product.id]?.quantity || 0;
            return {
                ...prevCart,
                [product.id]: {
                    product: { ...product }, // Create a new object to prevent reference issues
                    quantity: currentQuantity + 1
                },
            };
        });
    };

    const handleIncreaseQuantity = (productId) => {
        setCart((prevCart) => {
            const item = prevCart[productId];
            if (!item || !item.product) return prevCart; // Safety check
           
            const currentQuantity = item.quantity || 0;
            return {
                ...prevCart,
                [productId]: {
                    ...item,
                    quantity: currentQuantity + 1,
                },
            };
        });
    };

    const handleDecreaseQuantity = (productId) => {
        setCart((prevCart) => {
            const item = prevCart[productId];
            if (!item || !item.product) return prevCart; // Safety check
           
            const currentQuantity = item.quantity || 0;
            if (currentQuantity > 1) {
                return {
                    ...prevCart,
                    [productId]: {
                        ...item,
                        quantity: currentQuantity - 1,
                    },
                };
            } else {
                const newCart = { ...prevCart };
                delete newCart[productId];
                return newCart;
            }
        });
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update search term as the user types
    };

    // Filter products based on search term and selected category
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory
            ? product.category === selectedCategory
            : true;
        return matchesSearch && matchesCategory;
    });

    const handleRemoveItem = (productId) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[productId];
            return newCart;
        });
    };

    return isCartPage ? (
        <CartPage
            cart={cart}
            onBack={() => setIsCartPage(false)}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onRemoveItem={handleRemoveItem}
        />
    ) : (
        <div className="app-background">
            <header className="header">
                <div className="company-name">FreshMart</div>

                {/* Search Box */}
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                {/* Login Button */}
                <button className="login-button">Login</button>

                {/* Cart Button */}
                <button
                    className="cart-button"
                    onClick={() => setIsCartPage(true)}
                >
                    Cart ({Object.keys(cart).length})
                </button>
            </header>

            {selectedCategory === null && !searchTerm ? (
                <div className="category-container">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="category-tile"
                            onClick={() => setSelectedCategory(category.name)}
                        >
                            <img src={category.image} alt={category.name} />
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <button
                        onClick={() => {
                            setSelectedCategory(null);
                            setSearchTerm(""); // Reset search term when going back
                        }}
                        className="back-button"
                    >
                        Back to Categories
                    </button>
                    <h2>{selectedCategory || "Search Results"}</h2>
                    <div className="product-container">
                        {filteredProducts.length === 0 ? (
                            <p>No products found.</p>
                        ) : (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="card">
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>Price: ₹{product.price}/kg</p>
                                    {product.description && (
                                        <p className="description">{product.description}</p>
                                    )}
                                    {product.nutrition && (
                                        <div className="nutrition-info">
                                            <h4>Nutrition Facts (per 100g)</h4>
                                            <div className="nutrition-grid">
                                                <div className="nutrition-item">
                                                    <span>Calories</span>
                                                    <span>{product.nutrition.calories}</span>
                                                </div>
                                                <div className="nutrition-item">
                                                    <span>Protein</span>
                                                    <span>{product.nutrition.protein}</span>
                                                </div>
                                                <div className="nutrition-item">
                                                    <span>Carbs</span>
                                                    <span>{product.nutrition.carbs}</span>
                                                </div>
                                                <div className="nutrition-item">
                                                    <span>Fat</span>
                                                    <span>{product.nutrition.fat}</span>
                                                </div>
                                                <div className="nutrition-item">
                                                    <span>Fiber</span>
                                                    <span>{product.nutrition.fiber}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() =>
                                                handleDecreaseQuantity(product.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{cart[product.id]?.quantity || 0}</span>
                                        <button
                                            onClick={() =>
                                                handleIncreaseQuantity(product.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;

