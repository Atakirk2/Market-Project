import classes from './BasketItem.module.css'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, calculateTotalPrice } from '../../redux/basketSlice';
import { useEffect } from 'react';

function BasketItem(props){
    const item = props.item;
    const dispatch = useDispatch();
    function incrementItem(){
        console.log(item)
        dispatch(addItem({name:item.name,added:item.added,price:item.price}))
    }
    function itemDelete(){
        dispatch(deleteItem({name:item.name,added:item.added,price:item.price}))
    }
    useEffect(()=>{
        dispatch(calculateTotalPrice());
        return ()=>{
            dispatch(calculateTotalPrice());
        }
    },[item.quantity])
    return(
        <div className={classes.container}>
            <div className={classes.leftHalf}>
                <p className={classes.itemName}>{item.name}</p>
                <p className={classes.itemPrice}>₺{item.price}</p>
            </div>
            <div className={classes.rightHalf}>
                <div onClick={itemDelete} className={classes.plusMinus}><AiOutlineMinus /></div>
                <div className={classes.itemQuantity}>{item.quantity}</div>
                <div onClick={incrementItem} className={classes.plusMinus}><AiOutlinePlus /></div>
            </div>
        </div>
    )
}


export default BasketItem