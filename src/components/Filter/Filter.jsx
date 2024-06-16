import { changeFilter } from "../../redux/filters/slice.js";
import { selectNameFilter } from "../../redux/filters/selectors.js";
import { useSelector, useDispatch } from "react-redux";
import css from "./Filter.module.css";

export default function Filter() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(changeFilter(e.target.value.trim()));

  return (
    <div className={css.searchBox}>
      <label htmlFor={filter}>Find contacts by name</label>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={handleFilter}
        id={filter}
      />
    </div>
  );
}
