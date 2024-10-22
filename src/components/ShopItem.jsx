import styles from "../styles/ShopItem.module.css";

export default function ShopItem({ image, title, price }) {
  return (
    <div className={styles.itemDisplay}>
      <img src={image} alt="" />
      <div>{title}</div>
      <div> {price}</div>
    </div>
  );
}
