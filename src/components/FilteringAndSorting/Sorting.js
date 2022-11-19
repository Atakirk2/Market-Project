import classes from "./Sorting.module.css";
import { useDispatch } from "react-redux";
import {
  lowToHigh,
  highToLow,
  newToOld,
  oldToNew,
} from "../../redux/itemSlice";

function Sorting() {
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <div className={classes.element}>
        <input
          type="radio"
          id="lowToHigh"
          name="priceSorting"
          value="lowToHigh"
          onChange={() => dispatch(lowToHigh())}
        />
        <label for="lowToHigh">Price low to high</label>
        <br />
      </div>

      <div className={classes.element}>
        <input
          type="radio"
          id="highToLow"
          name="priceSorting"
          value="highToLow"
          onChange={() => dispatch(highToLow())}
        />
        <label for="highToLow">Price high to low</label>
        <br />
      </div>

      <div className={classes.element}>
        <input
          type="radio"
          id="newToOld"
          name="priceSorting"
          value="newToOld"
          onChange={() => dispatch(newToOld())}
        />
        <label for="newToOld">New To Old</label>
        <br />
      </div>

      <div className={classes.element}>
        <input
          type="radio"
          id="oldToNew"
          name="priceSorting"
          value="oldToNew"
          onChange={() => dispatch(oldToNew())}
        />
        <label for="oldToNew">Old To New</label>
        <br />
      </div>
    </div>
  );
}
export default Sorting;
