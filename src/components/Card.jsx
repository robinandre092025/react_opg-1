export default function Card(props) {
  return (
    <>
      <li>
        <h3 id="tittel">{props.tittel}</h3>
        <p id="pris">Pris: {props.pris}</p>
        <p id="ingredienser">Ingredienser: {props.ingredienser}</p>
      </li>
    </>
  );
}
