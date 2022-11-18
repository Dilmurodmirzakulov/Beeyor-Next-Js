import Slider from "react-slick";


export default function SaleProducts() {
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
  return (
    <>
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
    </>
  )
}