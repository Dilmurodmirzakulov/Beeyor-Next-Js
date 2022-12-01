import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import SaleProducts from "../components/SaleProducts";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Restorants from "../components/Restorants";
import MainSlider from "../components/MainSlider";
import RestorantsSlider from "../components/RestorantsSlider";
import RestorantsCategories from "../components/RestorantsCategories";


export default function Home() {

  const [showProductModal, setShowProductModal] = useState(false);

  const handleCloseProductModal = () => setShowProductModal(false);
  const handleShowProductModal = () => setShowProductModal(true);

  return (
    <>
      <MainSlider key="main-slider" />
      <RestorantsSlider key="restorant-slider" />
      <RestorantsCategories key="restorans-categories" />
      <SaleProducts key="sale-products" />
      <Restorants handleShowProductModal={handleShowProductModal} />
      <Modal show={showProductModal} onHide={handleCloseProductModal} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Гункан спайси эби</Modal.Title>
          <button className="btn es-product-modal-exit-btn position-absolute" onClick={handleCloseProductModal}>
            <img src="img/exit.svg" alt="" />
          </button>
          <img className="es-produt-header" src="img/empty-heart.svg" alt="" />
        </Modal.Header>
        <Modal.Body>
          <div className="modal-product-info-container">
            <h4 className="modal-info-header es-font-medium">Описание:</h4>
            <p className="modal-product-desc">
              Безусловно, понимание сути ресурсосберегающих технологий создаёт предпосылки для
              своевременного выполнения сверхзадачи. Равным образом, базовый вектор развития говорит о
              возможностях дальнейших направлений развития.
            </p>
          </div>
          <div className="modal-product-type-container">
            <h4 className="modal-info-header es-font-medium">Дополнительно:</h4>
            <div className="modal-product-types">
              <div className="row">
                <div className="col-6">
                  <div className="input-container es-ptb-15">
                    <input className="input-radio" type="radio" name="addition" id="first-radio" />
                    <label htmlFor="first-radio">Палочки 1шт <span className="gray-text">+ (0.00
                      сом)</span></label>
                  </div>
                  <div className="input-container es-ptb-15">
                    <input className="input-radio" type="radio" name="addition" id="second-radio" checked />
                    <label htmlFor="second-radio">Васаби <span className="gray-text">+ (5.00
                      сом)</span></label>
                  </div>
                  <div className="input-container es-ptb-15">
                    <input className="input-radio" type="radio" name="addition" id="third-radio" checked />
                    <label htmlFor="third-radio">Васаби <span className="gray-text">+ (5.00
                      сом)</span></label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-container es-ptb-15">
                    <input className="input-radio" type="radio" name="addition" id="fourth-radio" />
                    <label htmlFor="fourth-radio">Соевый соус <span className="gray-text">+ (7.00
                      сом)</span></label>
                  </div>
                  <div className="input-container es-ptb-15">
                    <input className="input-radio" type="radio" name="addition" id="fifth-radio" checked />
                    <label htmlFor="fifth-radio">Имбирь <span className="gray-text">+ (5.00
                      сом)</span></label>
                  </div>
                  <div className="input-container es-ptb-15">
                    <input className="input-radio" type="radio" name="addition" id="sixth-radio" checked />
                    <label htmlFor="sixth-radio">Имбирь <span className="gray-text">+ (5.00
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
