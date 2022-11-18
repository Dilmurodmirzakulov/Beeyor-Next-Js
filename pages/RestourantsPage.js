// import {RollProducts, SushiProducts, SetProducts, SashimiProducts, DessertProducts, BeverageProducts} from "../components";
import RollProducts from "../components/RollProducts";
import SushiProducts from "../components/SushiProducts";
import SetProducts from "../components/SetProducts";
import SashimiProducts from "../components/SashimiProducts";
import DessertProducts from "../components/DessertProducts";
import BeverageProducts from "../components/BeverageProducts";
import React, { useState } from "react";


export default function RestourantsPage() {
  const cart = []
  function addToCart(currentProduct){
    let currProdIndex = cart.findIndex(x => x.id == currentProduct.id)
    if(currProdIndex >= 0){
      cart[currProdIndex].amount++
    }
    else{
      cart.push({id: currentProduct.id, amount: 1})
    }
    console.log(cart)
  }


  return (
    <>
      <section className="section-after-nav es-restorant-main-content">
        <div className="container-fluid max-width-1520">
          <div className="row restorant-page-parts-wrapper">
            <div className="col-2 aside-container">
              <div className="aside-container">
                <a href="#" className="aside-back-button d-flex align-items-center">
                  <img src="img/arrow-left.svg" alt="" />&nbsp;
                  <span className="es-font-medium">Назад</span>
                </a>
                <div className="aside-nav">
                  <h4 className="m-0 es-font-medium es-font-size-20 es-pt-50">Меню ресторана</h4>
                  <ul className="aside-nav-list list-unstyled">
                    <li>
                      <a className="aside-nav-item active" href="#rolls">Ролы</a>
                    </li>
                    <li>
                      <a className="aside-nav-item" href="#sushi">Суши</a>
                    </li>
                    <li>
                      <a className="aside-nav-item" href="#sets">Сеты</a>
                    </li>
                    <li>
                      <a className="aside-nav-item" href="#sashimi">Сашими</a>
                    </li>
                    <li>
                      <a className="aside-nav-item" href="#desserts">Десерты</a>
                    </li>
                    <li>
                      <a className="aside-nav-item" href="#bevereges">Напитки</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 restorant-page-middle-part">
              <div className="es-restourant-page-banner position-relative">
                <div className="restourant-page-banner-info position-absolute">
                  <button className="btn mob-banner-back-btn banner-btn banner-info-btn">
                    <img src="img/arrow-left.svg" alt="" />
                  </button>
                  <div className="banner-text">
                    <h1>Якитория</h1>
                    <p className="main-header-desc">Японская кухня</p>
                  </div>
                  <div className="restourant-btns d-flex position-relative">
                    <div className="d-flex restourant-main-btns-container">
                      <button className="btn banner-btn">
                        <img src="img/delivery.svg" alt="" />
                        50-60 мин
                      </button>
                      <button className="btn banner-btn">
                        <img src="img/ic-star.svg" alt="" />
                        4,5 (129 отзывов)
                      </button>
                    </div>
                    <div className="dropdown banner-info-btn-wrapper">
                      <button className="btn banner-btn banner-info-btn data-toggle" type="button" data-toggle="dropdown"
                        aria-expanded="false">
                        <img src="img/info-circle.svg" alt="" />
                      </button>
                      <div className="dropdown-menu banner-info-dropdown-menu">
                        <h3 className="es-banner-info-header">Якитория</h3>
                        <p className="banner-dropdown-desc">
                          Сеть культовых ресторанов авторской японской кухни…
                        </p>
                        <div className="banner-dropdown-row">
                          <span className="property">Адрес:</span>&nbsp;&nbsp;&nbsp;
                          <span className="value">Н.Махсум 77/5 А</span>
                        </div>
                        <div className="banner-dropdown-row">
                          <span className="property">Доставка:</span>&nbsp;&nbsp;&nbsp;
                          <span className="value">от 5 сом</span>
                        </div>
                        <div className="banner-dropdown-row">
                          <span className="property">Мин. заказ:</span>&nbsp;&nbsp;&nbsp;
                          <span className="value">от 30 сом</span>
                        </div>
                        <div className="banner-dropdown-row border-0">
                          <span className="property">Режим работы:</span>&nbsp;&nbsp;&nbsp;
                          <span className="value">с 8:00 до 22:00</span>
                        </div>
                      </div>
                    </div>
                    <button className="btn banner-btn banner-info-btn mob-banner-info" type="button"
                      data-target="#restourantInfoModal" data-toggle="modal">
                      <img src="img/info-circle.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mob-category-nav position-sticky">
                <ul className="mob-category-list list-unstyled d-flex align-items-center">
                  <li className="category-link"><a className="active" href="#rolls">Ролы</a></li>
                  <li className="category-link"><a href="#sushi">Суши</a></li>
                  <li className="category-link"><a href="#sets">Сеты</a></li>
                  <li className="category-link"><a href="#sashimi">Сашими</a></li>
                  <li className="category-link"><a href="#desserts">Десерты</a></li>
                  <li className="category-link"><a href="#beverages">Напитки</a></li>
                </ul>
              </div>
              <div className="es-discount-info-container">
                <img src="img/discount-shape.svg" alt="" />
                <div className="discount-content">
                  <p>При заказе от 100 сом.</p>
                  <p className="es-font-medium">Блюдо в подарок</p>
                </div>
              </div>
              <div className="restourant-menu-section first-restourant-section" id="rolls">
                <h2 className="restourant-menu-header">Ролы</h2>
                <RollProducts key={0} addToCart = {addToCart} cart = {cart} />
              </div>
              <div className="restourant-menu-section" id="sushi">
                <h2 className="restourant-menu-header">Суши</h2>
                <SushiProducts />
              </div>
              <div className="restourant-menu-section" id="sets">
                <h2 className="restourant-menu-header">Сеты</h2>
                <SetProducts />
              </div>
              <div className="restourant-menu-section" id="sashimi">
                <h2 className="restourant-menu-header">Сашими</h2>
                <SashimiProducts />
              </div>
              <div className="restourant-menu-section" id="desserts">
                <h2 className="restourant-menu-header">Десерты</h2>
                <DessertProducts />
              </div>
              <div className="restourant-menu-section" id="beverages">
                <h2 className="restourant-menu-header">Напитки</h2>
                <BeverageProducts />
              </div>
            </div>
            <div className="col-3 aside-container">
              <div className="restourant-aside">
                <div className="aside-products-header d-flex justify-content-between align-items-center">
                  <div className="es-sub-header m-0">Корзина</div>
                  <button className="btn">Очистить</button>
                </div>
                <div className="aside-products-container">
                  <div className="aside-products-wrapper">
                    <div className="aside-product d-flex align-items-center justify-content-between">
                      <img src="img/aside-product.svg" alt="" />
                      <div className="aside-product-info">
                        <h4 className="es-font-14 es-font-medium">Калифорния</h4>
                        <p className="mb-0 es-font-medium">15 сом</p>
                      </div>
                      <div className="aside-qty-btns d-flex align-items-center">
                        <button className="btn">-</button>
                        <span>1</span>
                        <button className="btn">+</button>
                      </div>
                    </div>
                    <div className="aside-product d-flex align-items-center justify-content-between">
                      <img src="img/aside-product.svg" alt="" />
                      <div className="aside-product-info">
                        <h4 className="es-font-14 es-font-medium">Калифорния</h4>
                        <p className="mb-0 es-font-medium">15 сом</p>
                      </div>
                      <div className="aside-qty-btns d-flex align-items-center">
                        <button className="btn">-</button>
                        <span>1</span>
                        <button className="btn">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aside-product d-flex align-items-center justify-content-between border-bottom-0">
                  <img src="img/aside-product.svg" alt="" />
                  <div className="aside-product-info">
                    <h4 className="es-font-14 es-font-medium">Калифорния</h4>
                    <p className="mb-0 es-font-medium">15 сом</p>
                  </div>
                  <div className="discount-shape">
                    <img src="img/discount-shape.svg" alt="" />
                  </div>
                </div>
                <a className="aside-order-btn" href="#"><span>Заказать</span><span>60 сом</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
