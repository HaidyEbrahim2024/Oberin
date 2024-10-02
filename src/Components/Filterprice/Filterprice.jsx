import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FilterPrice() {
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); // تحديد نطاق السعر الافتراضي

  useEffect(() => {
    // استدعاء البيانات من API
    axios.get('URL_TO_YOUR_API')
      .then(response => {
        setData(response.data);
        setFilteredProducts(response.data); // تعيين البيانات المفلترة للبيانات الأولية
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // فلترة البيانات بناءً على نطاق السعر
    const filterData = data.filter(item => item.price >= minPrice && item.price <= maxPrice);
    setFilteredProducts(filterData);
  }, [minPrice, maxPrice, data]);

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value)); // تحويل القيمة إلى عدد
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value)); // تحويل القيمة إلى عدد
  };

  return (
    <div>
      <h1>Filter by Price</h1>
      
      <label>
        Min Price:
        <input type="number" value={minPrice} onChange={handleMinPriceChange} />
      </label>
      
      <label>
        Max Price:
        <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
      </label>

      <div>
        {filteredProducts.length ? (
          <ul>
            {filteredProducts.map(item => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.img} alt={item.title} />
                <p>Price: ${item.price}</p>
                <p>{item.Gradions}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found within the selected price range.</p>
        )}
      </div>
    </div>
  );
}
