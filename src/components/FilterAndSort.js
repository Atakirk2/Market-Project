import Brands from './FilteringAndSorting/Brands';
import Sorting from './FilteringAndSorting/Sorting';
import Tags from './FilteringAndSorting/Tags';
import classes from './FilterAndSort.module.css'
function FilterAndSort (){

    return(
        <div className={classes.container}>
            <Brands />
            <Sorting />
            <Tags />
        </div>
    )
    }
    
    
    
    export default FilterAndSort;