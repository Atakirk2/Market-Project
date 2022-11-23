import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux';
import { GiShoppingBag } from "react-icons/gi";
function Header (){

    const basket = useSelector(state => state.basket)
    return (
        <div className={classes.container}>
        <img className={classes.logo} src={logo} />
        <div className={classes.basket}>
            <GiShoppingBag className={classes.bagIcon}/>
            <div className={classes.totalPrice}>₺ {basket.totalPrice.toFixed(2)}</div>
        </div>
        </div>
    )
}

export default Header;