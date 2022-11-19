import classes from "./Card.module.css";

function Card(props) {
  return (
    <div>
      <img
        className={classes.coverImg}
        src="https://cdna.artstation.com/p/assets/images/images/014/696/646/large/kate-draconi-king-lich-2.jpg?1545067610"
      />
      <h4>₺ {props.price}</h4>
      <h4> {props.name}</h4>
      <button>Add</button>
    </div>
  );
}
export default Card;
