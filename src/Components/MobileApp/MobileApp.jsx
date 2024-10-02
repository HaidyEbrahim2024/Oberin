import "./mobileapp.scss";
import phone from "./phone.png";
import googleplay from "./googleplay.png";
import AppStore from "./R.png";
export default function MobileApp() {
  return (
    <>
      <section className=" MobileApp bg-white ">
        <div className="container d-flex align-items-center pb-3">
          <div className="col-6 pt-3 text">
            <h1 className="pb-3">Download Our Grocery Mobile App And Save Time, Money</h1>
            <p className="">
              Our grocery mobile app makes it easy to shop for groceries on the
              go.You can browse our selection of products, create a shopping
              list, and order groceries for pickup or delivery.
            </p>
            <div className="Apps d-flex col-12 gap-2">
              <img src={googleplay} className="img image" />
              <img src={AppStore} className="image" />
            </div>
          </div>
          <div className="  MobileApp col-6 d-flex align-items-center justify-content-center  ">
            <img src={phone} className="col-9" />
          </div>
        </div>
      </section>
    </>
  );
}
