import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const selectCategory = (e) => {
    console.log(e.target.value)
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return (
          <button 
            key={category} 
            onClick={selectCategory} 
            className={selectedCategory === category ? "selected" : null}
            value={category}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
