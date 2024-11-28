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
    { id: 1, category: "Salads", name: "Caesar1 Salad", price: 150, origin: "Italy", items: "Lettuce, Dressing, Cheese", description: "Salads are versatile dishes made with fresh vegetables, fruits, proteins, and dressings. They range from light and healthy options to hearty meals, offering a blend of flavors and textures. Popular varieties like Caesar, Greek, and Garden salads feature unique ingredients and dressings, making them a refreshing and nutritious choice for any meal.",image: "/images/salad1.jpg" },
    { id: 2, category: "Salads", name: "Caesar2 Salad", price: 100, origin: "Italy", items: "Lettuce, Dressing, Cheese", description: "Salads are versatile dishes made with fresh vegetables, fruits, proteins, and dressings. They range from light and healthy options to hearty meals, offering a blend of flavors and textures. Popular varieties like Caesar, Greek, and Garden salads feature unique ingredients and dressings, making them a refreshing and nutritious choice for any meal.",image: "/images/salad2.jpg" },
    { id: 3, category: "Salads", name: "Caesar3 Salad", price: 190, origin: "Italy", items: "Lettuce, Dressing, Cheese", description: "Salads are versatile dishes made with fresh vegetables, fruits, proteins, and dressings. They range from light and healthy options to hearty meals, offering a blend of flavors and textures. Popular varieties like Caesar, Greek, and Garden salads feature unique ingredients and dressings, making them a refreshing and nutritious choice for any meal.",image: "/images/salad3.jpg" },
    { id: 4, category: "Salads", name: "Caesar4 Salad", price: 210, origin: "Italy", items: "Lettuce, Dressing, Cheese", description: "Salads are versatile dishes made with fresh vegetables, fruits, proteins, and dressings. They range from light and healthy options to hearty meals, offering a blend of flavors and textures. Popular varieties like Caesar, Greek, and Garden salads feature unique ingredients and dressings, making them a refreshing and nutritious choice for any meal.",image: "/images/salad4.jpg" },
    { id: 5, category: "Rolls", name: "Veg Roll1",origin:"China",items: "Tortillas, rice paper,Vegetables, meats, chicken, Sauces, herbs, spices, or condiments.", description:"Rolls are compact, flavorful dishes where fillings are encased in a wrap or pastry. They can be baked, fried, or served fresh. Perfect as snacks, appetizers, or meals, rolls are celebrated for their convenience, variety, and delightful combination of textures and flavors.",price: 120,image: "/images/rolls1.jpg" },
    { id: 6, category: "Rolls", name: "Veg Roll2", price: 120, origin:"China",items: "Tortillas, rice paper,Vegetables, meats, chicken, Sauces, herbs, spices, or condiments.", description:"Rolls are compact, flavorful dishes where fillings are encased in a wrap or pastry. They can be baked, fried, or served fresh. Perfect as snacks, appetizers, or meals, rolls are celebrated for their convenience, variety, and delightful combination of textures and flavors.",image: "/images/rolls2.jpg" },
    { id: 7, category: "Rolls", name: "Veg Roll3", price: 120,origin:"China",items: "Tortillas, rice paper,Vegetables, meats, chicken, Sauces, herbs, spices, or condiments.", description:"Rolls are compact, flavorful dishes where fillings are encased in a wrap or pastry. They can be baked, fried, or served fresh. Perfect as snacks, appetizers, or meals, rolls are celebrated for their convenience, variety, and delightful combination of textures and flavors.", image: "/images/rolls3.jpg" },
    { id: 8, category: "Rolls", name: "Veg Roll4", price: 120, origin:"China",items: "Tortillas, rice paper,Vegetables, meats, chicken, Sauces, herbs, spices, or condiments.", description:"Rolls are compact, flavorful dishes where fillings are encased in a wrap or pastry. They can be baked, fried, or served fresh. Perfect as snacks, appetizers, or meals, rolls are celebrated for their convenience, variety, and delightful combination of textures and flavors.",image: "/images/rolls4.jpg" },
    { id: 9, category: "Deserts", name: "Chocolate Cake", origin:"Rome", items:"Flour, sugar, eggs, butter,Baking powder or baking soda,Cream, icing, chocolate ganache, or fruit preserves", description:"Cake is a versatile and indulgent dessert enjoyed on special occasions and everyday moments. Its soft, moist texture and rich flavors make it a universally loved treat, with countless variations ranging from light sponge cakes to dense chocolate creations.",price: 200, image: "/images/dessert1.jpg" },
    { id: 10, category: "Deserts", name: "Chocolate Cake", price: 200, origin:"Rome", items:"Flour, sugar, eggs, butter,Baking powder or baking soda,Cream, icing, chocolate ganache, or fruit preserves", description:"Cake is a versatile and indulgent dessert enjoyed on special occasions and everyday moments. Its soft, moist texture and rich flavors make it a universally loved treat, with countless variations ranging from light sponge cakes to dense chocolate creations.",image: "/images/dessert2.jpg" },
    { id: 11, category: "Deserts", name: "Chocolate Cake", price: 200, origin:"Rome", items:"Flour, sugar, eggs, butter,Baking powder or baking soda,Cream, icing, chocolate ganache, or fruit preserves", description:"Cake is a versatile and indulgent dessert enjoyed on special occasions and everyday moments. Its soft, moist texture and rich flavors make it a universally loved treat, with countless variations ranging from light sponge cakes to dense chocolate creations.",image: "/images/dessert3.jpg" },
    { id: 12, category: "Deserts", name: "Chocolate Cake", price: 200, origin:"Rome", items:"Flour, sugar, eggs, butter,Baking powder or baking soda,Cream, icing, chocolate ganache, or fruit preserves", description:"Cake is a versatile and indulgent dessert enjoyed on special occasions and everyday moments. Its soft, moist texture and rich flavors make it a universally loved treat, with countless variations ranging from light sponge cakes to dense chocolate creations.",image: "/images/dessert4.jpg" },
    { id: 13, category: "Pasta", name: "White Sauce Pasta", price: 180, origin:"Italy/China", items:"Wheat flour (often semolina) and water,Eggs (for egg pasta), olive oil, or spinach for flavor and color,Tomato-based, cream-based, or olive oil-based sauces, with herbs, garlic, and cheese.", description:"Pasta is a versatile and beloved dish characterized by its various shapes and textures. Paired with sauces and ingredients like vegetables, meat, or seafood, pasta offers endless culinary possibilities. Its comforting and hearty nature makes it a favorite in households and restaurants globally.",image: "/images/pasta1.jpg" },
    { id: 14, category: "Pasta", name: "White Sauce Pasta", price: 180, origin:"Italy/China", items:"Wheat flour (often semolina) and water,Eggs (for egg pasta), olive oil, or spinach for flavor and color,Tomato-based, cream-based, or olive oil-based sauces, with herbs, garlic, and cheese.", description:"Pasta is a versatile and beloved dish characterized by its various shapes and textures. Paired with sauces and ingredients like vegetables, meat, or seafood, pasta offers endless culinary possibilities. Its comforting and hearty nature makes it a favorite in households and restaurants globally.",image: "/images/pasta2.jpg" },
    { id: 15, category: "Pasta", name: "White Sauce Pasta", price: 180, origin:"Italy/China", items:"Wheat flour (often semolina) and water,Eggs (for egg pasta), olive oil, or spinach for flavor and color,Tomato-based, cream-based, or olive oil-based sauces, with herbs, garlic, and cheese.", description:"Pasta is a versatile and beloved dish characterized by its various shapes and textures. Paired with sauces and ingredients like vegetables, meat, or seafood, pasta offers endless culinary possibilities. Its comforting and hearty nature makes it a favorite in households and restaurants globally.",image: "/images/pasta3.jpg" },
    { id: 16, category: "Pasta", name: "White Sauce Pasta", price: 180, origin:"Italy/China", items:"Wheat flour (often semolina) and water,Eggs (for egg pasta), olive oil, or spinach for flavor and color,Tomato-based, cream-based, or olive oil-based sauces, with herbs, garlic, and cheese.", description:"Pasta is a versatile and beloved dish characterized by its various shapes and textures. Paired with sauces and ingredients like vegetables, meat, or seafood, pasta offers endless culinary possibilities. Its comforting and hearty nature makes it a favorite in households and restaurants globally.",image: "/images/pasta4.jpg" },
    { id: 17, category: "Pizza", name: "Cheese Pizza", price: 250, origin:"Italy", items:"Pizza dough (flour, water, yeast, salt, olive oil).Tomato sauce, often seasoned with garlic, olive oil, and herbs.", description:"Pizza is a globally loved dish with a crispy crust and an array of toppings. From the classic Margherita to inventive gourmet varieties, pizza is both simple and complex. Its perfect combination of dough, sauce, cheese, and toppings creates an irresistible flavor profile enjoyed by all ages.",image: "/images/pizza1.jpg" },
    { id: 18, category: "Pizza", name: "Cheese Pizza", price: 250, origin:"Italy", items:"Pizza dough (flour, water, yeast, salt, olive oil).Tomato sauce, often seasoned with garlic, olive oil, and herbs.", description:"Pizza is a globally loved dish with a crispy crust and an array of toppings. From the classic Margherita to inventive gourmet varieties, pizza is both simple and complex. Its perfect combination of dough, sauce, cheese, and toppings creates an irresistible flavor profile enjoyed by all ages.",image: "/images/pizza2.jpg" },
    { id: 19, category: "Pizza", name: "Cheese Pizza", price: 250, origin:"Italy", items:"Pizza dough (flour, water, yeast, salt, olive oil).Tomato sauce, often seasoned with garlic, olive oil, and herbs.", description:"Pizza is a globally loved dish with a crispy crust and an array of toppings. From the classic Margherita to inventive gourmet varieties, pizza is both simple and complex. Its perfect combination of dough, sauce, cheese, and toppings creates an irresistible flavor profile enjoyed by all ages.",image: "/images/pizza3.jpg" },
    { id: 20, category: "Pizza", name: "Cheese Pizza", price: 250, origin:"Italy", items:"Pizza dough (flour, water, yeast, salt, olive oil).Tomato sauce, often seasoned with garlic, olive oil, and herbs.", description:"Pizza is a globally loved dish with a crispy crust and an array of toppings. From the classic Margherita to inventive gourmet varieties, pizza is both simple and complex. Its perfect combination of dough, sauce, cheese, and toppings creates an irresistible flavor profile enjoyed by all ages.",image: "/images/pizza4.jpg" },
    { id: 21, category: "Burgers", name: "Chicken Burger", price: 150, origin:"Germany", items:"Soft hamburger buns, often sesame-topped.Ground beef, sometimes mixed with seasonings or other ingredients like onions or breadcrumbs.Lettuce, tomato, pickles, cheese (e.g., cheddar, American), onions, bacon.", description:"The burger is an iconic fast food item, offering a savory combination of a juicy beef patty, fresh toppings, and flavorful condiments all enclosed in a soft bun. Whether enjoyed at a barbecue or a fast food joint, the burger is customizable and beloved for its hearty, satisfying taste.",image: "/images/burger1.jpg" },
    { id: 22, category: "Burgers", name: "Chicken Burger", price: 150, origin:"Germany", items:"Soft hamburger buns, often sesame-topped.Ground beef, sometimes mixed with seasonings or other ingredients like onions or breadcrumbs.Lettuce, tomato, pickles, cheese (e.g., cheddar, American), onions, bacon.", description:"The burger is an iconic fast food item, offering a savory combination of a juicy beef patty, fresh toppings, and flavorful condiments all enclosed in a soft bun. Whether enjoyed at a barbecue or a fast food joint, the burger is customizable and beloved for its hearty, satisfying taste.",image: "/images/burger2.jpg" },
    { id: 23, category: "Burgers", name: "Chicken Burger", price: 150, origin:"Germany", items:"Soft hamburger buns, often sesame-topped.Ground beef, sometimes mixed with seasonings or other ingredients like onions or breadcrumbs.Lettuce, tomato, pickles, cheese (e.g., cheddar, American), onions, bacon.", description:"The burger is an iconic fast food item, offering a savory combination of a juicy beef patty, fresh toppings, and flavorful condiments all enclosed in a soft bun. Whether enjoyed at a barbecue or a fast food joint, the burger is customizable and beloved for its hearty, satisfying taste.",image: "/images/burger3.jpg" },
    { id: 24, category: "Burgers", name: "Chicken Burger", price: 150, origin:"Germany", items:"Soft hamburger buns, often sesame-topped.Ground beef, sometimes mixed with seasonings or other ingredients like onions or breadcrumbs.Lettuce, tomato, pickles, cheese (e.g., cheddar, American), onions, bacon.", description:"The burger is an iconic fast food item, offering a savory combination of a juicy beef patty, fresh toppings, and flavorful condiments all enclosed in a soft bun. Whether enjoyed at a barbecue or a fast food joint, the burger is customizable and beloved for its hearty, satisfying taste.",image: "/images/burger4.jpg" },
    { id: 25, category: "Soup", name: "Grilled Sandwich", price: 100, origin:"sandwich", items:" Any type of bread, such as white, whole wheat, rye, or rolls.Meat (chicken, turkey, ham), cheese, vegetables (lettuce, tomato, cucumber), and spreads (mayonnaise, mustard, butter).", description:"A sandwich is a versatile and convenient meal, typically consisting of fillings like meats, cheeses, and vegetables, placed between slices of bread. Whether served cold or toasted, sandwiches can be simple or elaborate, offering endless combinations for a quick lunch or snack.",image: "/images/soup1.jpg" },
    { id: 26, category: "Soup", name: "Grilled Sandwich", price: 100, origin:"sandwich", items:" Any type of bread, such as white, whole wheat, rye, or rolls.Meat (chicken, turkey, ham), cheese, vegetables (lettuce, tomato, cucumber), and spreads (mayonnaise, mustard, butter).", description:"A sandwich is a versatile and convenient meal, typically consisting of fillings like meats, cheeses, and vegetables, placed between slices of bread. Whether served cold or toasted, sandwiches can be simple or elaborate, offering endless combinations for a quick lunch or snack.",image: "/images/soup2.jpg" },
    { id: 27, category: "Soup", name: "Grilled Sandwich", price: 100, origin:"sandwich", items:" Any type of bread, such as white, whole wheat, rye, or rolls.Meat (chicken, turkey, ham), cheese, vegetables (lettuce, tomato, cucumber), and spreads (mayonnaise, mustard, butter).", description:"A sandwich is a versatile and convenient meal, typically consisting of fillings like meats, cheeses, and vegetables, placed between slices of bread. Whether served cold or toasted, sandwiches can be simple or elaborate, offering endless combinations for a quick lunch or snack.",image: "/images/soup3.jpg" },
    { id: 28, category: "Soup", name: "Grilled Sandwich", price: 100, origin:"sandwich", items:" Any type of bread, such as white, whole wheat, rye, or rolls.Meat (chicken, turkey, ham), cheese, vegetables (lettuce, tomato, cucumber), and spreads (mayonnaise, mustard, butter).", description:"A sandwich is a versatile and convenient meal, typically consisting of fillings like meats, cheeses, and vegetables, placed between slices of bread. Whether served cold or toasted, sandwiches can be simple or elaborate, offering endless combinations for a quick lunch or snack.",image: "/images/soup4.jpg" },
    { id: 29, category: "Drinks", name: "Cold Coffee", price: 80, origin:"Ethiopia",items:"Ground from various coffee bean varieties (Arabica, Robusta).Fresh water is essential for brewing.Sugar, syrups, or honey.",description:"Coffee is a beloved beverage made by brewing ground coffee beans with hot water, typically served hot but also enjoyed iced. It offers a rich, robust flavor and is known for its stimulating effects due to caffeine. From espresso to lattes, coffee is a global favorite, loved for its warmth, taste, and energizing qualities.",image: "/images/drink1.jpg" },
    { id: 30, category: "Drinks", name: "Cold Coffee", price: 80, origin:"Ethiopia",items:"Ground from various coffee bean varieties (Arabica, Robusta).Fresh water is essential for brewing.Sugar, syrups, or honey.",description:"Coffee is a beloved beverage made by brewing ground coffee beans with hot water, typically served hot but also enjoyed iced. It offers a rich, robust flavor and is known for its stimulating effects due to caffeine. From espresso to lattes, coffee is a global favorite, loved for its warmth, taste, and energizing qualities.",image: "/images/drink2.jpg" },
    { id: 31, category: "Drinks", name: "Cold Coffee", price: 80, origin:"Ethiopia",items:"Ground from various coffee bean varieties (Arabica, Robusta).Fresh water is essential for brewing.Sugar, syrups, or honey.",description:"Coffee is a beloved beverage made by brewing ground coffee beans with hot water, typically served hot but also enjoyed iced. It offers a rich, robust flavor and is known for its stimulating effects due to caffeine. From espresso to lattes, coffee is a global favorite, loved for its warmth, taste, and energizing qualities.",image: "/images/drink3.jpg" },
    { id: 32, category: "Drinks", name: "Cold Coffee", price: 80, origin:"Ethiopia",items:"Ground from various coffee bean varieties (Arabica, Robusta).Fresh water is essential for brewing.Sugar, syrups, or honey.",description:"Coffee is a beloved beverage made by brewing ground coffee beans with hot water, typically served hot but also enjoyed iced. It offers a rich, robust flavor and is known for its stimulating effects due to caffeine. From espresso to lattes, coffee is a global favorite, loved for its warmth, taste, and energizing qualities.",image: "/images/drink4.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dishCounts, setDishCounts] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState(null);

  const handleDishClick = (dish) => {
    setOverlayData(dish);
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
    setOverlayData(null);
  };

  const handleAddButton = (id) => {
    setDishCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleIncrement = (id) => {
    setDishCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setDishCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

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
          <div
            key={dish.id}
            className="dish-item"
            onClick={() => handleDishClick(dish)}
          >
            <div className="dish-box">
              <img src={dish.image} alt={dish.name} className="dish-img" />
              {!dishCounts[dish.id] ? (
                <button
                  className="dish-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddButton(dish.id);
                  }}
                >
                  +
                </button>
              ) : (
                <div
                  className="dish-counter"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="counter-btn"
                    onClick={() => handleDecrement(dish.id)}
                  >
                    -
                  </button>
                  <span className="dish-count">{dishCounts[dish.id]}</span>
                  <button
                    className="counter-btn"
                    onClick={() => handleIncrement(dish.id)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
            <p className="dish-name">{dish.name}</p>
            <p className="dish-price">₹{dish.price}</p>
          </div>
        ))}
      </div>

      {/* Overlay */}
      {showOverlay && overlayData && (
        <div className="overlay">
          <div className="overlay-content">
            <img src={overlayData.image} alt={overlayData.name} className="overlay-img" />
            <p>
              <span className="highlight">ORIGIN:</span> {overlayData.origin}
            </p>
            <p>
              <span className="highlight">ITEMS USED:</span> {overlayData.items}
            </p>
            <p>
              <span className="highlight">DESCRIPTION:</span> {overlayData.description}
            </p>
            <button className="overlay-close-btn" onClick={handleOverlayClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
