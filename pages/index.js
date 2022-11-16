import React from "react";
import Slider from "react-slick";
var settings = {
  dots: true, infinite: true, speed: 300, slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: false, autoplaySpeed: 3000
};
var settings2 = {
  dots: true, infinite: true, speed: 300, slidesToShow: 3, slidesToScroll: 1, arrows: false, autoplay: false, autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1024, settings: {
      slidesToShow: 1, slidesToScroll: 1, infinite: true
    }
  }, {
    breakpoint: 600, settings: {
      slidesToShow: 2, slidesToScroll: 1
    }
  }, {
    breakpoint: 480, settings: {
      slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: false, centerMode: true,
      centerPadding: '5%',
    }
  }]
};

export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <Slider className="es-main-slider" {...settings}>
            <div className="es-main-slider-item">
              <img className="es-bee" src="img/bee.svg" alt="" />
              <div className="es-main-slider-content">
                <p className="es-slider-small">Хадамоти расонидаки</p>
                <p className="es-slider-large">Служба доставки</p>
                <p className="es-slider-small">Delivery service</p>
              </div>
            </div>
            <div className="es-main-slider-item">
              <img className="es-bee" src="img/bee.svg" alt="" />
              <div className="es-main-slider-content">
                <p className="es-slider-small">Хадамоти расонидаки</p>
                <p className="es-slider-large">Служба доставки</p>
                <p className="es-slider-small">Delivery service</p>
              </div>
            </div>
            <div className="es-main-slider-item">
              <img className="es-bee" src="img/bee.svg" alt="" />
              <div className="es-main-slider-content">
                <p className="es-slider-small">Хадамоти расонидаки</p>
                <p className="es-slider-large">Служба доставки</p>
                <p className="es-slider-small">Delivery service</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="es-section-header">Заказать продукты</h2>
          <Slider {...settings} className="es-second-slider">
            <div className="es-second-slider-item">
              <div className="es-slider-logo-container">
              </div>
              <div className="es-second-slider-img"></div>
            </div>
            <div className="es-second-slider-item">
              <div className="es-slider-logo-container">
              </div>
              <div className="es-second-slider-img"></div>
            </div>
            <div className="es-second-slider-item">
              <div className="es-slider-logo-container">
              </div>
              <div className="es-second-slider-img"></div>
            </div>
          </Slider>
        </div>
      </section>

      <section>
        <div className="container category-nav-container">
          <h2 className="es-section-header">Категории</h2>
          <div className="es-category-filter-nav">
            <ul className="es-category-nav-list d-flex list-unstyled">
              <li className="es-category-nav-item active">
                <button className="btn">Все</button>
              </li>
              <li className="es-category-nav-item item-main-bg">
                <button className="btn">Национальная</button>
              </li>
              <li className="es-category-nav-item">
                <button className="btn">Европейская</button>
              </li>
              <li className="es-category-nav-item">
                <button className="btn">Кондитерская</button>
              </li>
              <li className="es-category-nav-item">
                <button className="btn">Fast&nbsp;Food</button>
              </li>
              <li className="es-category-nav-item">
                <button className="btn">Здоровое&nbsp;питание</button>
              </li>

              <li className="es-category-nav-item es-category-show-all item-main-bg">
                <button className="btn dropdown-toggle p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Еще</button>
                <div className="dropdown-menu es-dropdown-menu-mt" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item first-item" href="#">Арабская</a>
                  <a className="dropdown-item" href="#">Грузинская</a>
                  <a className="dropdown-item" href="#">Индийская</a>
                  <a className="dropdown-item" href="#">Корейская</a>
                  <a className="dropdown-item" href="#">Осетинская</a>
                  <a className="dropdown-item last-item" href="#">Турецкая</a>
                </div>
              </li>
              <span className="es-mob-category">
                <li className="es-category-nav-item">
                  <button className="btn">Арабская</button>
                </li>
                <li className="es-category-nav-item">
                  <button className="btn">Грузинская</button>
                </li>
                <li className="es-category-nav-item">
                  <button className="btn">Индийская</button>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="es-section-header es-header-mt">Акции и скидки</h2>
          <Slider {...settings2}>
            <div className="sale-slider-wrapper">
              <div className="es-sale-product-slider-item">
                <div className="es-sale-product-slider-photo">
                  <img className="img-fluid" src="img/sale-product.svg" alt="" />
                </div>
                <div className="es-sale-product-info d-block">
                  <h5 className="es-sale-product-title">Плов Бародарон</h5>
                  <p className="es-product-category">Национальная</p>
                  <p className="sale-rating">
                    <img src="img/ic-star.svg" alt="" />&nbsp;
                    4,5 (129)
                  </p>
                </div>
                <div className="es-sale-ellips-bloks">
                  <div className="es-sale-ellips-block es-sale-ellips-block-white">
                    <div className="es-sale-ellips-block"></div>
                  </div>
                  <div className="es-sale-ellips-block es-sale-ellips-block-red">Скидка 20%</div>
                </div>
              </div>
            </div>
            <div className="sale-slider-wrapper">
              <div className="es-sale-product-slider-item">
                <div className="es-sale-product-slider-photo">
                  <img className="img-fluid" src="img/sale-product.svg" alt="" />
                </div>
                <div className="es-sale-product-info d-block">
                  <h5 className="es-sale-product-title">Плов Бародарон</h5>
                  <p className="es-product-category">Национальная</p>
                  <p className="sale-rating">
                    <img src="img/ic-star.svg" alt="" />&nbsp;
                    4,5 (129)
                  </p>
                </div>
                <div className="es-sale-ellips-bloks">
                  <div className="es-sale-ellips-block es-sale-ellips-block-white">
                    <div className="es-sale-ellips-block"></div>
                  </div>
                  <div className="es-sale-ellips-block es-sale-ellips-block-red">Скидка 20%</div>
                </div>
              </div>
            </div>
            <div className="sale-slider-wrapper">
              <div className="es-sale-product-slider-item">
                <div className="es-sale-product-slider-photo">
                  <img className="img-fluid" src="img/sale-product.svg" alt="" />
                </div>
                <div className="es-sale-product-info d-block">
                  <h5 className="es-sale-product-title">Плов Бародарон</h5>
                  <p className="es-product-category">Национальная</p>
                  <p className="sale-rating">
                    <img src="img/ic-star.svg" alt="" />&nbsp;
                    4,5 (129)
                  </p>
                </div>
                <div className="es-sale-ellips-bloks">
                  <div className="es-sale-ellips-block es-sale-ellips-block-white">
                    <div className="es-sale-ellips-block"></div>
                  </div>
                  <div className="es-sale-ellips-block es-sale-ellips-block-red">Скидка 20%</div>
                </div>
              </div>
            </div>
            <div className="sale-slider-wrapper">
              <div className="es-sale-product-slider-item">
                <div className="es-sale-product-slider-photo">
                  <img className="img-fluid" src="img/sale-product.svg" alt="" />
                </div>
                <div className="es-sale-product-info d-block">
                  <h5 className="es-sale-product-title">Плов Бародарон</h5>
                  <p className="es-product-category">Национальная</p>
                  <p className="sale-rating">
                    <img src="img/ic-star.svg" alt="" />&nbsp;
                    4,5 (129)
                  </p>
                </div>
                <div className="es-sale-ellips-bloks">
                  <div className="es-sale-ellips-block es-sale-ellips-block-white">
                    <div className="es-sale-ellips-block"></div>
                  </div>
                  <div className="es-sale-ellips-block es-sale-ellips-block-red">Скидка 20%</div>
                </div>
              </div>
            </div>
            <div className="sale-slider-wrapper">
              <div className="es-sale-product-slider-item">
                <div className="es-sale-product-slider-photo">
                  <img className="img-fluid" src="img/sale-product.svg" alt="" />
                </div>
                <div className="es-sale-product-info d-block">
                  <h5 className="es-sale-product-title">Плов Бародарон</h5>
                  <p className="es-product-category">Национальная</p>
                  <p className="sale-rating">
                    <img src="img/ic-star.svg" alt="" />&nbsp;
                    4,5 (129)
                  </p>
                </div>
                <div className="es-sale-ellips-bloks">
                  <div className="es-sale-ellips-block es-sale-ellips-block-white">
                    <div className="es-sale-ellips-block"></div>
                  </div>
                  <div className="es-sale-ellips-block es-sale-ellips-block-red">Скидка 20%</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="products-list-section">
        <div className="container">
          <h2 className="es-section-header es-header-mt">Категории</h2>
          <div className="product-list row">
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="es-product col-lg-3">
              <div className="es-product-wrapper">
                <div className="es-product-photo">
                  <img className="img-fluid" src="img/product.svg" alt="" />
                  <div className="es-ellips-bloks">
                    <div className="es-ellips-block es-ellips-block-transparent">
                      <div className="es-ellips-block"></div>
                    </div>
                    <div className="es-ellips-block es-ellips-block-gray">Скидка 20%</div>
                  </div>
                </div>
                <div className="es-product-info d-block">
                  <h5 className="es-product-title">Плов Бародарон</h5>
                  <div className="d-flex justify-content-between">
                    <p className="es-product-category">Национальная</p>
                    <div>
                      <img src="img/ic-star.svg" alt="" />&nbsp;
                      <span>4,5 (129)</span>
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
