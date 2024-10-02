import "./services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faIntercom } from "@fortawesome/free-brands-svg-icons/faIntercom";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import p from "/image/img/bestQuality.png";
export default function Bestquality() {
  return (
    <>
      <div className="container Bestquality col-12  d-flex" id="services">
        <div className="col-6  text">
          <h1>Why We’re Best Quality Healthy Food</h1>
          <p>
            We offer a wide variety of products to choose from you can find
            everything you need to feed your family. Extra Fastest Delivery
            Extra Fastest Delivery.
          </p>
          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faCarSide} className="icon" />
            <h6>Extra Fastest Delivery</h6>
          </div>

          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faBarsProgress} className="icon" />
            <h6>Track and Manage Orders</h6>
          </div>

          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faIntercom} className="icon" />
            <h6>Customer Support</h6>
          </div>

          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faMoneyCheckDollar} className="icon" />
            <h6>Competitive Price</h6>
          </div>
          {/* <Link className="link_orders" to="/Categories">
            Order Now
          </Link> */}
        </div>
        {/* //------------------------------------------ */}
        <div className=" img col-6 ">
          <img src={p} className=" col-10" />
        </div>
      </div>
    </>
  );
}
