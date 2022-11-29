import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import RestorantsMapModal from './RestorantsMapModal';
import SearchBar from './SearchBar';

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
              <SearchBar />
              <Button onClick={handleShowMapModal} className="btn es-nav-location my-2 my-lg-0 d-flex align-items-center">
                <img className="mr-1" src="img/ic-location.svg" alt="" />
                <p className="mb-0">Ул.&nbsp;Лохути</p>
              </Button>
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
      <RestorantsMapModal handleCloseMapModal = {handleCloseMapModal} showMapModal = {showMapModal} />



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
