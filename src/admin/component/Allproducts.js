import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Productpopup from "./Productpopup";

const Allproducts = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const tableRef = useRef(null);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedOption(value);
    setCurrentPage(1); // Reset to the first page when the page size changes
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://65.2.153.162:5000/product/getallproductsdetails",
        {
          page: currentPage,
          pagesize: selectedOption,
        }
      );
      setData(response.data.data);
      // setTotalPages(Math.ceil(response.data.total / selectedOption));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedOption]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const handleApprove = (id) => {
  //   const newData = data.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, approve: !item.approve };
  //     }
  //     return item;
  //   });
  //   setData(newData);
  // };

  const exportCSV = () => {
    const rows = Array.from(tableRef.current.querySelectorAll("tr"));
    const csvData = rows
      .map((row) => {
        const cells = Array.from(row.querySelectorAll("th, td"));
        return cells.map((cell) => cell.textContent).join(",");
      })
      .join("\n");

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "products.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl comp-bg">
      <section>
        <div className="container">
          <div className="row">
            <div className="vendor-top">
              <h2 className="title-v">All Products</h2>
              <button onClick={exportCSV}>Export CSV</button>
            </div>
          </div>
          <div className="row">
            <div className="vendor-search my-4">
              <div>
                <label htmlFor="entries">Show entries:</label>
                <select
                  id="entries"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table ref={tableRef}>
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
                  {data.map((item) => (
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
                        {item.product_measurment_price_detail.map(
                          (data, index) => (
                            <p key={index}>{data.price}</p>
                          )
                        )}
                      </td>
                      <td>{item.brand_details.brand_name}</td>
                      <td>{item.category_details.category_name}</td>
                      <td>
                        <button className="edit-btn">
                          <Productpopup />
                        </button>
                        <button className="trash-icon">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {/* <div className="row">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
            >
              Next
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Allproducts;
