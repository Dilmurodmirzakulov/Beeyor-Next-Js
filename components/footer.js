import React from 'react'

export default function footer() {
  return (
    <>
      <footer className="main-footer w-100">
        <div className="container">
          <div className="footer-logo-container">
            <div className="footer-logo">
              <img src="img/footer-logo.svg" alt="" />
            </div>
            <div className="app-download-container">
              <img className="app-store-img" src="img/app-store.svg" alt="" />
              <img src="img/play-market.svg" alt="" />
            </div>
          </div>
          <div className="footer-main-part flex-wrap">
            <div className="es-footer-part">
              <h4 className="es-sub-header">Часто смотрят</h4>
              <div className="footer-lists-container">
                <ul className="footer-list list-unstyled footer-list-mr">
                  <li className="footer-list-item"><a href="#">Национальная</a></li>
                  <li className="footer-list-item"><a href="#">Fast Food</a></li>
                  <li className="footer-list-item"><a href="#">Азиатская</a></li>
                  <li className="footer-list-item"><a href="#">Кофейня</a></li>
                  <li className="footer-list-item"><a href="#">Европейская</a></li>
                  <li className="footer-list-item"><a href="#">Правильное питание</a></li>
                  <li className="footer-list-item"><a href="#">Пиццерия</a></li>
                </ul>
                <ul className="footer-list list-unstyled">
                  <li className="footer-list-item"><a href="#">Выпечка</a></li>
                  <li className="footer-list-item"><a href="#">Ход-дог</a></li>
                  <li className="footer-list-item"><a href="#">Сэндвич</a></li>
                  <li className="footer-list-item"><a href="#">Завтраки</a></li>
                  <li className="footer-list-item"><a href="#">Вок</a></li>
                  <li className="footer-list-item"><a href="#">Салаты</a></li>
                  <li className="footer-list-item"><a href="#">Суши</a></li>
                </ul>
              </div>
            </div>
            <div className="es-footer-part">
              <h4 className="es-sub-header text-right">Часто смотрят</h4>
              <ul className="footer-list list-unstyled text-right">
                <li className="footer-list-item"><a href="about.html">О нас</a></li>
                <li className="footer-list-item"><a href="info-restorans.html">Рестораны</a></li>
                <li className="footer-list-item"><a href="privacy-policy.html">Политика конфиденциальности</a></li>
                <li className="footer-list-item"><a href="terms-of-use.html">Правила пользования</a></li>
                <li className="footer-list-item"><a href="carrier.html">Стать курьером</a></li>
                <li className="footer-list-item"><a href="coworking.html">Стать партнером</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="second-footer">
        <div className="container">
          <div className="second-footer-wrapper row w-100 d-flex justify-content-between m-0">
            <div className="second-footer-row col-lg-5 p-lg-0">©2022 beeyor. Все права защищены.</div>
            <div className="second-footer-row footer-media col-lg-2 d-flex justify-content-around">
              <a href="#"><img src="img/ic-facebook.svg" alt="" /></a>
              <a href="#"><img src="img/ic-telegram.svg" alt="" /></a>
              <a href="#"><img src="img/ic-instagram.svg" alt="" /></a>
            </div>
            <div className="second-footer-row col-lg-5 p-lg-0 text-right">
              <span>Сайт разработан в</span> <a href="#"><u>Zetta Online</u></a>
            </div>
          </div>
        </div>
      </footer>
      <nav className="mob-fixed-bottom-nav position-fixed w-100">
        <div className="container">
          <div className="mob-fixed-nav d-flex justify-content-between">
            <a className="d-flex flex-column align-items-center" href="#">
              <img src="img/home-2.svg" alt="" />
              <p className="m-0">Главная</p>
            </a>
            <a className="d-flex flex-column align-items-center" href="#">
              <img src="img/ic-shopping-cart.svg" alt="" />
              <p className="m-0">Корзина</p>
            </a>
            <a className="d-flex flex-column align-items-center" href="#">
              <img src="img/heart.svg" alt="" />
              <p className="m-0">Избранное</p>
            </a>
            <a className="d-flex flex-column align-items-center" href="#">
              <img src="img/ic-profile.svg" alt="" />
              <p className="m-0">Аккаунт</p>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
