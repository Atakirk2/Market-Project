import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchItems} from '../redux/items'

function Products (){
    const dispatch = useDispatch();
    const items = useSelector((state)=>state.items);
    useEffect(()=>{
        dispatch(fetchItems())
        console.log(items)
    }, []);




return (
    <div>
        {console.log(items)}
        {items.loading && <div>Loading...</div>}
        {!items.loading && items.error ? <div>Error:{items.error} </div> : null}
        {!items.loading && items.items.length ? (
            <ul>
            {items.items.map((item) => (
                <li key={item.added}>{item.name}</li>))}
            </ul>
        ):null}
    </div>
)
}



export default Products;