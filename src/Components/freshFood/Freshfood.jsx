import "./freshfood.scss";
import freshFood from "./freshFood.webp"
export default function Freshfood() {
  return (
    <>
      <div className="container col-12 Freshfood ">
        <div className="col-6 important_healthyfood">
          <h2>Important to eat Healthy Food</h2>
          <p>
            Eating healthy foods provides health benefits — people who eat more fruits
            and vegetables as part of an overall healthy diet are likely to have
            a reduced risk of some chronic diseases. Fruits provide nutrients
            vital for health and maintenance of your body.
          </p>
          <p>
          healthy foods  are sources of many essential nutrients that are
            underconsumed, including potassium, dietary fiber, vitamin C, and
            folate (folic acid).
          </p>
          <p>
            Most  healthy foods  are naturally low in fat, sodium, and calories. None
            have cholesterol.
          </p>
        </div>
        <div className="image col-6">
            <img  src={freshFood} className="col-12 p-3"/>
        </div>
      </div>
    </>
  );
}
