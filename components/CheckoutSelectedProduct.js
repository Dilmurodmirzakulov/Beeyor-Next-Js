import { createAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/cartSlice";
import { productData } from "./productData"

export default function CheckoutSelectedProduct() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.itemsList)
  const checkoutProducts = cartItems.map(x => {
    const productIndex = productData.findIndex(product => product.id === x.id);
    return (
      <tr>
        <td className="checkout-product d-flex ">
          <img src={productData[productIndex].image} className="checkout-product-img" alt="" />
          <div className="checkout-product-info">
            <h4 className="checkout-product-title">{productData[productIndex].title}</h4>
            <p className="checkout-product-desc">
              {productData[productIndex].productDesc}
            </p>
          </div>
        </td>
        <td className="es-font-14 es-font-medium es-w-max-content">{productData[productIndex].price} сом</td>
        <td>
          <div className="chackout-product-qty d-flex align-items-center justify-content-center">
            <button className="es-plus btn" onClick={() => {
              dispatch(cartActions.removeFromCart({ id: x.id, quantity: 1 }))
            }}>-</button>
            <span>{x.quantity}</span>
            <button className="es-minus btn" onClick={() => {
              dispatch(cartActions.addToCart({ id: x.id, quantity: 1, restorant: x.restorant }))
            }}>+</button>
          </div>
        </td>
        <td className="es-font-14 es-font-medium">{x.quantity * productData[productIndex].price} сом</td>
        <td className="text-center">
          <button className="btn" onClick={() => {
            dispatch(cartActions.removeItem({ id: x.id }))
          }}>
            <img src="img/exit-black.svg" alt="" />
          </button>
        </td>
      </tr>
    )
  })
  return (
    <>
      {checkoutProducts}
    </>
  )
}