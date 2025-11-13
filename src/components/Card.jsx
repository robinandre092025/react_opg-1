import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <li>
      <h3>{props.tittel}</h3>
      <p>Pris: {props.pris}</p>
      <p className={styles.ingredienser}>Ingredienser: {props.ingredienser}</p>
    </li>
  );
}
