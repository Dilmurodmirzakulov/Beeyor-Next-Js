import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../store/categorySlice';
import { restorantsData } from "./restorantsData"

export default function RestorantsCategories() {
  const dispatch = useDispatch();
  const activeBtn = {
    backgroundColor: "#FFCA00"
  }
  const selectedCategory = useSelector(state => state.category.categoryName)
  const getCategoryName = (y) => {
    dispatch(categoryActions.categorySelect(y))
  }
  const categoriesArr = [];
  restorantsData.map(x => !categoriesArr.find(y => y === x.category) ? categoriesArr.push(x.category) : '')
  const category = categoriesArr.map(x => {
    const btnBg = selectedCategory === x ? activeBtn : {}

    return (
      <li className="es-category-nav-item item-main-bg d-flex align-items-center justify-content-center" selectedCategory style={btnBg}>
        <button onClick={() => getCategoryName(x)} className="btn">{x}</button>
      </li>
    )
  })
  const dropdownCategories = categoriesArr.length > 6 ? categoriesArr.slice(6).map(x => <Dropdown.Item onClick={() => getCategoryName(x)} className="dropdown-item" href="#/action-1">{x}</Dropdown.Item>) : ''

  return (
    <section>
      <div className="container category-nav-container">
        <h2 className="es-section-header">Категории</h2>
        <div className="es-category-filter-nav">
          <ul className="es-category-nav-list d-flex list-unstyled">
            <li className="es-category-nav-item active d-flex align-items-center justify-content-center">
              <button className="btn" onClick={() => getCategoryName("all")}>Все</button>
            </li>
            {category.slice(0, 6)}
            <li className="es-category-nav-item es-category-show-all item-main-bg">
              {
                category.length > 6 &&
                <Dropdown>
                  <Dropdown.Toggle className="dropdown-category-btn" id="dropdownMenuButton">
                    Ешё
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="es-dropdown-menu-mt">
                    {dropdownCategories}
                  </Dropdown.Menu>
                </Dropdown>
              }
            </li>
            <span className="es-mob-category">
              <li className="es-category-nav-item">
                <button className="btn">Арабская</button>
              </li>
              <li className="es-category-nav-item">
                <button className="btn">Грузинская</button>
              </li>
              <li className="es-category-nav-item">
                <button className="btn">Индийская</button>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </section>
  )
}