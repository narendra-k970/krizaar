import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

const MeasurementUnitDropdown = ({ onUnitChange }) => {
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await axios.get(
          "http://65.2.153.162:5000/product/getproductmeasurmentunit"
        );
        if (response.data.status === 200) {
          const unitOptions = response.data.data.map((unit) => ({
            value: unit._id,
            label: unit.unit_name,
          }));
          setUnits(unitOptions);
        }
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    };

    fetchUnits();
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedUnit(selectedOption);
    onUnitChange(selectedOption); // Call the parent callback function
  };

  return (
    <div>
      <Select
        options={units}
        value={selectedUnit}
        onChange={handleChange}
        placeholder="Search and select a unit"
        isSearchable
      />
      {selectedUnit && (
        <div>
          <h3>Selected Unit:</h3>
          <p>{selectedUnit.label}</p>
        </div>
      )}
    </div>
  );
};

export default MeasurementUnitDropdown;
