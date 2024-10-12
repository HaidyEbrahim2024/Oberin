import { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

export default function ShoppingCard({
  bascet,
  handleDeleteAllItems,
  handleDeleteItem,
}) {
  const [cartitems, setcartitems] = useState([]);

  useEffect(() => {
    setcartitems(bascet);
  }, [bascet]);

  const updateLocalStorage = (items) => {
    localStorage.setItem("cards", JSON.stringify(items));
  };

  const increment = (index) => {
    const newCartItems = [...cartitems];
    newCartItems[index].count += 1;
    updateLocalStorage(newCartItems);
    setcartitems(newCartItems);
  };

  const decrement = (index) => {
    const newCartItems = [...cartitems];
    if (newCartItems[index].count > 1) {
      newCartItems[index].count -= 1;
      updateLocalStorage(newCartItems);
      setcartitems(newCartItems);
    } else {
      toast.error("Item count cannot be less than 1.");
    }
  };

  const deleteItem = (index) => {
    const newCartItems = [...cartitems];
    const itemToDelete = newCartItems[index];
    newCartItems.splice(index, 1);
    updateLocalStorage(newCartItems);
    setcartitems(newCartItems);
    handleDeleteItem(itemToDelete);
  };

  const deleteAllItems = () => {
    localStorage.removeItem("cards");
    setcartitems([]);
    handleDeleteAllItems();
  };

  const totalItems = cartitems.reduce((total, item) => total + item.count, 0);
  const totalPrice = cartitems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <div className="ShoppingCard mb-7">
      <h1 className="text-center my-3">Shopping Cart</h1>
      <div className="container">
        {cartitems.length > 0 ? (
          cartitems.map((el, index) => (
            <div className=" product_box w-100 d-flex align-items-center mb-3" key={index}>

              <FontAwesomeIcon icon={faX}  onClick={() => deleteItem(index)} style={{position:"absolute" , top:"10px" , right:"10px" ,cursor:"pointer"}}/>
              <img 
              
                src={el.img} 
                alt={el.title} 
                className="col-2 me-3" 
                style={{ width: "150px", height: "150px", objectFit: "cover" }} 
              />
              <div className="ms-2"> {/* Use margin start for spacing */}
                <h5 className="mb-0">Title: {el.title}</h5>
                <h5 className="mb-0">Price: {el.price} EGP</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <h5 className="mb-0 me-2">Quantity:</h5>
                  <button className="btn-circle me-1  btn btn-success" onClick={() => increment(index)}><h5>+</h5></button>
                  <h6>{el.count}</h6>
                  <button className="btn-circle mx-1  btn btn-danger" onClick={() => decrement(index)}><h5>-</h5></button>
                 
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}

        <div className="summary d-flex justify-content-between col-12 table table-bordered mt-4">
          <h4 className="text-success">
            Total Items:{" "}
            <span className="fs-5 text-black">{totalItems} Items</span>
          </h4>
          <h4 className="text-success">
            Total Price:{" "}
            <span className="fs-5 text-black">{totalPrice.toFixed(2)} EGP</span>
          </h4>
        </div>
        <div className="checkout d-flex justify-content-end col-12 mt-3">
          <Link className="link_orders btn btn-primary me-2" to="/login">
            Checkout
          </Link>
          <button className="link_orders btn btn-danger" onClick={deleteAllItems}>
            Delete All Items
          </button>
        </div>
      </div>
    </div>
  );
}
