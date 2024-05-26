import React from "react";
import { useState } from "react";

const Completeorders = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [entriesToShow, setEntriesToShow] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setEntriesToShow(parseInt(event.target.value));
  };

  const [data, setData] = useState([
    {
      id: 1,
      orderDate: "01-02-2023",
      customerName: "Ashish",
      TrackingNumber: "0966501",
      creator: "ranjit",
      sku: "06352301",
      productName: "laptop",
      productPrice: "50000",
      paymentType: "cod",
      customerType: "regular",
      viewDetails: "",
    },
  ]);

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
                <h2 className="title-v"> All Customer </h2>
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
                  <button className="search-button1" onclick="search()">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <table>
                <thead>
                  <tr>
                    <th>Order Date</th>
                    <th>Customer Name</th>
                    <th>Tracking Number</th>
                    <th>Creator</th>
                    <th>SKU</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Payment Type</th>
                    <th>Customer Type</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.orderDate}</td>
                      <td>{item.customerName}</td>
                      <td>{item.TrackingNumber}</td>
                      <td>{item.creator}</td>
                      <td>{item.sku}</td>
                      <td>{item.productName}</td>
                      <td>{item.productPrice}</td>
                      <td>{item.paymentType}</td>
                      <td>{item.customerType}</td>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Completeorders;
