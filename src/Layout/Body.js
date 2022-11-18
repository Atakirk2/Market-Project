import Products from '../components/Products'
import FilterAndSort from '../components/FilterAndSort'
import Basket from '../components/Basket'
import classes from './Body.module.css'

function Body (){
    return(
        <div className={classes.container}>
            <FilterAndSort />
            <Products />
            <Basket />
        </div>
    )
}

export default Body;