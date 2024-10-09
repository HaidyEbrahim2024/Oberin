import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./index.scss";

// قم بإضافة المسارات الصحيحة للصور
import visa from './visa.png';
import mastercard from './Mastercard.png';
import other from './other.png';

export default function CheckOut({ setBascet }) {
  const [cartitems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost] = useState(100);
  const [selectedCity, setSelectedCity] = useState("");
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [address, setAddress] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cards")) || [];
    setCartItems(storedCart);

    const itemsCount = storedCart.reduce((total, item) => total + item.count, 0);
    const itemsTotalPrice = storedCart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );

    const totalWithShipping = itemsTotalPrice + shippingCost;

    setTotalItems(itemsCount);
    setTotalPrice(totalWithShipping);
  }, [shippingCost]);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setShowAddressInput(city !== "");
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const form = e.target; // الحصول على النموذج

    if (form.checkValidity()) {
      toast.success("Order sent successfully!", {
        position: "top-right",
      });
      // تفريغ السلة
      setBascet([]);
      localStorage.setItem("cards", JSON.stringify([]));
       // إعادة تعيين حالة الإضافة في السلة
       resetCartItems();

      // الانتظار لمدة 3 ثوانٍ (3000 مللي ثانية) قبل الانتقال
      setTimeout(() => {
        navigate("/Final"); // Redirect to the desired page
      }, 3000);
      
    } else {
      toast.error("Please fill in all required fields correctly.", {
        position: "top-right",
      });
      form.reportValidity(); // عرض رسائل التحقق من الصحة
    }
  };
  const resetCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItem")) || {};
    Object.keys(cartItems).forEach(itemId => {
        delete cartItems[itemId];
    });
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
};

  return (
    <div className="container">
      <h1 className="text-center my-5">Check OUT</h1>
      <div className="row  Checkout justify-content-between ">
        <div className=" col-md-6 products-table">
          <h5 className="text-success mb-3">Products chosen to be purchased through the site:</h5>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col" className="fs-5">Title</th>
                <th scope="col" className="fs-5">Price</th>
                <th scope="col" className="fs-5">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartitems.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center">No Products Available</td>
                </tr>
              ) : (
                cartitems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.price} EGP</td>
                    <td>{item.count}</td>
                  </tr>
                ))
              )}
              {cartitems.length > 0 && (
                <>
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Total Items:</td>
                    <td>{totalItems} Items</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (excluding shipping):</td>
                    <td>{(totalPrice - shippingCost).toFixed(2)} EGP</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Shipping Cost:</td>
                    <td>{shippingCost} EGP</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (including shipping):</td>
                    <td>{totalPrice.toFixed(2)} EGP</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6 input-section">
          <h5 className="text-success mb-3">Enter Your Information:</h5>
          <form className="CheckOut d-flex flex-column gap-3 mb-5" onSubmit={handleSend}>
            <input
              id="name"
              className="form-control"
              placeholder='Enter Your Name'
              required
            />
            <input
              id="phone"
              className="form-control"
              placeholder='Enter Your Phone'
              required
            />
            <select className="form-select p-1" onChange={handleCityChange} required>
              <option value="">Choose your city</option>
              <option value="1">Alexandria</option>
              <option value="2">Asyut</option>
              <option value="3">Sohag</option>
              <option value="4">Qena</option>
              <option value="5">Banha</option>
              <option value="6">The Red Sea</option>
            </select>
            {showAddressInput && (
              <input
                type="text"
                className="form-control address"
                placeholder="Enter your address in detail"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            )}
            <div className="payment-method-selection">
              <h5 className="text-success mb-3">Select Payment Method:</h5>
              <div className="radio-group d-flex">
                <div className="radio-button d-flex justify-content-center align-items-center gap-1">
                  <input
                    type="radio"
                    id="payment-visa"
                    name="payment-method"
                    value="visa"
                    checked={selectedPaymentMethod === 'visa'}
                    onChange={handlePaymentMethodChange}
                    required
                  />
                  <label htmlFor="payment-visa">
                    <img src={visa} alt="Visa" className='col-10' />
                  </label>
                </div>
                <div className="radio-button d-flex justify-content-center align-items-center gap-1">
                  <input
                    type="radio"
                    id="payment-other"
                    name="payment-method"
                    value="other"
                    checked={selectedPaymentMethod === 'other'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="payment-other">
                    <img src={other} alt="Other" className='col-10' />
                  </label>
                </div>
                <div className="radio-button d-flex justify-content-center align-items-center gap-1">
                  <input
                    type="radio"
                    id="payment-mastercard"
                    name="payment-method"
                    value="mastercard"
                    checked={selectedPaymentMethod === 'mastercard'}
                    onChange={handlePaymentMethodChange}
                    required
                  />
                  <label htmlFor="payment-mastercard">
                    <img src={mastercard} alt="Mastercard" className='col-2' />
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-end gap-3 mt-3">
              <button type="submit" className="btn btn-success">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
