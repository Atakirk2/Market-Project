import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/itemSlice";
import classes from "./Products.module.css";
import Card from "./ui/Card";
import ReactPaginate from "react-paginate";

function Products(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const companies = useSelector((state) => state.companies);
  const checkedTags = props.checkedTags;
  const itemsPerPage = 16;
  const [isShirtActive, setIsShirtActive] = useState(true);
  const [isMugActive, setIsMugActive] = useState(true);


  function handleMugChange(){
    setIsMugActive(prev => !prev)
  }
  function handleShirtChange(){
    setIsShirtActive(prev => !prev)
  }
  

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  let ItemList = items.items.filter((item) => {
    if (companies.checkedCompanies.length === 0) return true;
    for (let i = 0; i < companies.filteredCompanies.length; i++) {
      if (item.manufacturer === companies.checkedCompanies[i]) {
        return true;
      }
    }
    return false;
  });

  ItemList = ItemList.filter((item) => {
    if (checkedTags.length === 0) return true;
    for (let i = 0; i < checkedTags.length; i++) {
      if (item.tags.includes(checkedTags[i])) {
        return true;
      }
    }
  });

  ItemList = ItemList.filter(item => {
    if(isMugActive && isShirtActive) return true;
    else if(!isMugActive && isShirtActive){
      return item.itemType === "shirt"
    }
    else if(isMugActive && !isShirtActive){
      return item.itemType === "mug"
    }
    else return false;
  })
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = ItemList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(ItemList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={classes.container}>
      <p>Products</p>
      <div className={classes.itemFilter}>
      <div onClick={handleMugChange} className={isMugActive ? classes.filterActive : classes.filterPassive}>mug</div>
      <div onClick={handleShirtChange} className={isShirtActive ? classes.filterActive : classes.filterPassive}>shirt</div>
      </div>
     
      {items.loading && <div>Loading...</div>}
      {!items.loading && items.error ? <div>Error:{items.error} </div> : null}
      {!items.loading && items.items.length ? (
        <div className={classes.itemGrid}>
          {currentItems.map((item) => (
            <div key={item.added}>
              <Card name={item.name} price={item.price} added={item.added} />
            </div>
          ))}
        </div>
      ) : null}
    <div className={classes.paginationDiv}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<Prev"
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageLinkClassName={classes.pageNum}
        previousLinkClassName={classes.pageNum}
        nextLinkClassName={classes.pageNum}
        activeLinkClassName={classes.active}
      />
      </div>
    </div>
  );
}

export default Products;
