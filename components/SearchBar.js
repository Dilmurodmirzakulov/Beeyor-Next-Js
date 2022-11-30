import { useDispatch, useSelector } from "react-redux";
import { searchBarActions } from "../store/searchBarSlice";
import SearchResults from "./SearchResults";
import { useState, useMemo, useEffect } from "react";
import debouce from "lodash.debounce";


export default function SearchBar() {
  const dispatch = useDispatch()
  const [remove, setRemove] = useState("none")
  const searchedText = useSelector(state => state.searchBar.searchedText)

  const handleChange = (e) => {
    dispatch(searchBarActions.showResults(e.target.value))
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 800)
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <div className="search-bar-wrapper position-relative">
        <form className="es-search-container">
          <img src="img/ic-search.svg" alt="" />
          <input className="main-input-field" type="search" placeholder="Поиск ресторанов и блюд" onFocus={() => setRemove("block")} onChange={debouncedResults} />
          <button className="es-search-btn">Найти</button>
        </form>
        {searchedText.length >= 3 ? <SearchResults key="search-results" remove={remove} /> : ''}

      </div>
      {searchedText.length >= 3 ? <div className="overlay" onClick={() => setRemove("none")} style={{ display: remove }}></div> : ''}
    </>
  )
}