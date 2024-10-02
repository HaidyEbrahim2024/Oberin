import { useEffect, useState } from "react";
import "./index.scss";
import ProductsComp from "../../Components/productsComp/ProductsComp";
import axios from "axios";
import DINNER from "./DINNER.png";
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function DinnerPage({ handelCount, increment }) {
  const [DinnerItem, setDinnerItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State to manage search query by name
  const [minPrice, setMinPrice] = useState(''); // State to manage minimum price
  const [maxPrice, setMaxPrice] = useState(''); // State to manage maximum price
  const [sortOrder, setSortOrder] = useState('lowToHigh'); // State to manage sort order

  useEffect(() => {
    const fetchDinnerItems = async () => {
      try {
        const res = await axios.get("/data.json");
        setDinnerItem(res.data.Dinner || []); // Handle case where res.data.Dinner might be undefined
      } catch (error) {
        console.error("Error fetching Dinner items:", error);
      }
    };
    fetchDinnerItems();
  }, []);

  const sortItems = (order) => {
    const sortedItems = [...DinnerItem].sort((a, b) => {
      if (order === 'lowToHigh') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setDinnerItem(sortedItems);
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    sortItems(selectedOrder);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Handle price range input change
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  // Filter items based on search query and price range
  const filteredItems = DinnerItem.filter(item => {
    const matchesName = item.title.toLowerCase().includes(searchQuery);
    const matchesPrice = (
      (minPrice === '' || item.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || item.price <= parseFloat(maxPrice))
    );
    return matchesName && matchesPrice;
  });

  return (
    <>
     <div className="mealdinner">
        <div className="image col-12">
          <img src={DINNER} alt="" className="rotate-animation img col-2" />

          <div className="text">
          <h3>Healthy  </h3>
          <h1> Dinner ideas </h1>

          <div  className="text2 ">
          <p>Stuk in the morning ? Find over 100 healthy.</p>
          <p> dinner ideas on our Website! suger free,</p>
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
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          {/* <div className="cards-section">
          <div className="Back d-flex align-items-center gap-3">
              <Link to="/CatAll" className="link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              Back
              </Link>
              </div>
            <div className="row">
              {filteredItems.length > 0 ? (
                filteredItems.map((product, index) => (
                  <ProductsComp
                    key={index}
                    handelCount={() => handelCount(product)}
                    increment={() => increment(product)}
                    img={product.img}
                    h6={product.type}
                    h5={product.important}
                    h1={product.title}
                    p={product.price}
                    stars={product.stars}
                    Categuary={product.Categuary}
                    Gradions={product.Gradions}
                    nm={product.nm}
                    sold={product.sold}
                  />
                ))
              ) : (
                <p>No items found</p>
              )}
            </div>
          </div> */}
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
