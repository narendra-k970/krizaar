import React from "react";
import Modal from "react-modal";
import { REACT_BASE_PATH } from "../../api";
import { useState } from "react";
import axios from "axios";

const options = ["Parent"];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "50%",
    height: "auto",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
};

const Popup = () => {
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [category, setCategory] = useState();
  const [catImage, setCatimage] = useState();
  const [successMessage, setSuccessMessage] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCatimage(file);
  };
  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(searchQuery)
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    setSuccessMessage("");
  }

  function afterOpenModal() {
    subtitle.style.color = "#C22D57";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitData = async () => {
    try {
      const formData = new FormData();
      formData.append("category_name", category);
      formData.append("parent_id", 0);
      formData.append("category_image", catImage);

      const response = await axios.post(
        `${REACT_BASE_PATH}/product/add/productcategory`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data, "Category Add Successfully");

      // Show success message and close modal
      setSuccessMessage("Category added successfully!");
      setTimeout(() => {
        closeModal();
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div>
        <button onClick={openModal} className="add-cat-btn">
          Add Category
        </button>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="modal-close">
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              style={{ color: "#C22D57" }}
            >
              Add Category
            </h2>

            <button onClick={closeModal} className="close-popup">
              <i className="fa fa-close"></i>
            </button>
          </div>

          <div>
            <label htmlFor="product">Category Name:</label>
            <input
              type="text"
              id="product"
              className="prod-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="img">Select image:</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleFileChange}
              className="prod-input"
            />
            <div className="dropdown">
              <button onClick={toggleDropdown}>
                {selectedOption || "Select an option"}
              </button>
              {dropdownVisible && (
                <div className="dropdown-content">
                  <input
                    type="text"
                    placeholder="Search.."
                    value={category}
                    onChange={handleSearch}
                    autoFocus
                  />
                  {filteredOptions.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="dropdown-item"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {selectedOption && (
              <p id="selectedOption">You selected: {selectedOption}</p>
            )}
          </div>
          <br />
          <button className="add-cat-btn" onClick={submitData}>
            Submit
          </button>
          {successMessage && <p>{successMessage}</p>}
        </Modal>
      </div>
    </>
  );
};

export default Popup;
