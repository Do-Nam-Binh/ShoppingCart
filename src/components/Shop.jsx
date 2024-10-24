import { useOutletContext } from "react-router-dom";
import ShopItem from "./ShopItem";
import styles from "../styles/Shop.module.css";
import { useEffect, useState } from "react";

export default function Shop() {
  const [shopItems, cart, setCart] = useOutletContext();
  const [itemCategory, setItemCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(shopItems);

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setItemCategory(e.target.innerText);
  };

  useEffect(() => {
    itemCategory === "All"
      ? setFilteredItems(shopItems)
      : setFilteredItems(
          shopItems.filter(
            (item) => item.category === itemCategory.toLowerCase()
          )
        );
  }, [itemCategory, shopItems]);

  return (
    <div className={styles.shop}>
      <div className={styles.categories}>
        <h2>Categories</h2>
        <div>
          <button
            onClick={handleCategoryChange}
            className={itemCategory === "All" ? styles.active : ""}
          >
            All
          </button>
          <button
            onClick={handleCategoryChange}
            className={itemCategory === "Men's Clothing" ? styles.active : ""}
          >
            Men's Clothing
          </button>
          <button
            onClick={handleCategoryChange}
            className={itemCategory === "Women's Clothing" ? styles.active : ""}
          >
            Women's Clothing
          </button>
          <button
            onClick={handleCategoryChange}
            className={itemCategory === "Jewelery" ? styles.active : ""}
          >
            Jewelery
          </button>
          <button
            onClick={handleCategoryChange}
            className={itemCategory === "Electronics" ? styles.active : ""}
          >
            Electronics
          </button>
        </div>
      </div>

      <div className={styles.itemList}>
        {filteredItems.map((item) => {
          return (
            <ShopItem key={item.id} item={item} cart={cart} setCart={setCart} />
          );
        })}
      </div>
    </div>
  );
}
