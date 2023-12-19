
import React, { useState } from "react";

function CategoryFilter(props) {
  const { categories, onCategorySelect } = props;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;