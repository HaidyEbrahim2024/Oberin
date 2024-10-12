import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import Page404 from "./Pages/Page404";
import BreakFastPage from "./Pages/BreakFastPage";
import Beans from "./Pages/Meals/Beans";
import LunchPage from "./Pages/LunchPage";
import DinnerPage from "./Pages/DinnerPage";
import FruitPage from "./Pages/FruitPage";
import ShoppingCard from "./Pages/ShoppingCard";
import AllProduct from "./Pages/AllProduct";
import CatAll from "./Pages/CatAll";
import MainLayout from "./MainLayout/MainLayout";
import Register from "./Pages/LoginPage/Register";
import toast from "react-hot-toast";
import CheckOut from "./Pages/CheckOut";
import Final from "./Pages/Final"
export default function App() {
  const [bascet, setBascet] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cards")) || [];
    setBascet(items);
  }, []);

  const handelCount = (card) => {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    let existingCardIndex = cards.findIndex((item) => item.id === card.id);
    // console.log(existingCardIndex);
    if (existingCardIndex !== -1) {
      cards[existingCardIndex].count += 1;
    } else {
      card.count = 1;
      cards.push(card);
    }
    //bascet update
    setBascet(cards);
    localStorage.setItem("cards", JSON.stringify(cards));
    toast.success("Item added to basket right.", {
      position: "top-right",
    });
  };
  const handleDeleteAllItems = () => {
    localStorage.removeItem("cards");
    setBascet([]);
  };

  const handleDeleteItem = () => {
    //New matrix
    const updatedBascet = bascet.filter((item) => item.name !== card.name);
    setBascet(updatedBascet);
    localStorage.setItem("cards", JSON.stringify(updatedBascet));
  };

  return (
    <div className="col-12 App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout bascet={bascet.length} />}>
            <Route index element={<Homepage handelCount={handelCount} />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="CatAll" element={<CatAll />} />
            <Route path="Final" element={<Final />} />
            <Route
              path="breakfast"
              element={<BreakFastPage handelCount={handelCount}  />}
            />
            <Route path="beans" element={<Beans />} />
            <Route
              path="lunch"
              element={<LunchPage handelCount={handelCount}  />}
            />
            <Route
              path="dinner"
              element={<DinnerPage handelCount={handelCount} />}
            />
            <Route
              path="fruit"
              element={<FruitPage handelCount={handelCount} />}
            />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="allpro"
              element={<AllProduct handelCount={handelCount}  />}
            />
            <Route
              path="shopping"
              element={
                <ShoppingCard
                  bascet={bascet}
                  handleDeleteAllItems={handleDeleteAllItems}
                  handleDeleteItem={handleDeleteItem}
                />
              }
            />
            <Route path="CheckOut" element={<CheckOut setBascet={setBascet} />} />

            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
