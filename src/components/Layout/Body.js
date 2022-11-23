import Products from '../Products'
import FilterAndSort from '../FilterAndSort'
import Basket from '../Basket/Basket'
import classes from './Body.module.css'
import { useState } from 'react'

function Body (){
    const [checkedTags, setCheckedTags] = useState([]);
    return(
        <div className={classes.container}>
            <FilterAndSort setCheckedTags={setCheckedTags} />
            <Products checkedTags = {checkedTags}/>
            <Basket />
        </div>
    )
}

export default Body;