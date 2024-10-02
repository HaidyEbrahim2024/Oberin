import React from 'react'
import "./heromain.scss";
import slider from "./slider-1.webp";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

export default function Heromain() {
  return (
    <div className="meals col-12" >
    <img src={slider}className=' img col-12' />
  <div className='text animate__animated animate__fadeInDown'>
    <h3>Welcome to </h3>
    <h1> <span>Obrien </span>category</h1>
  </div>
  <div className="links ">
  <Link className="link_orders" to="/allpro">
  <FontAwesomeIcon icon={faChevronRight} />

          All product
          </Link>
  </div>
  </div>
  )
}
