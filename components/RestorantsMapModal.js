import Modal from 'react-bootstrap/Modal';

export default function RestorantsMapModal({ showMapModal, handleCloseMapModal }) {
  return (
    <Modal show={showMapModal} onHide={handleCloseMapModal} size="lg"
      aria-labelledby="contained-modal-title-vcenter" className="map-modal">
      <Modal.Header className="pb-0 flex-column map-modal-header">
        <Modal.Title>Гункан спайси эби</Modal.Title>
        <p className="mb-0">Укажите на карте или выберите вручную</p>
        <button className="btn es-product-modal-exit-btn position-absolute" onClick={handleCloseMapModal}>
          <img src="img/exit.svg" alt="" />
        </button>
      </Modal.Header>
      <Modal.Body className="map-modal-body">
        <div className="es-ptb-30">
          <form className="es-search-container w-100">
            <img src="img/ic-search.svg" alt="" />
            <input type="search" placeholder="Поиск ресторанов и блюд" />
            <button className="es-search-btn">Найти</button>
          </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="374" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </Modal.Body>
    </Modal>
  )
}