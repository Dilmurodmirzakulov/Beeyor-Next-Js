import { useSelector } from "react-redux"
import { productData } from "./productData"

export default function FavouriteProduct() {
  const favouritesList = useSelector(state => state.favourite.favouritesList)
  const favouriteProducts = productData.map(item => {
    if (favouritesList.find(id => id === item.id)) {
      return (
        <div className="favourite-product">
          <div className="favourite-img position-relative">
            <img className="w-100" src="img/favourite-product.svg" alt="" />
            <button className="es-liked-img position-absolute">
              <img src="img/heart-full.svg" alt="" />
            </button>
          </div>
          <div className="favourite-product-info">
            <div className="favourite-product-title">
              {item.title}
            </div>
            <div className="favourite-product-price">
              {item.price}
            </div>
            <div className="favourite-product-qty d-flex align-items-center justify-content-center">
              <button className="es-plus btn">+</button>
              <span>1</span>
              <button className="es-minus btn">-</button>
            </div>
          </div>
        </div>
      )
    }
  })
  return (
    <div className="favourite-product-wrapper col-lg-2 col-md-4 col-6">
      {favouriteProducts}
    </div>
  )
}