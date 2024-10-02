


// export default AnyPage;
// استيراد الحزم الضرورية
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import ScrollToTopButton from "../Components/ScrollButton/ScrollButton";
export default function AnyPage({ bascet }) {
  return (
    <>
      <Navbar bascet={bascet} />
      <Outlet></Outlet>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
