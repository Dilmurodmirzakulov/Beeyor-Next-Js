import Image from 'next/image'

export default function FinishedOrders() {
  return (
    <>
      <section className="section-after-nav">
        <div className="container">
          <h2 className="es-section-header section-header finished-orders-header">Профиль</h2>
          <div className="es-finished-orders-wrapper row d-flex justify-content-between">
            <div className="col-lg-4">
              <div className="finished-order-logo-container">
                <Image width={86} height={48} src="/img/footer-logo.svg" alt="" />
                <p className="finished-orders-logo-text">Терентьев Иван</p>
              </div>
              <div className="es-personal-info">
                <h4 className="es-personal-info-header">Личные данные</h4>
                <p className="personal-info-property">дата рождения:</p>
                <p className="personal-info-value">05.06.1995</p>
                <p className="personal-info-property">Номер телефона:</p>
                <p className="personal-info-value">+99890 990 90 90</p>
                <p className="personal-info-property">Дата регистрации:</p>
                <p className="personal-info-value">30.04.2022</p>
                <a href="#" className="es-log-out"><u>Выйти</u></a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="es-sub-header">История заказов</div>
              <div className="history-orders-btns">
                <button className="btn active-order-btn">Активные</button>
                <button className="btn finished-orders-btn">Завершенные</button>
              </div>

              <table className="table previous-orders-table">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Способ оплаты</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="order-id">548648</td>
                    <td>11.12.2021</td>
                    <td>Наличные</td>
                    <td className="order-status">Закрыт</td>
                    <td>50 сом</td>
                  </tr>
                  <tr>
                    <td className="order-id">484589</td>
                    <td>04.09.2021</td>
                    <td>Корти Милли</td>
                    <td className="order-status">Закрыт</td>
                    <td>34 сом</td>
                  </tr>
                  <tr>
                    <td className="order-id">845687</td>
                    <td>11.01.2021</td>
                    <td>Visa</td>
                    <td className="order-status">Закрыт</td>
                    <td>75 сом</td>
                  </tr>
                  <tr>
                    <td className="order-id">984829</td>
                    <td>14.08.2021</td>
                    <td>MasterCard</td>
                    <td className="order-status">Закрыт</td>
                    <td>68 сом</td>
                  </tr>
                  <tr>
                    <td className="order-id">912987</td>
                    <td>23.05.2021</td>
                    <td>Корти Милли</td>
                    <td className="order-status">Закрыт</td>
                    <td>45 сом</td>
                  </tr>
                </tbody>
              </table>
              <div className="mob-previous-table">
                <div className="mob-previous-order">
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>№</p>
                    <p className="order-id">548648</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Дата</p>
                    <p>11.12.2021</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Способ оплаты</p>
                    <p>Наличные</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Статус</p>
                    <p className="order-status">Закрыт</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Сумма</p>
                    <p>50 сом</p>
                  </div>
                </div>
                <div className="mob-previous-order">
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>№</p>
                    <p className="order-id">548648</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Дата</p>
                    <p>11.12.2021</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Способ оплаты</p>
                    <p>Наличные</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Статус</p>
                    <p className="order-status">Закрыт</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Сумма</p>
                    <p>50 сом</p>
                  </div>
                </div>
                <div className="mob-previous-order">
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>№</p>
                    <p className="order-id">548648</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Дата</p>
                    <p>11.12.2021</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Способ оплаты</p>
                    <p>Наличные</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Статус</p>
                    <p className="order-status">Закрыт</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Сумма</p>
                    <p>50 сом</p>
                  </div>
                </div>
                <div className="mob-previous-order">
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>№</p>
                    <p className="order-id">548648</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Дата</p>
                    <p>11.12.2021</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Способ оплаты</p>
                    <p>Наличные</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Статус</p>
                    <p className="order-status">Закрыт</p>
                  </div>
                  <div className="previous-order-row d-flex justify-content-between">
                    <p>Сумма</p>
                    <p>50 сом</p>
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
