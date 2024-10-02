import "./index.scss";
import Herosection from "../../Components/Herosection";
import Swiper from "../../Components/SWiper/Swiper";
import Freshfood from "../../Components/freshFood/Freshfood";
import Bestquality from "../../Components/bestQuality/Bestquality";
import MobileApp from "../../Components/MobileApp/MobileApp";
import Views from "../../Components/Views/Views";
import Services from "../../Components/Services/Services";
import Prouducts from "../../Components/Products/Prouducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Homepage({handelCount}) {
  return (
    <>
      <Herosection />
      <Swiper />
      <Prouducts handelCount={handelCount}/>
      <Freshfood />
      <Bestquality />
      <Views />
      <MobileApp />
      <Services />
    </>
  );
}
