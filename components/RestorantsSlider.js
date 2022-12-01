import Slider from "react-slick";
import { restorantsData } from "./restorantsData"

export default function RestorantsSlider() {
  var settings = {
    dots: true, infinite: false, speed: 300, slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: false, autoplaySpeed: 3000
  };
  const slider = restorantsData.map(x => {
    if (x.isAdvertised) {
      return (
        <div className="es-second-slider-item">
          <div className="es-slider-logo-container d-flex align-items-center justify-content-center">
            <img src={x.logo} alt={x.name} />
          </div>
          <div className="es-second-slider-img position-relative">
            <img src={x.bannerImage} alt={x.name} />
            <h3 className="restorant-slider-desc">{x.sliderText}</h3>
          </div>
        </div>
      )
    }
  })
  return (
    <>
      <section>
        <div className="container">
          <h2 className="es-section-header">Заказать продукты</h2>
          <Slider {...settings} className="es-second-slider">
            {slider}
          </Slider>
        </div>
      </section>
    </>
  )
}