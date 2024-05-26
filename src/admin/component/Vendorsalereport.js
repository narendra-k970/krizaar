import React from "react";
import { useState } from "react";

const Vendorsalereport = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [entriesToShow, setEntriesToShow] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setEntriesToShow(parseInt(event.target.value));
  };

  const [data, setData] = useState([
    {
      id: 1,
      image: "url_to_image",
      productName: "laptop",
      companyName: "ABC Company",
      vendorName: "ashish",
      paidAmount: "50000",
      transcation: "01190099",
      approve: true,
      date: "2024-04-30",
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
                <h2 className="title-v">Vendors Sale Report</h2>{" "}
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
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Vendor Name</th>
                    <th>Customer Name</th>
                    <th>Paid Amount</th>
                    <th>Transaction</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt="avatar"
                          width="50"
                          height="50"
                        />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.companyName}</td>
                      <td>{item.vendorName}</td>
                      <td>{item.paidAmount}</td>
                      <td>{item.transcation}</td>
                      <td>
                        <i className="fa fa-eye"></i>
                      </td>
                      <td>{item.date}</td>

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

export default Vendorsalereport;
