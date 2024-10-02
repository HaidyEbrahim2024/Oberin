import "./footer.scss";
import logo from "./logo.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section>
        <div className="container">
          <div className="Parent">
            <div className="social_media gap-2 d-flex flex-column justify-content-start align-items-start ">
              <img src={logo} className="" />
              <h6 className="text-white ">
                Lukas is the best parts shop for your car accessories. What kind
                of parts do you need you can get here soluta nobis
              </h6>
              <div className="d-flex gap-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-light icon fs-4"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-light icon fs-4"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-light icon fs-4"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-light icon fs-4 "
                />
              </div>
            </div>
            <div className="About d-flex flex-column justify-content-start align-items-start ">
              <h4 className="text-white"> About Us</h4>
              <Link to="" className="links_footer">
                {" "}
                About us
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Why us
              </Link>
              <Link to="" className="links_footer">
                {" "}
                security
              </Link>
              <Link to="" className="links_footer">
                {" "}
                About us
              </Link>
            </div>
            <div className="Help d-flex flex-column justify-content-start align-items-start ">
              <h4 className="text-white"> Help</h4>
              <Link to="" className="links_footer">
                Account
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Support Center
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Privacy Policy
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Terms & Condition
              </Link>
            </div>
            <div className="contact d-flex flex-column justify-content-start align-items-start ">
              <h4 className="text-white"> Contact Us</h4>
              <Link to="" className="links_footer">
                123, H2, Road #21, Main City, Your address goes here.{" "}
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Phone: 01254 698 785, 36598 254 987
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Privacy Policy
              </Link>
              <Link to="" className="links_footer">
                {" "}
                Email: demo@example.com
              </Link>
            </div>
          </div>
        </div>
        <div className="copy_righr col-12">
          <p className="text-center text-white col-12 m-0">
            © 2024 Developed By<a href="#"> Haidy Ibrahim</a>
          </p>
        </div>
      </section>
      
    </>
  );
}
