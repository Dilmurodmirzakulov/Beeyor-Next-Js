import { useDispatch, useSelector } from "react-redux"
import { restorantsData } from "./restorantsData"
import { productData } from "./productData"
import { searchBarActions } from "../store/searchBarSlice"

export default function SearchResults({ remove }) {
  const dispatch = useDispatch()
  const resultsStatus = useSelector(state => state.searchBar.resultsStatus)
  const searchedText = useSelector(state => state.searchBar.searchedText)

  const restorantsSearchResult = restorantsData.filter(item => {
    if (item.fullDesc.toLowerCase().includes(searchedText) || item.name.toLowerCase().includes(searchedText) || item.shortDesc.toLowerCase().includes(searchedText)) {
      return item
    }
  })

  const productsSearchResult = productData.filter(item => {
    if (item.title.toLowerCase().includes(searchedText) || item.category.toLowerCase().includes(searchedText) || item.restorantMenuCategory.toLowerCase().includes(searchedText)) {
      return item
    }
  })

  if (productsSearchResult.length < 1 && restorantsSearchResult.length < 1) {
    dispatch(searchBarActions.nothing())
  } else {
    dispatch(searchBarActions.showResult())
  }

  return (
    <div style={{ display: remove }}>
      {
        resultsStatus ?
          <div className="saerch-result position-absolute">
            {restorantsSearchResult.length > 0 && <div className="restorants-result-container">
              <h3 className="restorants-result-header">Заведения</h3>
              <div className="restorants-result">
                {
                  restorantsSearchResult.map(x => {
                    return (
                      <button className="btn restorant-result d-flex align-items-center">
                        <div className="search-restorant-logo d-flex align-items-center justify-content-center">
                          <img src={x.logo} alt="Restorant logo" />
                        </div>
                        <h4 className="es-restorant-name mb-0">{x.name}</h4>
                      </button>
                    )
                  })
                }
              </div>
            </div>}
            {productsSearchResult.length > 0 && <div className="restorants-result-container">
              <h3 className="restorants-result-header products-result-header">Товары</h3>
              <div className="restorants-result">
                {productsSearchResult.map(x => {
                  return (<button className="btn restorant-result d-flex align-items-center">
                    <div className="search-restorant-logo d-flex align-items-center justify-content-center">
                      <img src={x.image} className="search-product-img" alt="" />
                    </div>
                    <h4 className="es-restorant-name mb-0">{x.title}</h4>
                  </button>)
                })}
              </div>
            </div>}
          </div> :
          <div className="nothing-found position-absolute saerch-result d-flex flex-column align-items-center justify-content-center">
            <img src="img/no-search-result.svg" alt="" />
            <h4>Ничего не найдено!</h4>
            <p>Попробуйте еще раз</p>
          </div>
      }
    </div>
  )
}