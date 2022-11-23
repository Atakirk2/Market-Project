import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCompanies } from "../../redux/companySlice";
import classes from './Brands.module.css'
import { searchFilter, checkCompany, uncheckCompany } from "../../redux/companySlice";

function Brands() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  function searchToggle(e){
    dispatch(searchFilter(e.target.value))
  }

  function toggleCheck (e) {
    if(e.target.checked){
        dispatch(checkCompany(e.target.value))
    }
    else{
        dispatch(uncheckCompany(e.target.value))
    }
  }

  return (
    <div className={classes.container}>
      <p>Brands</p>
      <div className={classes.brands}>
      <input className={classes.searchbar} onChange={searchToggle} type="text" placeholder="Search brand" />
      {companies.filteredCompanies.map((company) => (
        <label key={company.account} className={classes.brandLabel}>
          <span className={classes.checkmark}></span>
        <input type="checkbox" value={company.slug} onChange={toggleCheck} className={classes.checkboxStyle}/>
        {company.name}
      </label>
      ))}
      </div>
    </div>
  );
}
export default Brands;
