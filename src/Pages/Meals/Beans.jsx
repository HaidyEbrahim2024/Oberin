import React from "react";
import "./index.scss";
import beans from "./1.jpeg";

export default function Beans() {
  return (
    <div className=" container Beans">
      <div className="parents d-flex">
          <img src={beans} className="col-5 p-5" />
          <div > 
            <p className="fs-4"><span className="fs-2">Type:</span>fruit of Yogry</p>
          </div>
      </div>
    </div>
  );
}
