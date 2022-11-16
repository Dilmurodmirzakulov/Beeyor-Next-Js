import React from 'react'
import Image from 'next/image'


export default function header() {
  return (
    <header className="fixed-top">
      <nav className="es-main-nav navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="es-navbar-wrapper d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <a className="navbar-brand" href="#">
                <img src="img/call icon.svg" alt="Beeyor" />
              </a>
              <form className="es-search-container">
                <img src="img/ic-search.svg" alt="" />
                <input type="search" placeholder="Поиск ресторанов и блюд" />
                <button className="es-search-btn">Найти</button>
              </form>
              <button className="btn es-nav-location my-2 my-lg-0 d-flex align-items-center" type="button"
                data-target="#restoransMapModal" data-toggle="modal">
                <img className="mr-1" src="img/ic-location.svg" alt="" />
                <p className="mb-0">Ул.&nbsp;Лохути</p>
              </button>
            </div>
            <div className="d-flex">
              <div className="es-nav-number-container d-flex align-items-center">
                <img className="es-nav-number-ic mr-3" src="img/ic-phone.svg" alt="" />
                <a href="tel:9900" className="es-nav-number mb-0">9900</a>
              </div>
              <ul className="navbar-nav sm-hide">
                <li className="nav-item dropdown mr-5">
                  <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="mr-2" src="img/ic-globe.svg" alt="" />
                    <p className="mb-0">Рус</p>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">O`zbekcha</a>
                    <a className="dropdown-item" href="#">English</a>
                  </div>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="restorans-page.html">
                    <span className="nav-icon">
                      <img alt="Search" src="img/ic-shopping-cart.svg" />
                    </span>
                  </a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="favourite.html" title="Профиль" data-target="#rateService"
                    data-toggle="modal">
                    <span className="nav-icon">
                      <img alt="favourite" src="img/heart.svg" />
                    </span>
                  </a>
                </li>
                <li className="nav-item es-cart-block">
                  <button className="nav-link btn" data-target="#enterProfile" data-toggle="modal" type="button">
                    <span className="nav-icon">
                      <img alt="Cart" src="img/ic-profile.svg" />
                    </span>
                    <span className="badge badge-cart"></span>
                  </button>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>






      <nav className="main-mobile-nav">
        <div className="container">
          <div className="main-mobile-nav-wrapper d-flex justify-content-between">
            <button className="btn"><img src="img/search-black.svg" alt="" /></button>
            <a className="dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="mr-2" src="img/ic-globe.svg" alt="" />
              <p className="mb-0">Рус</p>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">O`zbekcha</a>
              <a className="dropdown-item" href="#">English</a>
            </div>
            <button className="btn es-nav-location d-flex align-items-center" type="button"
              data-target="#mobRestoransMapModal" data-toggle="modal">
              <img className="mr-1" src="img/ic-location.svg" alt="" />
              <p className="mb-0">Ул. Лохути</p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
