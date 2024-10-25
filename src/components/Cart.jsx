import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const [shopItems, cart, setCart] = useOutletContext();

  console.log("Cart: ", cart);

  return (
    <div>
      {cart
        ? cart.map((cartItem) => {
            const { item } = cartItem;
            return (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <div>{item.title}</div>
                <div>
                  {item.price} Amount: {cartItem.count}
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
