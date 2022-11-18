import { productData } from "./productData"

export default function Products({ handleShowProductModal }) {

  const products = productData.map(product => {
    return (
      <>
        <div className="es-product col-lg-3" onClick={handleShowProductModal}>
          <div className="es-product-wrapper">
            <div className="es-product-photo">
              <img className="img-fluid" src={product.image} alt="" />
              <div className="es-ellips-bloks">
                <div className="es-ellips-block es-ellips-block-transparent">
                  <div className="es-ellips-block"></div>
                </div>
                <div className="es-ellips-block es-ellips-block-gray">Скидка {product.discount}%</div>
              </div>
            </div>
            <div className="es-product-info d-block">
              <h5 className="es-product-title">{product.title}</h5>
              <div className="d-flex justify-content-between">
                <p className="es-product-category">{product.category}</p>
                <div>
                  <img src="img/ic-star.svg" alt="" />&nbsp;
                  <span>{product.rate} ({product.numberOfRates})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })


  return (
    <>
      <section className="products-list-section">
        <div className="container">
          <h2 className="es-section-header es-header-mt">Категории</h2>
          <div className="product-list row">
            {products}
          </div>
        </div>
      </section>
    </>
  )
}