import Card from "./Card";

export default function List(props) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {props.items.map((item) => (
        <Card
          key={item.id}
          tittel={item.tittel}
          pris={item.pris}
          ingredienser={item.ingredienser}
        />
      ))}
    </ul>
  );
}
