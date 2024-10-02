import React, { useState, useEffect } from 'react';
import './productSearch.scss';

import axios from 'axios';
import ProductsComp from '../../Components/productsComp/ProductsComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState(null);
  console.log(products);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/data.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && searchTerm) {
      const results = [];
      for (const key in products) {
        const category = products[key];
        const filteredProducts = category.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        results.push(...filteredProducts);
      }
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, products]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCloseSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search About Product"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn btn-outline-secondary" type="button" onClick={handleCloseSearch}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className="btn btn-outline-secondary" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="row">
        {searchResults.length > 0 ? (
          searchResults.map((product, index) => (
            <ProductsComp
                key={index}
                handelCount={() => handelCount(product)}
                increment={ ()=>increment(product)}
  
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
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}