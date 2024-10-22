import { useOutletContext } from "react-router-dom";
import ShopItem from "./ShopItem";
import styles from "../styles/Shop.module.css";
import { useEffect, useState } from "react";

export default function Shop() {
  const [shopItems, setShopItems] = useOutletContext();
  const [itemCategory, setItemCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(shopItems);

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log(e);

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
  }, [itemCategory]);

  return (
    <div className={styles.shop}>
      <div className={styles.categories}>
        <h2>Categories</h2>
        <div>
          <button onClick={handleCategoryChange}>All</button>
          <button onClick={handleCategoryChange}>Men's Clothing</button>
          <button onClick={handleCategoryChange}>Women's Clothing</button>
          <button onClick={handleCategoryChange}>Jewelery</button>
          <button onClick={handleCategoryChange}>Electronics</button>
        </div>
      </div>

      <div className={styles.itemList}>
        {filteredItems.map((item) => {
          return (
            <ShopItem
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
