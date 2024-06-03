import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

const MeasurementParameterDropdown = ({ onParameterChange }) => {
  const [parameters, setParameters] = useState([]);
  const [selectedParameter, setSelectedParameter] = useState(null);

  useEffect(() => {
    const fetchParameters = async () => {
      try {
        const response = await axios.get(
          "http://65.2.153.162:5000/product/getproductmeasurmentparameter"
        );
        if (response.data.status === 200) {
          const parameterOptions = response.data.data.map((parameter) => ({
            value: parameter._id,
            label: parameter.parameter_name,
          }));
          setParameters(parameterOptions);
        }
      } catch (error) {
        console.error("Error fetching parameters:", error);
      }
    };

    fetchParameters();
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedParameter(selectedOption);
    onParameterChange(selectedOption); // Call the parent callback function
  };

  return (
    <div>
      <Select
        options={parameters}
        value={selectedParameter}
        onChange={handleChange}
        placeholder="Search and select a parameter"
        isSearchable
      />
      {selectedParameter && (
        <div>
          <h3>Selected Parameter:</h3>
          <p>{selectedParameter.label}</p>
        </div>
      )}
    </div>
  );
};

export default MeasurementParameterDropdown;
