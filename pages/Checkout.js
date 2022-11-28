import Link from "next/link";

export default function Checkout() {
  return (
    <>
      <section>
        <div className="mob-category-nav position-sticky">
          <ul className="mob-category-list list-unstyled d-flex align-items-center">
            <li className="category-link checkout-nav-item"><a className="active" href="#delivery">Доставка</a></li>
            <li className="category-link checkout-nav-item"><a href="#your-orders">Ваш заказ</a></li>
            <li className="category-link checkout-nav-item"><a href="#may-like">Вам может понравиться</a></li>
          </ul>
        </div>
        <div className="container">
          <div className="row section-after-nav Somethingrow-eq-height">
            <div className="es-checkout-status-header w-100 row container pr-0">
              <div className="col-lg-8 d-flex align-items-center justify-content-between">
                <h2 className="es-section-header m-0">Оформление заказа</h2>
                <Link href="/RestourantsPage" className="aside-back-button d-flex align-items-center">
                  <img src="img/arrow-left.svg" alt="" />&nbsp;
                  <span className="es-font-medium">Назад</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="delivery-section checkout-section">
                <h3 className="es-sub-header">Доставка</h3>
                <p className="es-font-medium"><span className="es-red">*</span>Адрес доставки</p>
                <div className="address-inputs">
                  <div className="es-col-40 address-large-input position-relative">
                    <img className="es-location-ic position-absolute" src="img/ic-location.svg" alt="" />
                    <select name="restourants" className="select-restourant w-100">
                      <option value="first">Ул. Лохути</option>
                      <option value="second">Ул. Лохути, рай...</option>
                    </select>
                    <button className="es-exit-ic btn position-absolute">
                      <img src="img/exit-black.svg" alt="" />
                    </button>
                  </div>
                  <div className="es-col-20 address-small-input mob-home-input">
                    <input className="address-input form-control" placeholder="Подъезд" type="text" />
                  </div>
                  <div className="es-col-20 address-small-input mob-floor-input">
                    <input className="address-input form-control" placeholder="Этаж" type="text" />
                  </div>
                  <div className="es-col-20 address-large-input pr-0">
                    <input className="address-input form-control" placeholder="Квартира" type="text" />
                  </div>
                </div>
                <p className="es-font-medium es-mt-30"><span className="es-red">*</span>Номер телефона</p>
                <div className="row">
                  <div className="col-lg-6 position-relative mob-phone-num-input">
                    <input type="text" className="form-control address-input pl-5 address-large-input"
                      placeholder="+992 __ __ __ __" />
                    <img className="es-call-ic position-absolute" src="img/call-calling.svg" alt="" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="form-control address-input pl-3 address-large-input"
                      placeholder="Укажите ориентир" />
                  </div>
                </div>
                <p className="es-font-medium es-mt-30"><span className="es-red">*</span>Выберите способ оплаты</p>
                <div className="radio-inputs-container d-flex">
                  <div className="radio-inputs mr-5">
                    <div className="input-container mb-3">
                      <input className="input-radio" type="radio" name="payment" id="cash" />
                      <label for="cash">Наличные</label>
                    </div>
                    <div className="input-container">
                      <input className="input-radio" type="radio" name="payment" id="korti-milli" checked />
                      <label for="korti-milli">Корти Милли</label>
                    </div>
                  </div>
                  <div className="radio-inputs">
                    <div className="input-container mb-3">
                      <input className="input-radio" type="radio" name="payment" id="visa" />
                      <label for="visa">Visa</label>
                    </div>
                    <div className="input-container">
                      <input className="input-radio" type="radio" name="payment" id="master-card" />
                      <label for="master-card">MasterCard</label>
                    </div>
                  </div>
                </div>
                <p className="es-font-medium es-mt-30"><span className="es-red">*</span>Выберите способ оплаты</p>
                <div className="position-relative es-modal-input-container">
                  <textarea className="form-control es-input-radious" name="comment" rows="4"></textarea>
                  <img className="position-absolute textarea-ic" src="img/message-text.svg" alt="" />
                </div>
              </div>
              <div className="es-mtb-50 checkout-section">
                <h3 className="es-sub-header checkout-table-header">Ваш заказ</h3>
                <table className="table checkout-table">
                  <thead>
                    <tr>
                      <th scope="col" className="es-font-medium border-top-0 es-w-40">Товар</th>
                      <th scope="col" className="es-font-medium border-top-0">Цена&nbsp;&nbsp;</th>
                      <th scope="col" className="es-font-medium border-top-0">Количество</th>
                      <th scope="col" className="es-font-medium border-top-0">Итого</th>
                      <th scope="col" className="es-font-medium border-top-0 text-center">Удалить</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="checkout-product d-flex ">
                        <img src="img/checkout.svg" alt="" />
                        <div className="checkout-product-info">
                          <h4 className="checkout-product-title">Витаминный салат</h4>
                          <p className="checkout-product-desc">
                            Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                          </p>
                        </div>
                      </td>
                      <td className="es-font-14 es-font-medium es-w-max-content">15 сом</td>
                      <td>
                        <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                          <button className="es-plus btn">+</button>
                          <span>1</span>
                          <button className="es-minus btn">-</button>
                        </div>
                      </td>
                      <td className="es-font-14 es-font-medium">15 сом</td>
                      <td className="text-center">
                        <button className="btn">
                          <img src="img/exit-black.svg" alt="" />
                        </button>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="checkout-product d-flex ">
                        <img src="img/checkout.svg" alt="" />
                        <div className="checkout-product-info">
                          <h4 className="checkout-product-title">Витаминный салат</h4>
                          <p className="checkout-product-desc">
                            Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                          </p>
                        </div>
                      </td>
                      <td className="es-font-14 es-font-medium">15 сом</td>
                      <td>
                        <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                          <button className="es-plus btn">+</button>
                          <span>1</span>
                          <button className="es-minus btn">-</button>
                        </div>
                      </td>
                      <td className="es-font-14 es-font-medium">15 сом</td>
                      <td className="text-center">
                        <button className="btn">
                          <img src="img/exit-black.svg" alt="" />
                        </button>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="checkout-product d-flex ">
                        <img src="img/checkout.svg" alt="" />
                        <div className="checkout-product-info">
                          <h4 className="checkout-product-title">Витаминный салат</h4>
                          <p className="checkout-product-desc">
                            Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                          </p>
                        </div>
                      </td>
                      <td className="es-font-14 es-font-medium">15 сом</td>
                      <td>
                        <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                          <button className="es-plus btn">+</button>
                          <span>1</span>
                          <button className="es-minus btn">-</button>
                        </div>
                      </td>
                      <td className="es-font-14 es-font-medium">15 сом</td>
                      <td className="text-center">
                        <button className="btn">
                          <img src="img/exit-black.svg" alt="" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mob-checkout-table">
                  <div className="mob-checkout-product">
                    <div className="mob-checkout-product-img">
                      <img src="img/checkout.svg" alt="" />
                      <button className="btn">
                        <img src="img/exit-black.svg" alt="" />
                      </button>
                    </div>
                    <div className="checkout-product-info">
                      <h4 className="checkout-product-title mob-checkout-product-title">Витаминный салат</h4>
                      <p className="checkout-product-desc mob-checkout-product-desc">
                        Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                      </p>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Цена</p>
                      <p className="mob-value-name">15 сом</p>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Количество</p>
                      <div className="mob-value-name">
                        <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                          <button className="es-plus btn">+</button>
                          <span>1</span>
                          <button className="es-minus btn">-</button>
                        </div>
                      </div>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Итого</p>
                      <p className="mob-value-name">15 сом</p>
                    </div>
                  </div>
                  <div className="mob-checkout-product">
                    <div className="mob-checkout-product-img">
                      <img src="img/checkout.svg" alt="" />
                      <button className="btn">
                        <img src="img/exit-black.svg" alt="" />
                      </button>
                    </div>
                    <div className="checkout-product-info">
                      <h4 className="checkout-product-title mob-checkout-product-title">Витаминный салат</h4>
                      <p className="checkout-product-desc mob-checkout-product-desc">
                        Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                      </p>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Цена</p>
                      <p className="mob-value-name">15 сом</p>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Количество</p>
                      <div className="mob-value-name">
                        <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                          <button className="es-plus btn">+</button>
                          <span>1</span>
                          <button className="es-minus btn">-</button>
                        </div>
                      </div>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Итого</p>
                      <p className="mob-value-name">15 сом</p>
                    </div>
                  </div>
                  <div className="mob-checkout-product">
                    <div className="mob-checkout-product-img">
                      <img src="img/checkout.svg" alt="" />
                      <button className="btn">
                        <img src="img/exit-black.svg" alt="" />
                      </button>
                    </div>
                    <div className="checkout-product-info">
                      <h4 className="checkout-product-title mob-checkout-product-title">Витаминный салат</h4>
                      <p className="checkout-product-desc mob-checkout-product-desc">
                        Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                      </p>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Цена</p>
                      <p className="mob-value-name">15 сом</p>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Количество</p>
                      <div className="mob-value-name">
                        <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                          <button className="es-plus btn">+</button>
                          <span>1</span>
                          <button className="es-minus btn">-</button>
                        </div>
                      </div>
                    </div>
                    <div className="mob-checkout-table-row d-flex justify-content-between align-content-center">
                      <p className="mob-property-name">Итого</p>
                      <p className="mob-value-name">15 сом</p>
                    </div>
                  </div>
                </div>

                <div className="order-payment checkout-pament-content es-mt-50">
                  <h3 className="es-sub-header">Сумма к оплате</h3>
                  <div className="payment-info-row">
                    <div className="dotted-text-item left">Стоимость товара:</div>
                    <div className="dotted-text-item right">325 сом</div>
                    <div className="dotted-text-item dotted"></div>
                  </div>
                  <div className="payment-info-row">
                    <div className="dotted-text-item left">Доставка:</div>
                    <div className="dotted-text-item right">12 сом</div>
                    <div className="dotted-text-item dotted"></div>
                  </div>
                  <div className="payment-info-row">
                    <div className="dotted-text-item left">Одноразовая посуда:</div>
                    <div className="dotted-text-item right">12 сом</div>
                    <div className="dotted-text-item dotted"></div>
                  </div>
                </div>
                <div className="row contact-with-operator-container">
                  <a href="#" className="contact-with-operator order-1 order-lg-0 col-lg-9">Связаться с оператором</a>
                  <div className="col-lg-3 text-lg-right es-font-medium order-0 order-lg-1 text-left">Итого: 339 сом
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="es-bg-white es-ptb-40 checkout-section-p mob-checkout-section">
                <h3 className="es-sub-header es-pl-32">Вам может понравиться</h3>
                <div className="checkout-products-wrapper">
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                  <div className="checkout-product es-border-bottom es-ptb-20">
                    <div className="d-flex">
                      <img src="img/checkout.svg" alt="" />
                      <div className="checkout-product-info">
                        <h4 className="checkout-product-title">Витаминный салат</h4>
                        <p className="checkout-product-desc">
                          Дайкон, Капуста <br /> белокочанная, Морковь, <br /> Огурцы, Зелень.
                        </p>
                      </div>
                    </div>
                    <div className="checkout-product-second-container d-flex justify-content-between align-items-center mt-2">
                      <div className="chackout-product-qty d-flex align-items-center justify-content-center">
                        <button className="es-plus btn">+</button>
                        <span>1</span>
                        <button className="es-minus btn">-</button>
                      </div>
                      <span>15 сом</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
