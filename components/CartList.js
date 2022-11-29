import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import CartProduct from "./CartProduct";
import CartSaleProduct from "./CartSaleProduct";
import { productData } from "./productData";

export default function CartList() {
  const dispatch = useDispatch();
  const cartList = useSelector(item => item.cart.itemsList)
  let sum = 0;
  for (let i = 0; i < cartList.length; i++) {
    sum = sum + productData[cartList[i].id].price * cartList[i].quantity
  }
  return (
    <>
      <div className="restourant-aside">
        <div className="aside-products-header d-flex justify-content-between align-items-center">
          <div className="es-sub-header m-0">Корзина</div>
          <button className="btn" onClick={(e) => { dispatch(cartActions.clearCart()) }}>Очистить</button>
        </div>
        <div className="aside-products-container">
          <div className="aside-products-wrapper">
            {
              cartList.length > 0
                ?
                <CartProduct />
                :
                <div className="empty-cart-container d-flex align-items-center justify-content-center flex-column">
                  <img src="img/empty-cart-img.svg" alt="sad bee" />
                  <h4>Пока ничего нет!</h4>
                  <p>Добавляйте товары в корзину</p>
                </div>
            }
          </div>
        </div>
        {sum >= 100 ? <CartSaleProduct /> : ''}
        {
          cartList.length > 0
            ?
            <Link className="aside-order-btn" href="/Checkout"><span>Заказать</span><span>{sum}</span></Link>
            :
            ''
        }
      </div>
    </>
  )
}