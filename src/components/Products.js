import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/itemSlice";
import classes from "./Products.module.css";
import Card from './ui/Card'

function Products(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const companies = useSelector((state) => state.companies);
  const checkedTags = props.checkedTags;

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  let ItemList = items.items.filter((item) => {
    if(companies.checkedCompanies.length === 0) return true;
    for (let i = 0; i < companies.filteredCompanies.length; i++) {
      if (item.manufacturer === companies.checkedCompanies[i]) {
        return true;
      }
    }
    return false;
  });

  ItemList = ItemList.filter(item => {
    if(checkedTags.length === 0) return true;
    for (let i = 0; i<checkedTags.length;i++){
      if(item.tags.includes(checkedTags[i])){
        return true;
      }
    }
  })
  
  return (
    <div className={classes.container}>
      {items.loading && <div>Loading...</div>}
      {!items.loading && items.error ? <div>Error:{items.error} </div> : null}
      {!items.loading && items.items.length ? (
        <ul>
          {ItemList.map((item) => (
            <li key={item.added}><Card name={item.name} price = {item.price} /></li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Products;
