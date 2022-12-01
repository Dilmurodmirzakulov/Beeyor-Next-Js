import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true, infinite: false, speed: 300, slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: false, autoplaySpeed: 3000
  };
  return (
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
  )
}