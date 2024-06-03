import React, { useState } from "react";
import { REACT_BASE_PATH } from "../../api";

const Brand = () => {
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Add a New Brand</h1>
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
      <button type="submit" onClick={handleSubmit}>
        Add Brand
      </button>
    </div>
  );
};

export default Brand;
