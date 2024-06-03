import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

const BrandDropdown = ({ onBrandChange }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "http://65.2.153.162:5000/product/brands"
        );
        if (response.data.status === 200) {
          const brandOptions = response.data.data.map((brand) => ({
            value: brand._id,
            label: brand.brand_name,
          }));
          setBrands(brandOptions);
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedBrand(selectedOption);
    onBrandChange(selectedOption); // Call the parent callback function
  };

  return (
    <div>
      <Select
        options={brands}
        value={selectedBrand}
        onChange={handleChange}
        placeholder="Search and select a brand"
      />
      {selectedBrand && (
        <div>
          <h3>Selected Brand:</h3>
          <p>{selectedBrand.label}</p>
        </div>
      )}
    </div>
  );
};

export default BrandDropdown;
