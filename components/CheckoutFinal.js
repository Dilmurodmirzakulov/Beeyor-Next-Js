import { useSelector } from "react-redux";
import { productData } from "./productData";

export default function CheckoutFinal() {

  var delivery = 12;
  var dishes = 12;
  const cartItems = useSelector(state => state.cart.itemsList)
  if(cartItems.length === 0){
    delivery = 0
    dishes = 0
  }
  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    sum = sum + productData[cartItems[i].id].price * cartItems[i].quantity
  }
  return (
    <>
      <div className="order-payment checkout-pament-content es-mt-50">
          <h3 className="es-sub-header">Сумма к оплате</h3>
          <div className="payment-info-row">
            <div className="dotted-text-item left">Стоимость товара:</div>
            <div className="dotted-text-item right">{sum} сом</div>
            <div className="dotted-text-item dotted"></div>
          </div>
          <div className="payment-info-row">
            <div className="dotted-text-item left">Доставка:</div>
            <div className="dotted-text-item right">{delivery} сом</div>
            <div className="dotted-text-item dotted"></div>
          </div>
          <div className="payment-info-row">
            <div className="dotted-text-item left">Одноразовая посуда:</div>
            <div className="dotted-text-item right">{dishes} сом</div>
            <div className="dotted-text-item dotted"></div>
          </div>
        </div>
        <div className="row contact-with-operator-container">
          <a href="#" className="contact-with-operator order-1 order-lg-0 col-lg-9">Заказать</a>
          <div className="col-lg-3 text-lg-right es-font-medium order-0 order-lg-1 text-left">Итого: {sum + delivery + dishes} сом
          </div>
        </div>
    </>
  )
}