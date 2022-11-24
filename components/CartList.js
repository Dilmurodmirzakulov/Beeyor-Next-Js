import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import CartProduct from "./CartProduct";
import CartSaleProduct from "./CartSaleProduct";
import { productData } from "./productData";

export default function CartList() {
  const dispatch = useDispatch();
  const cartList = useSelector(item => item.cart.itemsList)
  let sum = 0;
  for(let i = 0; i < cartList.length; i++){
    sum = sum + productData[cartList[i].id].price * cartList[i].quantity
  }
  return (
    <>
      <div className="restourant-aside">
        <div className="aside-products-header d-flex justify-content-between align-items-center">
          <div className="es-sub-header m-0">Корзина</div>
          <button className="btn" onClick={(e) => {dispatch(cartActions.clearCart())}}>Очистить</button>
        </div>
        <div className="aside-products-container">
          <div className="aside-products-wrapper">
            <CartProduct />
          </div>
        </div>
        {sum >= 100000 ? <CartSaleProduct /> : ''}
        <a className="aside-order-btn" href="#"><span>Заказать</span><span>{sum}</span></a>
      </div>
    </>
  )
}