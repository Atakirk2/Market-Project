import Brands from './FilteringAndSorting/Brands';
import Sorting from './FilteringAndSorting/Sorting';
import Tags from './FilteringAndSorting/Tags';
import classes from './FilterAndSort.module.css'
function FilterAndSort (props){

    return(
        <div className={classes.container}>
            <Sorting />
            <Brands />
            <Tags setCheckedTags={props.setCheckedTags} />
        </div>
    )
    }
    export default FilterAndSort;