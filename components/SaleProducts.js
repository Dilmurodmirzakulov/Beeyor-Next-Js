import { useSelector } from "react-redux";
import Slider from "react-slick";
import { restorantsData } from "./restorantsData";

export default function SaleProducts() {
  var settings2 = {
    dots: true, infinite: false, speed: 300, slidesToShow: 3, slidesToScroll: 1, arrows: false, autoplay: false, autoplaySpeed: 3000,
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
  const selectedCategory = useSelector(state => state.category.categoryName)

  const sliderItem = restorantsData.map(x => {
    if (selectedCategory == "all") {
      if (x.sale) {
        let saleSign
        if (x.sale.saleType === "gift") {
          saleSign = <div className="es-sale-ellips-bloks">
            <div className="es-sale-ellips-block es-sale-ellips-block-white sale-gift">
              <div className="es-sale-ellips-block"></div>
            </div>
            <div className="es-sale-ellips-block es-sale-ellips-block-red sale-gift" style={{ padding: "20px" }}>{x.sale.saleTitle}</div>
          </div>
        } else if (x.sale.saleType === "delivery") {
          saleSign = <div className="es-sale-ellips-bloks">
            <div className="es-sale-ellips-block es-sale-ellips-block-white sale-delivery">
              <div className="es-sale-ellips-block"></div>
            </div>
            <div className="es-sale-ellips-block es-sale-ellips-block-red sale-delivery" style={{ padding: "20px" }}>{x.sale.saleTitle}</div>
          </div>
        } else if (x.sale.saleType === "discount") {
          saleSign = <div className="es-sale-ellips-bloks">
            <div className="es-sale-ellips-block es-sale-ellips-block-white">
              <div className="es-sale-ellips-block"></div>
            </div>
            <div className="es-sale-ellips-block es-sale-ellips-block-red">{x.sale.saleTitle}</div>
          </div>
        }
        return (
          <div className="sale-slider-wrapper">
            <div className="es-sale-product-slider-item">
              <div className="es-sale-product-slider-photo">
                <img className="img-fluid" src={x.mainPageImage} alt={x.name} />
              </div>
              <div className="es-sale-product-info d-block">
                <h5 className="es-sale-product-title">{x.name}</h5>
                <p className="es-product-category">{x.category}</p>
                <p className="sale-rating">
                  <img src="img/ic-star.svg" alt="star" />&nbsp;
                  {x.rate} ({x.numberOfRates})
                </p>
              </div>
              {saleSign}
            </div>
          </div>
        )
      }
    } else if (selectedCategory === x.category) {
      if (x.sale) {
        let saleSign
        if (x.sale.saleType === "gift") {
          saleSign = <div className="es-sale-ellips-bloks">
            <div className="es-sale-ellips-block es-sale-ellips-block-white sale-gift">
              <div className="es-sale-ellips-block"></div>
            </div>
            <div className="es-sale-ellips-block es-sale-ellips-block-red sale-gift" style={{ padding: "20px" }}>{x.sale.saleTitle}</div>
          </div>
        } else if (x.sale.saleType === "delivery") {
          saleSign = <div className="es-sale-ellips-bloks">
            <div className="es-sale-ellips-block es-sale-ellips-block-white sale-delivery">
              <div className="es-sale-ellips-block"></div>
            </div>
            <div className="es-sale-ellips-block es-sale-ellips-block-red sale-delivery" style={{ padding: "20px" }}>{x.sale.saleTitle}</div>
          </div>
        } else if (x.sale.saleType === "discount") {
          saleSign = <div className="es-sale-ellips-bloks">
            <div className="es-sale-ellips-block es-sale-ellips-block-white">
              <div className="es-sale-ellips-block"></div>
            </div>
            <div className="es-sale-ellips-block es-sale-ellips-block-red">{x.sale.saleTitle}</div>
          </div>
        }
        return (
          <div className="sale-slider-wrapper">
            <div className="es-sale-product-slider-item">
              <div className="es-sale-product-slider-photo">
                <img className="img-fluid" src={x.mainPageImage} alt={x.name} />
              </div>
              <div className="es-sale-product-info d-block">
                <h5 className="es-sale-product-title">{x.name}</h5>
                <p className="es-product-category">{x.category}</p>
                <p className="sale-rating">
                  <img src="img/ic-star.svg" alt="star" />&nbsp;
                  {x.rate} ({x.numberOfRates})
                </p>
              </div>
              {saleSign}
            </div>
          </div>
        )
      }
    }
  })


  return (
    <>
      <section>
        <div className="container">
          <h2 className="es-section-header es-header-mt">Акции и скидки</h2>
          <Slider {...settings2}>
            {sliderItem}

          </Slider>
        </div>
      </section>
    </>
  )
}