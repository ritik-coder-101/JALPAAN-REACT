import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const categories = [
    { id: 1, name: "Salads", image: "/images/salad.jpg" },
    { id: 2, name: "Rolls", image: "/images/rolls.jpg" },
    { id: 3, name: "Deserts", image: "/images/dessert.jpg" },
    { id: 4, name: "Drinks", image: "/images/drink.jpg" },
    { id: 5, name: "Pasta", image: "/images/pasta.jpg" },
    { id: 6, name: "Pizza", image: "/images/pizza.jpg" },
    { id: 7, name: "Soup", image: "/images/soup.jpg" },
    { id: 8, name: "Burgers", image: "/images/burger.jpg" },
  ];

  const allDishes = [
    { id: 1, category: "Salads", name: "Caesar1 Salad", price: 150, image: "/images/salad1.jpg" },
    { id: 2, category: "Salads", name: "Caesar2 Salad", price: 100, image: "/images/salad2.jpg" },
    { id: 3, category: "Salads", name: "Caesar3 Salad", price: 190, image: "/images/salad3.jpg" },
    { id: 4, category: "Salads", name: "Caesar4 Salad", price: 210, image: "/images/salad4.jpg" },
    { id: 5, category: "Rolls", name: "Veg Roll1", price: 120, image: "/images/rolls1.jpg" },
    { id: 6, category: "Rolls", name: "Veg Roll2", price: 120, image: "/images/rolls2.jpg" },
    { id: 7, category: "Rolls", name: "Veg Roll3", price: 120, image: "/images/rolls3.jpg" },
    { id: 8, category: "Rolls", name: "Veg Roll4", price: 120, image: "/images/rolls4.jpg" },
    { id: 9, category: "Deserts", name: "Chocolate Cake", price: 200, image: "/images/dessert1.jpg" },
    { id: 10, category: "Deserts", name: "Chocolate Cake", price: 200, image: "/images/dessert2.jpg" },
    { id: 11, category: "Deserts", name: "Chocolate Cake", price: 200, image: "/images/dessert3.jpg" },
    { id: 12, category: "Deserts", name: "Chocolate Cake", price: 200, image: "/images/dessert4.jpg" },
    { id: 13, category: "Pasta", name: "White Sauce Pasta", price: 180, image: "/images/pasta1.jpg" },
    { id: 14, category: "Pasta", name: "White Sauce Pasta", price: 180, image: "/images/pasta2.jpg" },
    { id: 15, category: "Pasta", name: "White Sauce Pasta", price: 180, image: "/images/pasta3.jpg" },
    { id: 16, category: "Pasta", name: "White Sauce Pasta", price: 180, image: "/images/pasta4.jpg" },
    { id: 17, category: "Pizza", name: "Cheese Pizza", price: 250, image: "/images/pizza1.jpg" },
    { id: 18, category: "Pizza", name: "Cheese Pizza", price: 250, image: "/images/pizza2.jpg" },
    { id: 19, category: "Pizza", name: "Cheese Pizza", price: 250, image: "/images/pizza3.jpg" },
    { id: 20, category: "Pizza", name: "Cheese Pizza", price: 250, image: "/images/pizza4.jpg" },
    { id: 21, category: "Burgers", name: "Chicken Burger", price: 150, image: "/images/burger1.jpg" },
    { id: 22, category: "Burgers", name: "Chicken Burger", price: 150, image: "/images/burger2.jpg" },
    { id: 23, category: "Burgers", name: "Chicken Burger", price: 150, image: "/images/burger3.jpg" },
    { id: 24, category: "Burgers", name: "Chicken Burger", price: 150, image: "/images/burger4.jpg" },
    { id: 25, category: "Soup", name: "Grilled Sandwich", price: 100, image: "/images/soup1.jpg" },
    { id: 26, category: "Soup", name: "Grilled Sandwich", price: 100, image: "/images/soup2.jpg" },
    { id: 27, category: "Soup", name: "Grilled Sandwich", price: 100, image: "/images/soup3.jpg" },
    { id: 28, category: "Soup", name: "Grilled Sandwich", price: 100, image: "/images/soup4.jpg" },
    { id: 29, category: "Drinks", name: "Cold Coffee", price: 80, image: "/images/drink1.jpg" },
    { id: 30, category: "Drinks", name: "Cold Coffee", price: 80, image: "/images/drink2.jpg" },
    { id: 31, category: "Drinks", name: "Cold Coffee", price: 80, image: "/images/drink3.jpg" },
    { id: 32, category: "Drinks", name: "Cold Coffee", price: 80, image: "/images/drink4.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes =
    selectedCategory === "All"
      ? allDishes
      : allDishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div className="menu-container">
      <h1 className="menu-heading">Explore Our Menu</h1>
      <p className="menu-description">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience.
      </p>

      {/* Categories */}
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${
              selectedCategory === category.name ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className={`category-img ${
                selectedCategory === category.name ? "selected-img" : ""
              }`}
            />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Dishes */}
      <h2 className="top-dishes-heading">Top Dishes Near You</h2>
      <div className="dishes-grid">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish-item">
            <div className="dish-box">
              <img src={dish.image} alt={dish.name} className="dish-img" />
              <button className="dish-button">+</button>
            </div>
            <p className="dish-name">{dish.name}</p>
            <p className="dish-price">₹{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
