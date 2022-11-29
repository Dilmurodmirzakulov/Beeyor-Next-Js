// import {RollProducts, SushiProducts, SetProducts, SashimiProducts, DessertProducts, BeverageProducts} from "../components";
import RollProducts from "../components/RollProducts";
import SushiProducts from "../components/SushiProducts";
import SetProducts from "../components/SetProducts";
import SashimiProducts from "../components/SashimiProducts";
import DessertProducts from "../components/DessertProducts";
import BeverageProducts from "../components/BeverageProducts";
import React from "react";
import Cart from "../components/CartList";
import RestorantPageBanner from "../components/RestorantPageBanner";
import { useSelector } from "react-redux";
import Scrollspy from 'react-scrollspy'
import Link from "next/link";

export default function RestourantsPage() { 
  // const favouritesList = useSelector(state => state.favourite.favouritesList)
  // console.log("favouritesList", favouritesList)
  // const cartList = useSelector(state => state.cart.itemsList)
  // console.log("cartList", cartList)

  return (
    <>
      <section className="section-after-nav es-restorant-main-content">
        <div className="container-fluid max-width-1520">
          <div className="row restorant-page-parts-wrapper">
            <div className="col-2 aside-container">
              <div className="aside-container">
                <Link href="/" className="aside-back-button d-flex align-items-center">
                  <img src="img/arrow-left.svg" alt="" />&nbsp;
                  <span className="es-font-medium">Назад</span>
                </Link>
                <div className="aside-nav">
                  <h4 className="m-0 es-font-medium es-font-size-20 es-pt-50">Меню ресторана</h4>
                  <Scrollspy items={['rolls', 'sushi', 'sets', 'sashimi', 'desserts', 'beverages']} currentClassName="active" className="aside-nav-list list-unstyled">
                    <li>
                      <a className="aside-nav-item" href="#rolls">Ролы</a>
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
                  </Scrollspy>
                </div>
              </div>
            </div>
            <div className="col-lg-7 restorant-page-middle-part">
              <RestorantPageBanner />
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
                <RollProducts />
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
              <Cart />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
