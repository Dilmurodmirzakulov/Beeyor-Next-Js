import React, { useState } from "react";
import Slider from "react-slick";
import Dropdown from 'react-bootstrap/Dropdown';
import SaleProducts from "../components/SaleProducts";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Products from "../components/Products";


export default function Home() {
  var settings = {
    dots: true, infinite: true, speed: 300, slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: false, autoplaySpeed: 3000
  };
  const [showProductModal, setShowProductModal] = useState(false);

  const handleCloseProductModal = () => setShowProductModal(false);
  const handleShowProductModal = () => setShowProductModal(true);

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
                <Dropdown>
                  <Dropdown.Toggle className="dropdown-category-btn" id="dropdownMenuButton">
                    Ешё
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="es-dropdown-menu-mt">
                    <Dropdown.Item className="dropdown-item first-item" href="#/action-1">Арабская</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#/action-2">Грузинская</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#/action-2">Индийская</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#/action-2">Корейская</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#/action-2">Осетинская</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item last-item" href="#/action-3">Турецкая</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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

      <SaleProducts />

      {/* <section className="products-list-section">
        <div className="container">
          <h2 className="es-section-header es-header-mt">Категории</h2>
          <div className="product-list row">
            <div className="es-product col-lg-3" onClick={handleShowProductModal}>
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
      </section> */}

      <Products handleShowProductModal = {handleShowProductModal} />

      <Modal show={showProductModal} onHide={handleCloseProductModal} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Гункан спайси эби</Modal.Title>
          <button class="btn es-product-modal-exit-btn position-absolute" onClick={handleCloseProductModal}>
            <img src="img/exit.svg" alt="" />
          </button>
          <img class="es-produt-header" src="img/empty-heart.svg" alt="" />
        </Modal.Header>
        <Modal.Body>
          <div class="modal-product-info-container">
            <h4 class="modal-info-header es-font-medium">Описание:</h4>
            <p class="modal-product-desc">
              Безусловно, понимание сути ресурсосберегающих технологий создаёт предпосылки для
              своевременного выполнения сверхзадачи. Равным образом, базовый вектор развития говорит о
              возможностях дальнейших направлений развития.
            </p>
          </div>
          <div class="modal-product-type-container">
            <h4 class="modal-info-header es-font-medium">Дополнительно:</h4>
            <div class="modal-product-types">
              <div class="row">
                <div class="col-6">
                  <div class="input-container es-ptb-15">
                    <input class="input-radio" type="radio" name="addition" id="first-radio"/>
                      <label for="first-radio">Палочки 1шт <span class="gray-text">+ (0.00
                        сом)</span></label>
                  </div>
                  <div class="input-container es-ptb-15">
                    <input class="input-radio" type="radio" name="addition" id="second-radio" checked/>
                      <label for="second-radio">Васаби <span class="gray-text">+ (5.00
                        сом)</span></label>
                  </div>
                  <div class="input-container es-ptb-15">
                    <input class="input-radio" type="radio" name="addition" id="third-radio" checked/>
                      <label for="third-radio">Васаби <span class="gray-text">+ (5.00
                        сом)</span></label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-container es-ptb-15">
                    <input class="input-radio" type="radio" name="addition" id="fourth-radio"/>
                      <label for="fourth-radio">Соевый соус <span class="gray-text">+ (7.00
                        сом)</span></label>
                  </div>
                  <div class="input-container es-ptb-15">
                    <input class="input-radio" type="radio" name="addition" id="fifth-radio" checked/>
                      <label for="fifth-radio">Имбирь <span class="gray-text">+ (5.00
                        сом)</span></label>
                  </div>
                  <div class="input-container es-ptb-15">
                    <input class="input-radio" type="radio" name="addition" id="sixth-radio" checked/>
                      <label for="sixth-radio">Имбирь <span class="gray-text">+ (5.00
                        сом)</span></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProductModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseProductModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
