import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Tags.module.css";

function Tags(props) {
  const [tagsArray, setTagsArray] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const items = useSelector((state) => state.items);
  const setCheckedTags = props.setCheckedTags
  function testFetch() {
    for (let i = 0; i < items.items.length; i++) {
      setTagsArray((prev) => [...prev, ...items.items[i].tags]);
    }
    setTagsArray((prev) =>
      prev.filter((item, index) => prev.indexOf(item) === index)
    );
  }
  useEffect(() => {
    testFetch();
  }, [items]);
  useEffect(() => {
    setFilteredTags([...tagsArray]);
  }, [tagsArray]);

  function handleSearch(e) {
    setFilteredTags([...tagsArray]);
    setFilteredTags((prev) =>
      prev.filter((tag) =>
        tag.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }
  function handleChange(e) {
    if(e.target.checked){
      setCheckedTags(prev => [...prev,e.target.value])
    }
    else{
      setCheckedTags(prev => prev.filter(tag=>tag !== e.target.value))
    }
  }
  return (
    <div className={classes.container}>
      <p>Tags</p>
      <div className={classes.tags}>
      <input className={classes.searchbar} onChange={handleSearch} type="text" placeholder="Search tag" />
      {filteredTags.map((tag) => (
        <label className={classes.brandLabel} key={tag}>
          <input type="checkbox" value={tag} onChange={handleChange} className={classes.checkboxStyle} />
          {tag}
        </label>
      ))}
      </div>
    </div>
  );
}
export default Tags;
