import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/cartSlice";
import { productData } from "./productData"

export default function CheckoutMobProducts() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.itemsList)
  const checkoutProducts = cartItems.map(x => {
    const productIndex = productData.findIndex(product => product.id === x.id);
    return (
      <div className="mob-checkout-product">
        <div className="mob-checkout-product-img">
          <img src={productData[productIndex].image} className="checkout-product-img" alt="" />
          <button className="btn" onClick={() => {
            dispatch(cartActions.removeItem({ id: x.id }))
          }}>
            <img src="img/exit-black.svg" alt="" />
          </button>
        </div>
        <div className="checkout-product-info">
          <h4 className="checkout-product-title mob-checkout-product-title">{productData[productIndex].title}</h4>
          <p className="checkout-product-desc mob-checkout-product-desc">
            {productData[productIndex].productDesc}
          </p>
        </div>
        <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
          <p className="mob-property-name">Цена</p>
          <p className="mob-value-name">{productData[productIndex].price}</p>
        </div>
        <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
          <p className="mob-property-name">Количество</p>
          <div className="mob-value-name">
            <div className="chackout-product-qty d-flex align-items-center justify-content-center">
              <button className="es-plus btn" onClick={() => {
                dispatch(cartActions.removeFromCart({ id: x.id, quantity: 1 }))
              }}>-</button>
              <span>{x.quantity}</span>
              <button className="es-minus btn" onClick={() => {
                dispatch(cartActions.addToCart({ id: x.id, quantity: 1 , restorant: x.restorant}))
              }}>+</button>
            </div>
          </div>
        </div>
        <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
          <p className="mob-property-name">Итого</p>
          <p className="mob-value-name">{x.quantity * productData[productIndex].price}</p>
        </div>
      </div>
    )
  })
  return (
    <>
      {checkoutProducts}
    </>
  )
}