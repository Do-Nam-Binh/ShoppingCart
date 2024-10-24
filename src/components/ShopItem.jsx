import styles from "../styles/ShopItem.module.css";

export default function ShopItem({ item, cart, setCart }) {
  const handleAddItem = () => {
    setCart([...cart, item]);
    // console.log(item);
  };

  return (
    <div className={styles.itemDisplay}>
      <img src={item.image} alt="" />
      <div className={styles.title}>{item.title}</div>
      <div> ${item.price}</div>
      <button className={styles.addItemButton} onClick={handleAddItem}>
        +
      </button>
    </div>
  );
}
