
import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import bre from "./1.jpg";
import dinner from "./7.jpg";
import fruit from "./12.avif";
import lunch from "./9.avif";
import Services from "../../Components/Services/Services";

import Heromain from '../../Components/Heromain/Heromain';

export default function CatAll() {
  return (
    <>
      <Heromain />
      <div className="container">
        <div className="CatAll">
          <div className="FirstMeal">
            <Link to="/breakfast" className="food_one">
              <img src={bre} alt="Breakfast" />
              <h2 className='breakfast1'>Breakfast</h2>
              <h6 className='breakfast2'>9 Items</h6>
              <div className="overlay"></div>
            </Link>
          </div>
          <div className="FirstMeal">
            <Link to="/lunch" className="food_one">
              <img src={lunch} alt="Lunch" />
              <h2 className='lunch1'>Lunch</h2>
              <h6 className='lunch2'>9 Items</h6>
              <div className="overlay"></div>
            </Link>
          </div>
          <div className="FirstMeal">
            <Link to="/dinner" className="food_one">
              <img src={dinner} alt="Dinner" />
              <h2 className='dinner1'>Dinner</h2>
              <h6 className='dinner2'>9 Items</h6>
              <div className="overlay"></div>
            </Link>
          </div>
          <div className="FirstMeal">
            <Link to="/fruit" className="food_one">
              <img src={fruit} alt="Fruit" />
              <h2 className='fruit1'>Fruit</h2>
              <h6 className='fruit2'>9 Items</h6>
              <div className="overlay"></div>
            </Link>
          </div>
        </div>
      </div>
      <Services />

    </>
  );
}
