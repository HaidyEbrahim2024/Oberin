import "./bestquality.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Y from "./y.webp";
import { Link } from "react-router-dom";
// import {p} from "/image/img/bestQuality.png"
export default function Bestquality() {
  return (
    <>
      <div className="container Bestquality col-12  d-flex">
        <div className=" img col-6 ">
          <img src={Y} className=" col-10" />
        </div>
        <div className="col-6  text">
          <h1>Best Quality Healthy And Fresh Food</h1>
          <p>
            We prioritize quality in each of our grocery, below are the
            advantage of our products. Organic food is food produced.
          </p>
          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faCircleCheck} className="icon" />
            <h6>Best Quality Healthy And Fresh Food</h6>
          </div>

          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faCircleCheck} className="icon" />
            <h6>100% Organic & Natural Products</h6>
          </div>

          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faCircleCheck} className="icon" />
            <h6>100% Returns & Refunds</h6>
          </div>

          <div className="d-flex gap-3 mb-3 ">
            <FontAwesomeIcon icon={faCircleCheck} className="icon" />
            <h6>User-Friendly Mobile Apps</h6>
          </div>
          <Link className="orders" to="/allpro">
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}
