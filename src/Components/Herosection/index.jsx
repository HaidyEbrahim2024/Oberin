import "./index.scss";
import pic from "./pic.webp";
import { Link } from "react-router-dom";
export default function Herosection() {
  return (
    <>
    
      <div className="  Herosection">
        <img className="col-12" src={pic} />
        <div className="text">
          <h3>Healthy Life </h3>
          <h1>Natural Organic</h1>
          <Link className="link_orders" to="/allpro">
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}
