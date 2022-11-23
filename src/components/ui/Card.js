import classes from "./Card.module.css";
import { useDispatch} from "react-redux";
import { addItem } from "../../redux/basketSlice";
function Card(props) {
  const dispatch = useDispatch();
  function addProduct() {
    dispatch(
      addItem({ name: props.name, price: props.price, added: props.added })
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.imgDiv}>
      <img
        className={classes.coverImg}
        src="https://i.pinimg.com/474x/ce/7e/ab/ce7eab54d05139e5ee2962f3286a896f.jpg"
      />
      </div>
      <h4>₺ {props.price}</h4>
      <h6 className={classes.itemName}> {props.name}</h6>
      <button onClick={addProduct}>Add</button>
    </div>
  );
}
export default Card;
