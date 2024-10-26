import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const [shopItems, cart, setCart] = useOutletContext();

  const handleCartChange = (itemId, type) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.item.id === itemId
            ? {
                ...cartItem,
                count: type === "add" ? cartItem.count + 1 : cartItem.count - 1,
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.count > 0)
    );
  };

  return (
    <div className={styles.cartView}>
      <div className={styles.header}>
        <h2>Your Cart</h2>
        <h2>
          Total: $
          {Math.round(
            cart.reduce(
              (total, cartItem) => total + cartItem.item.price * cartItem.count,
              0
            ) * 100
          ) / 100}
        </h2>
      </div>

      <div className={styles.cartList}>
        {cart
          ? cart.map((cartItem) => {
              const { item } = cartItem;
              return (
                <div key={item.id} className={styles.cartDisplay}>
                  <img src={item.image} alt="" />
                  <div className={styles.title}>{item.title}</div>
                  <div>${item.price}</div>
                  <div className={styles.changeAmount}>
                    <button onClick={() => handleCartChange(item.id, "remove")}>
                      &lt;
                    </button>
                    <div>{cartItem.count}</div>
                    <button onClick={() => handleCartChange(item.id, "add")}>
                      &gt;
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
