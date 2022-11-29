import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/cartSlice";
import { productData } from "./productData"

export default function CartProduct() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.itemsList)
  let cartProducts = cart.map(item => {
    return (
      <div className="aside-product d-flex align-items-center justify-content-between" key={'cart-product'+item.id}>
        <div className="cart-product-img">
          <img src={productData[item.id].image} alt="" />
        </div>
        <div className="aside-product-info">
          <h4 className="es-font-14 es-font-medium">{productData[item.id].title}</h4>
          <p className="mb-0 es-font-medium">{productData[item.id].price} сом</p>
        </div>
        <div className="aside-qty-btns d-flex align-items-center">
          <button className="btn" onClick={() => {dispatch(cartActions.removeFromCart(item))}}>-</button>
          <span>{item.quantity}</span>
          <button className="btn" onClick={() => {dispatch(cartActions.addToCart(item))}}>+</button>
        </div>
      </div>
    )
  })
  return (
    <>
      {cartProducts}
    </>
  )
}