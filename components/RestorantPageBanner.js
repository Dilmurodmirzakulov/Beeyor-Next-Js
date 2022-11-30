import Dropdown from 'react-bootstrap/Dropdown';

export default function RestorantPageBanner() {
  return (
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
          <Dropdown key="banner-dropdown" className="dropdown banner-info-btn-wrapper">
            <Dropdown.Toggle className="btn banner-btn banner-info-btn data-toggle">
              <img src="img/info-circle.svg" alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu banner-info-dropdown-menu">
              <Dropdown.ItemText className="es-banner-info-header p-0">Якитория</Dropdown.ItemText>
              <Dropdown.ItemText className="banner-dropdown-desc p-0">
                Сеть культовых ресторанов авторской японской кухни…
              </Dropdown.ItemText>
              <Dropdown.ItemText className="banner-dropdown-row">
                <span className="property">Адрес:</span>&nbsp;&nbsp;&nbsp;
                <span className="value">Н.Махсум 77/5 А</span>
              </Dropdown.ItemText>
              <Dropdown.ItemText className="banner-dropdown-row">
                <span className="property">Доставка:</span>&nbsp;&nbsp;&nbsp;
                <span className="value">от 5 сом</span>
              </Dropdown.ItemText>
              <Dropdown.ItemText className="banner-dropdown-row">
                <span className="property">Мин. заказ:</span>&nbsp;&nbsp;&nbsp;
                <span className="value">от 30 сом</span>
              </Dropdown.ItemText>
              <Dropdown.ItemText className="banner-dropdown-row border-0">
                <span className="property">Режим работы:</span>&nbsp;&nbsp;&nbsp;
                <span className="value">с 8:00 до 22:00</span>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
          <button className="btn banner-btn banner-info-btn mob-banner-info" type="button"
            data-target="#restourantInfoModal" data-toggle="modal">
            <img src="img/info-circle.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}