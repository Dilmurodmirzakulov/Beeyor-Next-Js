import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';

export default function Header() {
  const [showMapModal, setShowMapModal] = useState(false);

  const handleCloseMapModal = () => setShowMapModal(false);
  const handleShowMapModal = () => setShowMapModal(true);
  return (
    <header className="fixed-top">
      <nav className="es-main-nav navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="es-navbar-wrapper d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <Link className="navbar-brand" href="/">
                <img src="img/call icon.svg" alt="Beeyor" />
              </Link>
              <form className="es-search-container">
                <img src="img/ic-search.svg" alt="" />
                <input type="search" placeholder="Поиск ресторанов и блюд" />
                <button className="es-search-btn">Найти</button>
              </form>
              <Button onClick={handleShowMapModal} className="btn es-nav-location my-2 my-lg-0 d-flex align-items-center">
                <img className="mr-1" src="img/ic-location.svg" alt="" />
                <p className="mb-0">Ул.&nbsp;Лохути</p>
              </Button>
              <Modal show={showMapModal} onHide={handleCloseMapModal} size="lg"
                aria-labelledby="contained-modal-title-vcenter" className="map-modal">
                <Modal.Header className="pb-0 flex-column map-modal-header">
                  <Modal.Title>Гункан спайси эби</Modal.Title>
                  <p class="mb-0">Укажите на карте или выберите вручную</p>
                  <button class="btn es-product-modal-exit-btn position-absolute" onClick={handleCloseMapModal}>
                    <img src="img/exit.svg" alt="" />
                  </button>
                </Modal.Header>
                <Modal.Body className="map-modal-body">
                  <div class="es-ptb-30">
                    <form class="es-search-container w-100">
                      <img src="img/ic-search.svg" alt="" />
                      <input type="search" placeholder="Поиск ресторанов и блюд" />
                      <button class="es-search-btn">Найти</button>
                    </form>
                  </div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="374" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMapModal}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleCloseMapModal}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </div>
            <div className="d-flex">
              <div className="es-nav-number-container d-flex align-items-center">
                <img className="es-nav-number-ic mr-3" src="img/ic-phone.svg" alt="" />
                <a href="tel:9900" className="es-nav-number mb-0">9900</a>
              </div>
              <ul className="navbar-nav sm-hide">
                <li className="nav-item dropdown mr-3 ml-4 d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle id="language-dropdown" className='es-language-dropdown'>
                      <img className="mr-2" src="img/ic-globe.svg" alt="" />
                      Рус
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">O`zbekcha</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item mr-4 d-flex align-items-center">
                  <Link className="nav-link" href="/RestourantsPage">
                    <span className="nav-icon">
                      <img alt="cart" src="img/ic-shopping-cart.svg" />
                    </span>
                  </Link>
                </li>
                <li className="nav-item mr-4 d-flex align-items-center">
                  <Link className="nav-link" href="/Favourite">
                    <span className="nav-icon">
                      <img alt="favourite" src="img/heart.svg" />
                    </span>
                  </Link>
                </li>
                <li className="nav-item es-cart-block d-flex align-items-center">
                  <Link className="nav-link" href='/FinishedOrders'>
                    <span className="nav-icon">
                      <img alt="Cart" src="img/ic-profile.svg" />
                    </span>
                    <span className="badge badge-cart"></span>
                  </Link>
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
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img className="mr-2" src="img/ic-globe.svg" alt="" />
                Рус
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">O`zbekcha</Dropdown.Item>
                <Dropdown.Item href="#/action-2">English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button onClick={handleShowMapModal} className="btn es-nav-location my-2 my-lg-0 d-flex align-items-center">
              <img className="mr-1" src="img/ic-location.svg" alt="" />
              <p className="mb-0">Ул.&nbsp;Лохути</p>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
