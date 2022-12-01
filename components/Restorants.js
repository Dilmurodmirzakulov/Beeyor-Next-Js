import { useDispatch, useSelector } from "react-redux"
import { restorantsData } from "./restorantsData"
import { categoryActions } from "../store/categorySlice";

export default function Restorants({ }) {
  const dispatch = useDispatch()
  const selectedCategory = useSelector(state => state.category.categoryName)
  const products = restorantsData.map(x => {
    if (selectedCategory === "all") {
      return (
        <>
          <div className="es-product col-lg-3" onClick={() => dispatch(categoryActions.restorantSelect(x.name))}>
            <div className="es-product-wrapper">
              <div className="es-product-photo">
                <img className="img-fluid" style={{ borderRadius: "20px" }} src={x.mainPageImage} alt={x.name} />
                <div className="es-ellips-bloks">
                  <div className="es-ellips-block es-ellips-block-transparent">
                    <div className="es-ellips-block"></div>
                  </div>
                  <div className="es-ellips-block es-ellips-block-gray">{x.deliveryTime}</div>
                </div>
              </div>
              <div className="es-product-info d-block">
                <h5 className="es-product-title">{x.name}</h5>
                <div className="d-flex justify-content-between">
                  <p className="es-product-category">{x.category}</p>
                  <div className="d-flex align-items-center">
                    <img src="img/ic-star.svg" alt="" />&nbsp;
                    <span>{x.rate} ({x.numberOfRates})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    } else if (selectedCategory === x.category) {
      return (
        <>
          <div className="es-product col-lg-3" onClick={() => dispatch(categoryActions.restorantSelect(x.name))}>
            <div className="es-product-wrapper">
              <div className="es-product-photo">
                <img className="img-fluid" style={{ borderRadius: "20px" }} src={x.mainPageImage} alt={x.name} />
                <div className="es-ellips-bloks">
                  <div className="es-ellips-block es-ellips-block-transparent">
                    <div className="es-ellips-block"></div>
                  </div>
                  <div className="es-ellips-block es-ellips-block-gray">{x.deliveryTime}</div>
                </div>
              </div>
              <div className="es-product-info d-block">
                <h5 className="es-product-title">{x.name}</h5>
                <div className="d-flex justify-content-between">
                  <p className="es-product-category">{x.category}</p>
                  <div className="d-flex align-items-center">
                    <img src="img/ic-star.svg" alt="" />&nbsp;
                    <span>{x.rate} ({x.numberOfRates})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  })


  return (
    <>
      <section className="products-list-section">
        <div className="container">
          <h2 className="es-section-header es-header-mt">Рестораны</h2>
          <div className="product-list row">
            {products}
          </div>
        </div>
      </section>
    </>
  )
}