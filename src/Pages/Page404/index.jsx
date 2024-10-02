import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
export default function Page404() {
  return (
    <div className="Page404">
      <div className="content d-flex flex-column">
        <div className=" page_info   ">
          <h1>Page 404</h1>
          <h4>This Page is not Found🙁</h4>
          <div className="Link_arrow">
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            <Link to="/" className="link">
              Back to Our Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
