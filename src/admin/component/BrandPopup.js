import React from "react";
import Modal from "react-modal";
import { REACT_BASE_PATH } from "../../api";
import { useState } from "react";
// import axios from "axios";

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
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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

  const [brandName, setBrandName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    const myToken = localStorage.getItem("vendor");
    if (!myToken) {
      console.error("No vendor token found in localStorage");
      return;
    }
    const userData = JSON.parse(myToken);
    console.log(userData.data.vendorid);
    const formData = new FormData();
    if (image) {
      formData.append("file", image);
    }
    formData.append("brand_name", brandName);
    formData.append("vendor_id", userData.data.vendorid);

    console.log([...formData], "FormData content");

    const updateOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch(
        `${REACT_BASE_PATH}/product/addbrand`,
        updateOptions
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }

      const result = await response.json();
      console.log(result, "_______");

      // Show success message and close modal
      setSuccessMessage("Brand added successfully!");
      setTimeout(() => {
        closeModal();
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <button onClick={openModal} className="add-brand-btn">
          Add Brand
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
              className="popup-head"
              style={{ color: "#C22D57" }}
            >
              Add Brand
            </h2>
            <button onClick={closeModal} className="close-popup">
              <i className="fa fa-close"></i>
            </button>
          </div>

          <div>
            <div>
              <label>Brand Name:</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" onClick={handleSubmit} className="popup-btn">
              Add Brand
            </button>
            {successMessage && <p>{successMessage}</p>}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Popup;
