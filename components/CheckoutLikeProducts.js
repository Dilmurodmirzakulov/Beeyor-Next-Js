import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/cartSlice"
import { productData } from "./productData"

export default function CheckoutLikeProducts() {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.itemsList)

  const mayLikeProducts = productData.map(item => {
    if (cartItems.length > 0) {
      const productIndex = cartItems.findIndex(x => x.id === item.id)
      if (cartItems[0].restorant === item.restorant) {
        return (
          <div className="checkout-product es-border-bottom es-ptb-20">
            <div className="d-flex">
              <img src="img/checkout.svg" alt="" />
              <div className="checkout-product-info">
                <h4 className="checkout-product-title">{item.title}</h4>
                <p className="checkout-product-desc">
                  {item.productDesc}
                </p>
              </div>
            </div>
            <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
              <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                {cartItems.find(x => x.id === item.id) ?
                <div className="d-flex align-items-center">
                  <button className="btn" onClick={() => {
                    dispatch(cartActions.removeFromCart({ id: item.id, quantity: 1 }))
                  }}>-</button>
                  <span>{cartItems[productIndex].quantity}</span>
                  <button className="btn" onClick={() => {item
                    dispatch(cartActions.addToCart({ id: item.id, quantity: 1, restorant: item.restorant }))
                  }}>+</button>
                </div>
                :
                <button onClick={() => {
                  dispatch(cartActions.addToCart({ id: item.id, quantity: 1, restorant: item.restorant }))
                }} className="btn w-100 es-add-to-cart d-flex align-items-center justify-content-center">
                  Добавить
                </button>}
              </div>
              <span>{item.price} сом</span>
            </div>
          </div>
        )
      }
    }
  })
  return (
    <>
      {mayLikeProducts}
    </>
  )
}