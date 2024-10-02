import ProductsComp from "../productsComp/ProductsComp";
import "./products.scss"
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

export default function Prouducts({ handelCount }) {
  const [currentPage, setCurrentPage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [fruit, setFruit] = useState([]);
  useEffect(() => {
    setCurrentPage("breakfast");
    const productitems = async () => {
      try {
        const res = await axios.get("/data.json");
        setBreakfast(res.data.breakfast);
        setLunch(res.data.lunch);
        setDinner(res.data.Dinner);
        setFruit(res.data.Fruits);
      } catch (err) {}
    };
    productitems();
  }, []);
  const handleNavLinkClick = (el) => {
    setCurrentPage(el);
    setClicked(true);
  };
  return (
    <div className="Prouducts">
      {/* //text */}
      <div className=" text col-12 d-flex justify-content-center">
        <h2 className="text-center mt-5 mb-3 col-4 ">
          Enjoy Our Healthy And Fresh Food Items
        </h2>
      </div>
      <div className="  Nav_meals d-flex  flex-row justify-content-center gap-3 align-items-center">
        <NavLink
          className="Nav_link"
          style={
            currentPage === "breakfast" ? { backgroundColor: " #e98c81", color:"white"  } : {}
          }
          onClick={() => handleNavLinkClick("breakfast")}
        >
          Breakfast
        </NavLink>
        <NavLink
          className=" Nav_link"
          style={currentPage === "lunch" ? { backgroundColor: " #e98c81" ,color:"white" } : {}}
          onClick={() => setCurrentPage("lunch")}
        >
          Lunch
        </NavLink>
        <NavLink
          className=" Nav_link"
          style={
            currentPage === "dinner" ? { backgroundColor: " #e98c81" , color:"white"} : {}
          }
          onClick={() => setCurrentPage("dinner")}
        >
          Dinner
        </NavLink>
        <NavLink
          className=" Nav_link"
          style={currentPage === "fruit" ? { backgroundColor: " #e98c81" ,color:"white" } : {}}
          onClick={() => setCurrentPage("fruit")}
        >
          Fruits
        </NavLink>
      </div>

      {currentPage === "breakfast" && (
        <div className="container">
          <div className="row">
            {breakfast.map((product, index) => (
              <ProductsComp
                key={index}
                handelCount={() => handelCount(product)}
                img={product.img}
                h1={product.title}
              h6={product.type}
              h5={product.important}
                p={product.price}
                stars={product.stars} 
                Categuary={product.Categuary}
                Gradions={product.Gradions}
                nm={product.nm}
                sold={product.sold}

              />
            ))}
          </div>
        </div>
      )}
      {currentPage === "lunch" && (
        <div className="container">
          <div className="row">
            {lunch.map((product, index) => (
              <ProductsComp
                key={index}
                handelCount={() => handelCount(product)}
                img={product.img}
                h6={product.type}
                h5={product.important}
                nm={product.nm}
                sold={product.sold}

                h1={product.title}
                p={product.price}
                stars={product.stars} 
                Categuary={product.Categuary}
                Gradions={product.Gradions}


              />
            ))}
          </div>
        </div>
      )}
      {currentPage === "dinner" && (
        <div className="container">
          <div className="row">
            {dinner.map((product, index) => (
              <ProductsComp
                key={index}
                handelCount={() => handelCount(product)}
                img={product.img}
                h1={product.title}
                h6={product.type}
                h5={product.important}
                nm={product.nm}
                sold={product.sold}

                p={product.price}
                stars={product.stars} 
                Categuary={product.Categuary}
                Gradions={product.Gradions}


              />
            ))}
          </div>
        </div>
      )}
      {currentPage === "fruit" && (
        <div className="container">
          <div className="row">
            {fruit.map((product, index) => (
              <ProductsComp
                key={index}
                handelCount={() => handelCount(product)}
                img={product.img}
                h1={product.title}
                h6={product.type}
                h5={product.important}
                nm={product.nm}
                p={product.price}
                stars={product.stars} 
                Categuary={product.Categuary}
                Gradions={product.Gradions}
                sold={product.sold}


              />
            ))}
          </div>
        </div>
      )}

      <div className="col-12 d-flex justify-content-center">
        <Link to="/allpro" className="btn btn-outline-secondary ">
          View All Products
        </Link>
      </div>
    </div>
  );
}
