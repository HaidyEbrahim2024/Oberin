import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sort() {
  const [foods, setFoods] = useState(null);
  const [filteredHighPrice, setFilteredHighPrice] = useState([]);
  const [filteredLowPrice, setFilteredLowPrice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json'); // تعديل المسار حسب ترتيب مشروعك
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (foods) {
      const highPrice = foods.filter(item => item.price > 100);
      const lowPrice = foods.filter(item => item.price <= 100);
      setFilteredHighPrice(highPrice);
      setFilteredLowPrice(lowPrice);
    }
  }, [foods]);

  if (!foods) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2>Items with Price &gt; 100</h2>
        {filteredHighPrice.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>{item.Gradions}</p>
            <p>Rating: {item.stars.rating} ({item.stars.reviews} reviews)</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Items with Price ≤ 100</h2>
        {filteredLowPrice.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>{item.Gradions}</p>
            <p>Rating: {item.stars.rating} ({item.stars.reviews} reviews)</p>
          </div>
        ))}
      </div>
    </div>
  );
}
