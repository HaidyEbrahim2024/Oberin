import "./index.scss";
import { Link } from "react-router-dom";
import f from "./f.webp";
import Services from "../../Components/Services/Services";

export default function AboutPage() {
  return (
    <>

      <div className="AboutPage">
        <div className="container  d-flex">
          <div className="text  col-6">
            <h2 className="mt-3">About us</h2>
            {/* <h4 className="">Welcome to Our Oberin App</h4> */}
            <p>
              Eating Healthy Foods provides health benefits — people who eat
              more fruits and vegetables as part of an overall healthy diet are
              likely to have a reduced risk of some chronic diseases. Fruits
              provide nutrients vital for health and maintenance of your body.
            </p>
            <p>
              Healthy Foods are sources of many essential nutrients that are
              underconsumed, including potassium, dietary fiber, vitamin C, and
              folate (folic acid)
            </p>
            <p>
              Most Healthy Foods are naturally low in fat, sodium, and calories.
              None have cholesterol.
            </p>
          </div>
          <div className="image_gif  d-flex justify-content-center align-items-center">
            <img src={f} className=" img col-8" />
          </div>
        </div>
      </div>
      <div className="  contact_us  d-flex  ">
        <div className="container col-12  d-flex justify-content-between align-items-center ">
          <h3>Need Help ?</h3>
          <Link to="https://wa.me/01102643952" className="link">
            Contact Us
          </Link>
        </div>
      </div>
      <Services />

    </>
  );
}
