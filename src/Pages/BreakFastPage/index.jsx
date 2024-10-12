
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsComp from "../../Components/productsComp/ProductsComp";
import ProductSearch from "../../Components/ProductSearch/ProductSearch";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import "./index.scss";
import bre from "./break.png";

export default function BreakfastPage({ handelCount, increment }) {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchBreakfastItems = async () => {
      try {
        const response = await axios.get("/data.json");
        console.log(response.data.breakfast);
        setBreakfastItems(response.data.breakfast);
      } catch (error) {
        console.error("Error fetching breakfast items:", error);
      }
    };
    fetchBreakfastItems();
  }, []);

  const sortItems = (order) => {
    const sortedItems = [...breakfastItems].sort((a, b) => {
      if (order === 'lowToHigh') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setBreakfastItems(sortedItems);
  };

  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    sortItems(selectedOrder);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredItems = breakfastItems.filter(item => {
    const matchesName = item.title.toLowerCase().includes(searchQuery);
    const matchesPrice = (
      (minPrice === '' || item.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || item.price <= parseFloat(maxPrice))
    );
    return matchesName && matchesPrice;
  });

  return (
    <>
      <div className="mealbreakfat">
        <div className="image col-12">
          <img src={bre} alt="" className="rotate-animation img col-3" />
          <div className="text">
            <h3>Healthy  </h3>
            <h1> BreakFast ideas </h1>

            <div className="text2 ">
              <p>Stuk in the morning ? Find over 100 healthy.</p>
              <p> breakfast ideas on our Website! suger free,</p>
              <p> gluten free , and nutritious.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="layout">
          <div className=" col-md-3 ">
            <div className="place d-flex flex-column gap-3">
              <div className="mb-3">
                <label htmlFor="searchByName" className="form-label">Search by name:</label>
                <div className="input-group relative">
                  <input
                    type="text"
                    className="form-control"
                    id="searchByName"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by name"
                  />
                  <FaSearch className="search-icon z-10" style={{ top: "12px", right: "10px", zIndex: "10" }} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="priceRange" className="form-label">Search by price  Manual:</label>
                <div className="d-flex align-items-center mb-3">
                  <div className="input-group me-2">
                    <span className="input-group-text">Min</span>
                    <input
                      type="number"
                      className="form-control"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <span className="mx-2">-</span>
                  <div className="input-group ms-2">
                    <span className="input-group-text">Max</span>
                    <input
                      type="number"
                      className="form-control"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="sortOrder" className="form-label">Sort by:</label>
                <select className="form-select" id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="cards-section col-md-9">
            <div className="Back d-flex align-items-center gap-3">
              <Link to="/CatAll" className="link">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                Back
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {filteredItems.map((product, index) => (
                <ProductsComp
                  key={index}
                  handelCount={() => handelCount(product)}
                  increment={() => increment(product)}
                  img={product.img}
                  h1={product.title}
                  h6={product.type}
                  p={product.price}
                  stars={product.stars}
                  Categuary={product.Categuary}
                  Gradions={product.Gradions}
                  h5={product.important}
                  nm={product.nm}
                  sold={product.sold}
                  productsId={product.id}

                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
