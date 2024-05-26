import React from "react";
import "../dashboard.css";
import Select from "react-select";
import { useState } from "react";

const Addnewproduct = () => {
  const [vendorName, setVendorName] = useState("");
  const [productName, setProductName] = useState("");
  const [permalink, setPermalink] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const handleVendorChange = (e) => {
    setVendorName(e.target.value);
  };

  const handleProductChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePermalinkChange = (e) => {
    setPermalink(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleShortDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Vendor Name:", vendorName);
    console.log("Product Name:", productName);
    console.log("Permalink:", permalink);
    console.log("Product Description:", productDescription);
    console.log("Short Description:", shortDescription);
  };

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <>
      <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl comp-bg">
        <section>
          <div className="container">
            <div className="row px-5 py-2">
              <div className="col-lg-9">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="vendor">Select Vendor Name:</label>
                    <select
                      id="vendor"
                      className="prod-input"
                      value={vendorName}
                      onChange={handleVendorChange}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="Vendor1">Vendor1</option>
                      <option value="Vendor2">Vendor2</option>
                      <option value="Vendor3">Vendor3</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="product">Product Name:</label>
                    <input
                      type="text"
                      id="product"
                      className="prod-input"
                      value={productName}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="permalink">Permalink:</label>
                    <input
                      type="text"
                      id="permalink"
                      className="prod-input"
                      value={permalink}
                      onChange={handlePermalinkChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="productDescription">
                      Product Description:
                    </label>
                    <textarea
                      id="productDescription"
                      className="prod-input"
                      value={productDescription}
                      onChange={handleProductDescriptionChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="shortDescription">Short Description:</label>
                    <textarea
                      id="shortDescription"
                      className="prod-input"
                      value={shortDescription}
                      onChange={handleShortDescriptionChange}
                    />
                  </div>
                  <h4>Product measurment and price detail</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div>
                        <label>Product Measurment Parameter</label>
                        <input
                          type="text"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          placeholder="Add a new category"
                        />
                        <button
                          onClick={handleAddCategory}
                          className="add-pbtn"
                        >
                          Add Category
                        </button>
                      </div>

                      <div className="my-3">
                        <Select
                          options={categories.map((cat) => ({
                            label: cat,
                            value: cat,
                          }))}
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                          isClearable
                          placeholder="Select or search a category"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Addnewproduct;
