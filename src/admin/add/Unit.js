import React, { useState } from "react";

const Unit = () => {
  const [unitName, setUnitName] = useState("");

  const handleSubmit = async () => {
    const myToken = localStorage.getItem("vendor");
    if (!myToken) {
      console.error("No vendor token found in localStorage");
      return;
    }
    const userData = JSON.parse(myToken);
    console.log(userData.data.vendorid);

    const data = {
      unit_name: unitName,
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
        "http://65.2.153.162:5000/product/save/measurment/unit",
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
      <div>
        <label>Unit Name:</label>
        <input
          type="text"
          value={unitName}
          onChange={(e) => setUnitName(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add Unit
      </button>
    </div>
  );
};

export default Unit;
