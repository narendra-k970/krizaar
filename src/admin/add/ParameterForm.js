import React, { useState } from "react";
import { REACT_BASE_PATH } from "../../api";

const ParameterForm = () => {
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
        `${REACT_BASE_PATH}/product/save/measurment/parameter`,
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
      {/* <h1>Add a New Parameter</h1> */}
      <div>
        <label>Parameter Name:</label>
        <input
          type="text"
          value={parameterName}
          onChange={(e) => setParameterName(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add Parameter
      </button>
    </div>
  );
};

export default ParameterForm;
