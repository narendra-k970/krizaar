import React, { useState, useEffect } from "react";

const Categories = ({ selectedItems, setSelectedItems }) => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState([]);

  useEffect(() => {
    fetch("http://65.2.153.162:5000/product/category-subcategory")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setCategories(data.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (categoryId) => {
    setExpandedCategories((prevExpandedCategories) =>
      prevExpandedCategories.includes(categoryId)
        ? prevExpandedCategories.filter((id) => id !== categoryId)
        : [...prevExpandedCategories, categoryId]
    );
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  const filterCategories = (categories, searchTerm) => {
    return categories
      .map((category) => {
        if (
          category.category_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          return category;
        }

        const filteredChildren = filterCategories(
          category.children,
          searchTerm
        );
        if (filteredChildren.length > 0) {
          return { ...category, children: filteredChildren };
        }

        return null;
      })
      .filter((category) => category !== null);
  };

  const filteredCategories = filterCategories(categories, searchTerm);

  const renderCategories = (categories) => {
    return categories.map((category) => (
      <div key={category._id}>
        <div
          className="category-name"
          onClick={() => handleCategoryClick(category._id)}
        >
          <input
            type="checkbox"
            checked={selectedItems.includes(category._id)}
            onChange={() => handleCheckboxChange(category._id)}
          />
          {category.category_name}
        </div>
        {expandedCategories.includes(category._id) &&
          category.children.length > 0 && (
            <div className="subcategory-list">
              {renderCategories(category.children)}
            </div>
          )}
      </div>
    ));
  };

  return (
    <>
      <div className="">
        <div className="category-container">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-box"
          />
          <div className="category-list">
            {renderCategories(filteredCategories)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
