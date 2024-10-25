import { useState } from "react";
import styles from "../styles/ShopItem.module.css";

export default function ShopItem({ item, cart, setCart }) {
  const [itemAmount, setItemAmount] = useState(1);

  const handleAddItem = () => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart by comparing item.id
      const existingItem = prevCart.find(
        (cartItem) => cartItem.item.id === item.id
      );

      if (existingItem) {
        // If the item exists, increment the count
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, count: cartItem.count + itemAmount }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart with a count of 1
        return [...prevCart, { item: item, count: itemAmount }];
      }
    });
    setItemAmount(1);
  };

  return (
    <div className={styles.itemDisplay}>
      <div className={styles.itemDesc}>
        <img src={item.image} alt="" />
        <div className={styles.title}>{item.title}</div>
        <div> ${item.price}</div>
      </div>
      <div className={styles.addItem}>
        <div className={styles.amount}>
          <button
            onClick={() =>
              itemAmount === 1 ? "" : setItemAmount(itemAmount - 1)
            }
          >
            &lt;
          </button>
          <div>{itemAmount}</div>
          <button onClick={() => setItemAmount(itemAmount + 1)}>&gt;</button>
        </div>

        <button className={styles.addItemButton} onClick={handleAddItem}>
          +
        </button>
      </div>
    </div>
  );
}
