import { Link } from "react-router-dom";
import styles from "../styles/HeaderBar.module.css";

export default function HeaderBar() {
  return (
    <>
      <div className={styles.container}>
        <h1>Buyee</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </div>
      </div>
    </>
  );
}
