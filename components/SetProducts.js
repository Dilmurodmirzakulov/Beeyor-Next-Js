import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { productData } from "./productData"

export default function SetProducts() {
  const products = productData.map(product => {
    const itemsList = useSelector(state => state.cart.itemsList)
    const productIndex = itemsList.findIndex(item => item.id === product.id)
    if (product.category === "Сеты") {
      const dispatch = useDispatch();
      return (
        <div className="product-wrapper" key={'sets' + product.id}>
          <div className="inner-product-wrapper">
            <div className="favourite-img position-relative">
              <img className="img-fluid w-100" src={product.image} alt="" />
              <button className="es-liked-img position-absolute">
                <img src="img/empty-heart.svg" alt="" />
              </button>
            </div>
            <div className="favourite-product-info">
              <div className="favourite-product-title es-font-medium">
                {product.title}
              </div>
              <div className="favourite-product-price">
                {product.price} сом
              </div>
              {itemsList.find(item => item.id === product.id) ?
                <div className="product-qty-btns d-flex align-items-center">
                  <button className="btn" onClick={(e) => {
                dispatch(cartActions.removeFromCart({ id: product.id, quantity: 1 }))
              }}>-</button>
                  <span>{itemsList[productIndex].quantity}</span>
                  <button className="btn" onClick={(e) => {
                    dispatch(cartActions.addToCart({ id: product.id, quantity: 1 }))
                  }}>+</button>
                </div>
                :
                <button onClick={(e) => {
                  dispatch(cartActions.addToCart({ id: product.id, quantity: 1 }))
                }} className="favourite-product-qty btn w-100 es-add-to-cart d-flex align-items-center justify-content-center">
                  Добавить
                </button>}
            </div>
          </div>
        </div>
      )
    }
  })
  return (
    <>
      <div className="restourant-menu w-100 d-flex">
        {products}
      </div>
    </>
  )
}