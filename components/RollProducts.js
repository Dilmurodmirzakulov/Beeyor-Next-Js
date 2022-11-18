import { productData } from "./productData"

export default function RollProducts({ addToCart, cart }) {

  const products = productData.map(product => {


    if (product.category === "Ролы") {
      return (
        <>
          <div className="product-wrapper">
            <div className="inner-product-wrapper">
              <div className="favourite-img position-relative">
                <img className="img-fluid w-100" src={product.image} alt="" />
                <button className="es-liked-img position-absolute">
                  <img src="img/empty-heart.svg" alt="" />
                </button>
              </div>
              <div className="favourite-product-info">
                <div className="favourite-product-title es-font-medium">
                  {product.title}
                </div>
                <div className="favourite-product-price">
                  {product.price} сом
                </div>
                <button onClick={() => addToCart(product)}
                  className="favourite-product-qty btn w-100 es-add-to-cart d-flex align-items-center justify-content-center">
                  Добавить
                </button> 
                {/* <div class="product-qty-btns">
                  <button class="btn es-minus-restourant">-</button>
                  <span>1</span>
                  <button class="btn es-plus-restourant">+</button>
                </div> */}
              </div>
            </div>
          </div>
        </>
      )
    }
  })
  return (
    <>
      <div className="restourant-menu w-100 d-flex">
        {products}
      </div>
    </>
  )
}