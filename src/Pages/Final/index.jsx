import React from 'react'
import "./index.scss"
// import correct from "./true.png";
// import correct2 from "./true2.gif";
import correct3 from "./true3.jpg";
import { Link } from 'react-router-dom';
export default function final() {
  return (
    <div className='Final'>
      <div className='checkpage'>
        <div className="image  col-3 mb-2 ">
          <img src={correct3} className='col-12' />
        </div>
        <div className='text'>
          <h5>Payment Successful ! </h5>
          <p >We Send an email with your order confirmation along with digital content </p>
        </div>
        <div> 
          <Link  to="/" className="btn btn-success">Go To Home</Link>
           </div>
      </div>

    </div>
  )
}
