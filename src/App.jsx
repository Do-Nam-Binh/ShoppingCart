import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "./components/HeaderBar";

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setShopItems(json);
        console.log(json);
      });
  }, []);
  return (
    <>
      <HeaderBar />

      <div className="content">
        <Outlet context={[shopItems, cart, setCart]} />
      </div>
    </>
  );
}

export default App;
