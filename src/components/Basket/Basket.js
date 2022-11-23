import BasketItem from './BasketItem'
import { useSelector } from 'react-redux';
import classes from './Basket.module.css'

function Basket (){

    const basket = useSelector(state => state.basket)
    const totalPrice = useSelector(state => state.basket.totalPrice)
    return(
        <div className={classes.container}>
        <div className={classes.basketItemsContainer}>
            {basket.itemList.map(item=>{
                return (<>
                <BasketItem key={item.added} item={item} />
                </>)
            })}
        </div>
        <hr />
        <div className={classes.totalPrice}>₺ {totalPrice.toFixed(2)}</div>
        </div>
    )
    }
    export default Basket;