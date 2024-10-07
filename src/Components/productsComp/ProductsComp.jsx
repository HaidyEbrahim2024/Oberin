
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye, faStarHalf, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ProductsComp({
  increment,
  img,
  h1,
  p,
  h6,
  stars,
  nm,
  h5,
  handelCount,
  Gradions,
  Categuary,
  sold,
  n,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // State to track if the product is added to cart

  const handleIncrement = () => {
    // handle increment logic (not fully shown in your snippet)
  };

  const handleDecrement = () => {
    // handle decrement logic (not fully shown in your snippet)
  };

  const renderStars = (rating, reviews) => {
    const starsArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-warning fs-6" />
        );
      } else if (hasHalfStar && i === fullStars + 1) {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStarHalf} className="text-warning fs-6" />
        );
      } else {
        starsArray.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-muted fs-6" />
        );
      }
    }

    return <>{starsArray}</>;
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    setIsAdded(true); // Set product as added
    handelCount(); // Call the existing add to cart handler
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4 position-relative">
      <div className="card">
        <img
          className="card-img-top p-0"
          src={img}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={openModal}
          style={{ cursor: "pointer" }}
        />
        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              padding: "2px",
              zIndex: "1",
              cursor: "pointer",
              visibility: "hidden",
            }}
          >
            <FontAwesomeIcon onClick={openModal} icon={faEye} />
          </div>
        )}

        <div className="card-body p-0">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h3
              className="card-title py-2"
              style={{
                cursor: "pointer",
                color: isHovered ? "#696868" : "black"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={openModal}
            >
              {h1}
            </h3>
            <button
              style={{
                borderRadius: "10px",
                padding: "6px 12px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
              }}
            >
              {h6}
            </button>
          </div>

          <p className="card-text py-0">{h5}</p>
          <div className="d-flex   justify-content-between">
            <div>
            {stars && renderStars(stars.rating)}
            </div>
            <h6>
            {/* Price :<span> {p} EGP</span> */}
            <span> {p} EGP</span>
          </h6>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center py-2">
          {/* <h6>
            Price :<span> {p} EGP</span>
          </h6> */}
          <button className="btn btn-outline-secondary col-12" 
          
          style={{ minWidth: '120px' }} // تعيين عرض الحد الأدنى للزر
          onClick={handleAddToCart}>
            {isAdded ? "Added" : "Add to Cart"} {/* Change button text based on state */}
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header col-12 d-flex flex-column" style={{ height: "50vh", paddingBottom: "40px" }}>
                <img
                  src={img}
                  alt={h1}
                  className="col-12 pb-2"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    borderRadius: "15px",
                  }}
                />
                <div className="d-flex justify-content-between align-items-center col-12">
                  <h5>
                    <span className="fs-5 text-success">{p} EGP</span>
                  </h5>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faStar} className="text-warning fs-6" />
                    <h5>
                      <span className="fs-6">{nm}</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <h4>
                  <span className="fs-5">{Categuary}</span>
                </h4>

                <div className="d-flex align-items-center gap-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-success" />
                  <h5>
                    <span className="fs-6">{h1}</span>
                  </h5>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-success" />
                  <h5>
                    <span className="fs-6">{sold}</span>
                  </h5>
                </div>

                <div className="d-flex align-items-baseline gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-success" />
                  <h5>
                    <span className="fs-6">{Gradions}</span>
                  </h5>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-start">
                <button className="btn btn-outline-secondary" onClick={handleAddToCart}>
                  {isAdded ? "Added" : "Add to Cart"}
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
