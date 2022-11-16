export default function ConfirmedOrder() {
  return (
    <>
      <section className="container">
        <div className="confirmed-order-container">
          <div className="confirmed-order-content">
            <img className="d-block m-auto" src="img/like.svg" alt="" />
            <h4 className="es-sub-header text-center">Ваш заказ успешно принят!</h4>
            <p className="text-center confirmed-order-text">Ваш заказ успешно принят!</p>
            <p className="text-center confirmed-order-text confirmed-order-id">548648</p>
            <div className="confirmed-btns d-flex justify-content-around flex-wrap">
              <button className="btn es-back-to-home">
                <img src="img/arrow-left.svg" alt="" />&nbsp;
                <a href="#">На главную</a>
              </button>
              <button className="btn es-buy">
                <a href="#">К оплате</a>&nbsp;
                <img src="img/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
