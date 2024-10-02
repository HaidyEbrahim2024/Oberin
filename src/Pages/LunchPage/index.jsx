import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import ProductsComp from "../../Components/productsComp/ProductsComp";
import { FaSearch } from 'react-icons/fa';
import lunch from "./lunch.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function LunchPage({ handelCount, increment }) {
  const [lunchItems, setLunchItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  useEffect(() => {
    const fetchLunchItems = async () => {
      try {
        const response = await axios.get("/data.json");
        setLunchItems(response.data.lunch || []);
      } catch (error) {
        console.error("Error fetching lunch items:", error);
      }
    };
    fetchLunchItems();
  }, []);

  const sortItems = (order) => {
    const sortedItems = [...lunchItems].sort((a, b) => {
      return order === 'lowToHigh' ? a.price - b.price : b.price - a.price;
    });
    setLunchItems(sortedItems);
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
    const value = event.target.value ? parseFloat(event.target.value) : '';
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event) => {
    const value = event.target.value ? parseFloat(event.target.value) : '';
    setMaxPrice(value);
  };

  const filteredItems = lunchItems.filter(item => {
    const matchesName = item.title.toLowerCase().includes(searchQuery);
    const matchesPrice = (
      (minPrice === '' || item.price >= minPrice) &&
      (maxPrice === '' || item.price <= maxPrice)
    );
    return matchesName && matchesPrice;
  });

  return (
    <>
      <div className="mealLunch">
        <div className="image col-12">
          <img src={lunch} alt="" className="rotate-animation img col-3" />

          <div className="text">
          <h3>Healthy  </h3>
          <h1> Lunch ideas </h1>

          <div  className="text2 ">
          <p>Stuk in the afternoon ? Find over 100 healthy.</p>
          <p> lunch ideas on our Website! suger free,</p>
          <p> gluten free , and nutritious.</p>

          </div>
          </div>
        </div>
      </div>
     

      <div className="container">
        <div className="layout">
          <div className="col-md-3">
            <div className="d-flex flex-column gap-3">
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
                <label htmlFor="priceRange" className="form-label">Search by price range:</label>
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
                  <option value="lowToHigh" clas>Price: Low to High</option>
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
            <div className="row ">
              {filteredItems.length > 0 ? (
                filteredItems.map((product, index) => (
                  <ProductsComp
                    key={index}
                    img={product.img}
                    h1={product.title}
                    p={product.price}
                    h6={product.type}
                    h5={product.important}
                    nm={product.nm}
                    stars={product.stars} 
                    Categuary={product.Categuary}
                    Gradions={product.Gradions}
                    handelCount={() => handelCount(product)}
                    increment={() => increment(product)}
                    sold={product.sold}
                  />
                ))
              ) : (
                <p>No items found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
