import { useDispatch, useSelector } from "react-redux";
import { searchBarActions } from "../store/searchBarSlice";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const dispatch = useDispatch()
  const message = useSelector(state => state.searchBar.message)
  return (
    <>
      <div className="search-bar-wrapper position-relative">
        <form className="es-search-container">
          <img src="img/ic-search.svg" alt="" />
          <input type="search" placeholder="Поиск ресторанов и блюд" onChange={(event) => dispatch(searchBarActions.showResults(event.target.value))} />
          <button className="es-search-btn">Найти</button>
        </form>
        {message.length > 3 ? <SearchResults /> : ''}
        
      </div>
      {message.length > 3 ? <div className="overlay"></div> : ''}
    </>
  )
}