import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import styles from "../styles/Home.module.css";
import Shop from "./Shop";
import Cart from "./Cart";
import HeaderBar from "./HeaderBar";

export default function Home() {
  const { name } = useParams();
  const [shopItems, setShopItems] = useState([]);

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

      <div className={styles.content}>
        <Outlet context={[shopItems, setShopItems]} />
      </div>
    </>
  );
}
