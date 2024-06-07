import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Categories from "../add/Categories";
import BrandDropdown from "../add/BrandDropdown";
import BrandPopup from "./BrandPopup";
import UnitPopup from "./UnitPopup";
import MeasurementParameterDropdown from "../add/ParameterDropdown";
import MeasurementUnitDropdown from "../add/MeasurmentDropdown";
import ParameterPopup from "./ParameterPopup";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "50%",
    maxHeight: "80vh", // Added max-height to control the height of the modal
    overflowY: "auto", // Added overflow to enable scrolling
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
};

const Productpopup = ({ productId, isOpen, onClose }) => {
  const [productName, setProductName] = useState("");
  const [paramalink, setParamalink] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedParameter, setSelectedParameter] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [forms, setForms] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    if (productId) {
      axios
        .post("http://65.2.153.162:5000/product/details", { id: productId })
        .then((response) => {
          const product = response.data;
          setProductName(product.name);
          setParamalink(product.permalink);
          setDescription(product.description);
          setShortDescription(product.shortDescription);
          setSelectedBrand(product.brand);
          setSelectedParameter(product.parameter);
          setSelectedUnit(product.unit);
          setForms(product.forms);
          setSpecifications(product.specifications);
          setSelectedCategories(product.categories);
          setImage(product.image);
          setGallery(product.gallery);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the product details!",
            error
          );
        });
    }
  }, [productId]);

  function handleDescriptionChange(event, editor) {
    const data = editor.getData();
    setDescription(data);
  }

  function handleSpeDescriptionChange(event, editor) {
    const data = editor.getData();
    setSpecifications((prev) =>
      prev.map((spec) =>
        spec.id === editor.id ? { ...spec, description: data } : spec
      )
    );
  }

  function handleGalleryChange(event) {
    setGallery(Array.from(event.target.files));
  }

  function handleSubmit() {
    const formData = new FormData();
    formData.append("id", productId);
    formData.append("name", productName);
    formData.append("permalink", paramalink);
    formData.append("description", description);
    formData.append("shortDescription", shortDescription);
    formData.append("brand", JSON.stringify(selectedBrand));
    formData.append("parameter", JSON.stringify(selectedParameter));
    formData.append("unit", JSON.stringify(selectedUnit));
    formData.append("forms", JSON.stringify(forms));
    formData.append("specifications", JSON.stringify(specifications));
    formData.append("categories", JSON.stringify(selectedCategories));
    formData.append("image", image);

    gallery.forEach((file, index) => {
      formData.append(`gallery[${index}]`, file);
    });

    axios
      .post("http://65.2.153.162:5000/product/productupdate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Product updated successfully:", response.data);
        closeModal();
      })
      .catch((error) => {
        console.error("There was an error updating the product!", error);
      });
  }

  function closeModal() {
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Edit Product Modal"
    >
      <div className="modal-close">
        <h2 className="popup-head" style={{ color: "#C22D57" }}>
          Edit Product
        </h2>
        <button onClick={closeModal} className="close-popup">
          <i className="fa fa-close"></i>
        </button>
      </div>

      <div className="row px-3 py-2">
        <div className="col-lg-9 pro-fm">
          <div>
            <label htmlFor="product">Product Name:</label>
            <input
              type="text"
              id="product"
              value={productName}
              className="prod-input"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="permalink">Permalink:</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                https://krizaar.com/
              </span>
              <input
                type="text"
                className="form-control"
                value={paramalink}
                onChange={(e) => setParamalink(e.target.value)}
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div>
            <div className="product-description">
              <label>Product Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="shortDescription">Short Description:</label>
            <textarea
              id="shortDescription"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="prod-input"
            />
          </div>
          <div className="my-3">
            <div>
              <label className="d-flex">
                <span>Select Brand</span>
                <span className="ms-2">
                  <BrandPopup />
                </span>
              </label>
              <BrandDropdown onBrandChange={setSelectedBrand} />
              {selectedBrand && (
                <div>
                  <h4>Selected Brand: {selectedBrand.label}</h4>
                </div>
              )}
            </div>
          </div>
          <h4>Product Measurement and Price Detail</h4>
          <div className="row measurement-row">
            <div className="col-lg-6">
              <label className="d-flex">
                <span>Select Parameter</span>
                <span className="ms-2">
                  <ParameterPopup />
                </span>
              </label>
              <MeasurementParameterDropdown
                onParameterChange={setSelectedParameter}
              />
              {selectedParameter && (
                <div>
                  <h4>Selected Parameter: {selectedParameter.label}</h4>
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <label className="d-flex">
                <span>Select Unit</span>
                <span className="ms-2">
                  <UnitPopup />
                </span>
              </label>
              <MeasurementUnitDropdown onUnitChange={setSelectedUnit} />
              {selectedUnit && (
                <div>
                  <h4>Selected Unit: {selectedUnit.label}</h4>
                </div>
              )}
            </div>
            <div className="add-form">
              <div className="addsec mt-3">
                <button
                  type="button"
                  onClick={() => {
                    /* Add form logic here */
                  }}
                >
                  +
                </button>
              </div>
              <div className="form-container1">
                {forms.map((form) => (
                  <div key={form.id}>
                    <div className="form-row1">
                      <div className="form-group1">
                        <label htmlFor={`productMeasurement-${form.id}`}>
                          Product Measurement:
                        </label>
                        <input
                          type="text"
                          value={form.prodmeasurment}
                          onChange={(e) =>
                            setForms((prev) =>
                              prev.map((f) =>
                                f.id === form.id
                                  ? { ...f, prodmeasurment: e.target.value }
                                  : f
                              )
                            )
                          }
                        />
                      </div>
                      <div className="form-group1">
                        <label htmlFor={`price-${form.id}`}>Price (MRP):</label>
                        <input
                          type="number"
                          value={form.price}
                          onChange={(e) =>
                            setForms((prev) =>
                              prev.map((f) =>
                                f.id === form.id
                                  ? { ...f, price: e.target.value }
                                  : f
                              )
                            )
                          }
                        />
                      </div>
                      <div className="form-group1">
                        <label htmlFor={`currency-${form.id}`}>Currency:</label>
                        <select
                          value={form.currency}
                          onChange={(e) =>
                            setForms((prev) =>
                              prev.map((f) =>
                                f.id === form.id
                                  ? { ...f, currency: e.target.value }
                                  : f
                              )
                            )
                          }
                        >
                          <option value="inr">INR</option>
                          <option value="usd">US Dollar</option>
                        </select>
                      </div>
                      <div className="form-group1">
                        <label htmlFor={`stockQuantity-${form.id}`}>
                          Product Stock Quantity:
                        </label>
                        <input
                          type="number"
                          value={form.stockQuantity}
                          onChange={(e) =>
                            setForms((prev) =>
                              prev.map((f) =>
                                f.id === form.id
                                  ? { ...f, stockQuantity: e.target.value }
                                  : f
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="form-row1">
                      <div className="form-group1">
                        <label htmlFor={`selectColor-${form.id}`}>
                          Select color (optional):
                        </label>
                        <select
                          value={form.selectedColor}
                          onChange={(e) =>
                            setForms((prev) =>
                              prev.map((f) =>
                                f.id === form.id
                                  ? { ...f, selectedColor: e.target.value }
                                  : f
                              )
                            )
                          }
                        >
                          <option value="">Please Select a color</option>
                          <option value="red">Red</option>
                          <option value="blue">Blue</option>
                          <option value="green">Green</option>
                        </select>
                      </div>
                      <div className="form-group1">
                        <label htmlFor={`stockColorWise-${form.id}`}>
                          Product Stock Color wise (optional):
                        </label>
                        <input
                          type="number"
                          value={form.prodStockColorwise}
                          onChange={(e) =>
                            setForms((prev) =>
                              prev.map((f) =>
                                f.id === form.id
                                  ? { ...f, prodStockColorwise: e.target.value }
                                  : f
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="specifications">
            <div className="addsec mt-3">
              <button
                type="button"
                onClick={() => {
                  /* Add specification logic here */
                }}
              >
                +
              </button>
            </div>
            <h4>Specifications</h4>
            <div className="form-container1">
              {specifications.map((spec) => (
                <div key={spec.id}>
                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor={`specName-${spec.id}`}>
                          Specification Heading:
                        </label>
                        <input
                          type="text"
                          className="speci-name"
                          value={spec.heading}
                          onChange={(e) =>
                            setSpecifications((prev) =>
                              prev.map((s) =>
                                s.id === spec.id
                                  ? { ...s, heading: e.target.value }
                                  : s
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor={`specValue-${spec.id}`}>
                          Specification Name:
                        </label>
                        <input
                          type="text"
                          className="speci-name"
                          value={spec.name}
                          onChange={(e) =>
                            setSpecifications((prev) =>
                              prev.map((s) =>
                                s.id === spec.id
                                  ? { ...s, name: e.target.value }
                                  : s
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="product-description">
                      <label>Product Description</label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={spec.description}
                        onChange={handleSpeDescriptionChange}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <Categories
            selectedItems={selectedCategories}
            setSelectedItems={setSelectedCategories}
          />
          <div className="mt-5">
            <div className="prod-gallery">Product Image</div>
            <label htmlFor="fileUploadImage">Product Image:</label>
            <input
              type="file"
              name="fileToUploadImage"
              id="fileUploadImage"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="mt-5">
            <div className="prod-gallery">Product Gallery</div>
            <label htmlFor="fileUploadGallery">Product Gallery:</label>
            <input
              type="file"
              name="fileToUploadGallery"
              id="fileUploadGallery"
              onChange={handleGalleryChange}
              multiple
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="button" className="upload-btn" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
};

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState(null);

  const openModal = (id) => {
    setProductId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductId(null);
  };

  return (
    <div>
      <button onClick={() => openModal(1)} className="edit-btn">
        <i className="fa fa-edit"></i>
      </button>
      <Productpopup
        productId={productId}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ParentComponent;
