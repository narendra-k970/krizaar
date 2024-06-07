import React, { useState, useEffect } from "react";
import axios from "axios";

const Vendorproducts = () => {
  const [data, setData] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");
  const [entriesToShow, setEntriesToShow] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setEntriesToShow(parseInt(event.target.value));
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://65.2.153.162:5000/product/getallproductsdetails"
      );

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log("hellloooo");
    fetchData();
  }, []);

  const handleApprove = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, approve: !item.approve };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <>
      <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl comp-bg">
        <section>
          <div className="container">
            <div className="row">
              <div className="vendor-top">
                <h2 className="title-v">Vendors Products</h2>
                <button> Export CSV </button>
              </div>
            </div>
            <div className="row">
              <div className="vendor-search my-4">
                <div>
                  <label htmlFor="entries"> Show entries: </label>
                  <select
                    id="entries"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="10"> 10 </option>
                    <option value="20"> 20 </option>
                    <option value="30"> 30 </option>
                  </select>
                  <ul>
                    {/* Render the appropriate number of entries based on selectedOption */}
                    {Array.from(
                      {
                        length: entriesToShow,
                      },
                      (_, index) => (
                        <li key={index}> {`Entry ${index + 1}`} </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="search-container">
                  <input
                    type="text"
                    className="search-bar"
                    id="searchInput"
                    placeholder="Search..."
                  />
                  <button className="search-button1">Search</button>
                </div>
              </div>
            </div>
            <div className="row">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Brand Name</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    console.log(item);
                    return (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.product_banner_image}
                            alt="product"
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{item.product_name}</td>
                        <td>{item.product_squ_id}</td>
                        <td>
                          {item.product_measurment_price_detail.map((data) => {
                            return <p>{data.price}</p>;
                          })}
                        </td>
                        <td>{item.brand_details.brand_name}</td>
                        <td>{item.category_details.category_name}</td>
                        <td>
                          <button
                            className="edit-btn"
                            onClick={() => handleApprove(item.id)}
                          >
                            <i className="fa fa-edit"></i>
                          </button>
                          <button className="trash-icon">
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vendorproducts;
