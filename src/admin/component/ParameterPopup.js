import React from "react";
import Modal from "react-modal";
import { useState } from "react";

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

const ParameterPopup = () => {
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

  const [parameterName, setParameterName] = useState("");

  const handleSubmit = async () => {
    const myToken = localStorage.getItem("vendor");
    if (!myToken) {
      console.error("No vendor token found in localStorage");
      return;
    }
    const userData = JSON.parse(myToken);
    console.log(userData.data.vendorid);

    const data = {
      parameter_name: parameterName,
      vendor_id: userData.data.vendorid,
    };

    console.log(data, "FormData content");

    const updateOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "http://65.2.153.162:5000/product/save/measurment/parameter",
        updateOptions
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }

      const result = await response.json();
      console.log(result, "_______");

      // Show success message and close modal after 2 seconds
      setSuccessMessage("Parameter added successfully!");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <button onClick={openModal} className="add-brand-btn">
          Add Parameter
        </button>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Add Parameter Modal"
        >
          <div className="modal-close">
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="popup-head"
              style={{ color: "#C22D57" }}
            >
              Add Parameter
            </h2>
            <button onClick={closeModal} className="close-popup">
              <i className="fa fa-close"></i>
            </button>
          </div>

          <div>
            <div>
              <label>Parameter Name:</label>
              <input
                type="text"
                value={parameterName}
                onChange={(e) => setParameterName(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick={handleSubmit} className="popup-btn">
              Add Parameter
            </button>
            {successMessage && <p>{successMessage}</p>}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ParameterPopup;
