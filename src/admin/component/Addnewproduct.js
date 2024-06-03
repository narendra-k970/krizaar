import React, { useState } from "react";
import "../dashboard.css";
import Categories from "../add/Categories";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import BrandDropdown from "../add/BrandDropdown";
import MeasurementParameterDropdown from "../add/ParameterDropdown";
import MeasurementUnitDropdown from "../add/MeasurmentDropdown";
import axios from "axios";

const Addnewproduct = () => {
  const [productName, setProductName] = useState("");
  const [paramalink, setParamalink] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedParameter, setSelectedParameter] = useState(null);

  const [selectedUnit, setSelectedUnit] = useState(null);
  const [speHeading, setSpeHeading] = useState("");
  const [speName, setSpeName] = useState("");
  const [speDescription, setSpeDescription] = useState("");
  const [price, setPrice] = useState("");
  console.log(selectedParameter);

  const [selectedValue, setSelectedValue] = useState("inr");
  const [prodStockColorwise, setProdStockColorwise] = useState();
  const [stockQuantity, setStockQuantity] = useState("");
  // const [prodDescription, setProdDescription] = useState("");
  const [prodmeasurment, setProdMeasurment] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  console.log(stockQuantity);
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [forms, setForms] = useState([{ id: 1 }]);
  const [specifications, setSpecifications] = useState([{ id: 1 }]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  console.log(prodStockColorwise);

  const addForm = () => {
    setForms([...forms, { id: forms.length + 1 }]);
  };

  const addSpecification = () => {
    setSpecifications([...specifications, { id: specifications.length + 1 }]);
  };
  // const handleSpecificationChange = (index, field, value) => {
  //   const updatedSpecifications = [...specifications];
  //   updatedSpecifications[index][field] = value;
  //   setSpecifications(updatedSpecifications);
  // };

  const handleSpeDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setSpeDescription(data);
  };
  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleParameterChange = (parameter) => {
    setSelectedParameter(parameter);
  };

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  const handleChangeColor = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleGalleryChange = (e) => {
    setGallery(Array.from(e.target.files));
  };
  const handleSubmit = async () => {
    console.log(
      `${prodmeasurment},${price},${stockQuantity},${prodStockColorwise},${selectedColor},${selectedValue}`
    );

    const formData = new FormData();

    formData.append("category_id", selectedCategories[0]);
    formData.append("product_name", productName);
    formData.append("brand_id", selectedBrand?.value);
    formData.append("vendor_id", "664f76ced2a28de7d549a396");
    formData.append("product_total_stock", 900);
    formData.append("product_detail", description);
    formData.append("product_short_disc", shortDescription);
    formData.append("product_squ_id", "SMA-556-d4b-20240601083544");
    formData.append("product_warranty_detail", "qwqwqssasassdssqwqwq");
    formData.append("product_permalink", paramalink);
    formData.append(
      "product_measurment_parameter_id",
      selectedParameter?.value
    );
    formData.append("product_measurment_unit_id", selectedUnit?.value);
    formData.append(
      "product_measurment_price_detail[0][quantity]",
      stockQuantity
    );
    formData.append("product_measurment_price_detail[0][price]", price);
    formData.append(
      "product_measurment_price_detail[0][currency_type]",
      selectedValue
    );
    formData.append(
      "product_measurment_price_detail[0][stock]",
      prodmeasurment
    );
    formData.append(
      "product_measurment_price_detail[0][stock_color_wise][0][color]",
      selectedColor
    );
    formData.append(
      "product_measurment_price_detail[0][stock_color_wise][0][stock]",
      prodStockColorwise
    );

    formData.append(
      "product_measurment_price_detail_currency_type",
      selectedValue
    );
    formData.append(
      "product_specfication_detail[0][specfication_heading]",
      speHeading
    );
    formData.append(
      "product_specfication_detail[0][specification_name]",
      speName
    );
    formData.append(
      "product_specfication_detail[0][specification_detail]",
      speDescription
    );
    formData.append("product_banner_image", image); // Assuming `image` is a File object
    for (let i = 0; i < gallery.length; i++) {
      formData.append("product_gallery_image[]", gallery[i]);
    }
    console.log(formData, "-----------------");

    try {
      const response = await axios.post(
        "http://65.2.153.162:5000/product/add/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data, "Gya data-------------------------");
      setProdMeasurment("");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl comp-bg mb-5">
      <section>
        <div className="container">
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
                  <label>
                    Select Brand
                    <span className="addnewb">(Add New Brand)</span>
                  </label>
                  <BrandDropdown onBrandChange={handleBrandChange} />
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
                  <label>
                    Select Parameter
                    <span className="addnewb">(Add New Parameter)</span>
                  </label>
                  <MeasurementParameterDropdown
                    onParameterChange={handleParameterChange}
                  />
                  {selectedParameter && (
                    <div>
                      <h4>Selected Parameter: {selectedParameter.label}</h4>
                    </div>
                  )}
                </div>
                <div className="col-lg-6">
                  <label>
                    Select Unit
                    <span className="addnewb">(Add New Unit)</span>
                  </label>
                  <MeasurementUnitDropdown onUnitChange={handleUnitChange} />
                  {selectedUnit && (
                    <div>
                      <h4>Selected Unit: {selectedUnit.label}</h4>
                    </div>
                  )}
                </div>
                <div className="add-form">
                  <div className="addsec mt-3">
                    <button type="button" onClick={addForm}>
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
                              value={prodmeasurment}
                              onChange={(e) =>
                                setProdMeasurment(e.target.value)
                              }
                            />
                          </div>
                          <div className="form-group1">
                            <label htmlFor={`price-${form.id}`}>
                              Price (MRP):
                            </label>
                            <input
                              type="number"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                          <div className="form-group1">
                            <label htmlFor={`currency-${form.id}`}>
                              Currency:
                            </label>
                            <select
                              value={selectedValue}
                              onChange={handleChange}
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
                              value={stockQuantity}
                              onChange={(e) => setStockQuantity(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-row1">
                          <div className="form-group1">
                            <label htmlFor={`selectColor-${form.id}`}>
                              Select color (optional):
                            </label>
                            <select
                              value={selectedColor}
                              onChange={handleChangeColor}
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
                              value={prodStockColorwise}
                              onChange={(e) =>
                                setProdStockColorwise(e.target.value)
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
                  <button type="button" onClick={addSpecification}>
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
                              value={speHeading}
                              onChange={(e) => setSpeHeading(e.target.value)}
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
                              value={speName}
                              onChange={(e) => setSpeName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="product-description">
                          <label>Product Description</label>
                          <CKEditor
                            editor={ClassicEditor}
                            data={speDescription}
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
              <button
                type="button"
                className="upload-btn"
                onClick={handleSubmit}
              >
                Upload Product
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addnewproduct;
