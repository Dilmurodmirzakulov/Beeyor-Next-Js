import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/cartSlice"
import { favouriteActions } from "../store/favouriteSlice";
import { productData } from "./productData"

export default function FavouriteProducts() {
  const dispatch = useDispatch();
  const favouritesList = useSelector(state => state.favourite.favouritesList)
  const cartList = useSelector(state => state.cart.itemsList)
  console.log("favouritesList", favouritesList)
  console.log("cartList", cartList)


  const yakitoriyaProducts = favouritesList.map(x => {
    const index = cartList.findIndex(item => item.id === x)
    if (productData[x].restorant === "Якитория") {
      return (
        <div className="favourite-product-wrapper col-lg-2 col-md-4 col-6">
          <div className="favourite-product">
            <div className="favourite-img position-relative">
              <img className="w-100" src="img/favourite-product.svg" alt="" />
              <button onClick={() => {
                dispatch(favouriteActions.toggleFavourite(x))
              }} className="es-liked-img position-absolute">
                <img src={favouritesList.find(x => x === x) ? 'img/heart-full.svg' : 'img/empty-heart.svg'} alt="" />
              </button>
            </div>
            <div className="favourite-product-info">
              <div className="favourite-product-title">
                {/* Гункан спайси унаги */}
                {productData[x].title}
              </div>
              <div className="favourite-product-price">
                {/* 15.00 сом */}
                {productData[x].price}
              </div>
              {/* <div className="favourite-product-qty d-flex align-items-center justify-content-center">
                <button className="es-plus btn">+</button>
                <span>{cartList[x] ? cartList[x].quantity : 0}</span>
                <button className="es-minus btn">-</button>
              </div> */}
              {index >= 0 ?
                <div className="product-qty-btns d-flex align-items-center">
                  <button className="btn" onClick={() => {
                    dispatch(cartActions.removeFromCart({ id: x, quantity: 1 }))
                  }}>-</button>
                  <span>{cartList[index].quantity}</span>
                  <button className="btn" onClick={() => {
                    dispatch(cartActions.addToCart({ id: x, quantity: 1 }))
                  }}>+</button>
                </div>
                :
                <button onClick={() => {
                  dispatch(cartActions.addToCart({ id: x, quantity: 1 }))
                }} className="favourite-product-qty btn w-100 es-add-to-cart d-flex align-items-center justify-content-center">
                  Добавить
                </button>}
            </div>
          </div>
        </div>

      )
    }
  })
  console.log("yakitoriyaProducts", yakitoriyaProducts)
  
  const lagmanHausProducts = favouritesList.map(x => {
    const index = cartList.findIndex(item => item.id === x)
    if (productData[x].restorant === "Лагман Хаус") {
      return (
        <div className="favourite-product-wrapper col-lg-2 col-md-4 col-6">
          <div className="favourite-product">
            <div className="favourite-img position-relative">
              <img className="w-100" src="img/favourite-product.svg" alt="" />
              <button onClick={() => {
                dispatch(favouriteActions.toggleFavourite(x))
              }} className="es-liked-img position-absolute">
                <img src={favouritesList.find(x => x === x) ? 'img/heart-full.svg' : 'img/empty-heart.svg'} alt="" />
              </button>
            </div>
            <div className="favourite-product-info">
              <div className="favourite-product-title">
                {/* Гункан спайси унаги */}
                {productData[x].title}
              </div>
              <div className="favourite-product-price">
                {/* 15.00 сом */}
                {productData[x].price}
              </div>
              {/* <div className="favourite-product-qty d-flex align-items-center justify-content-center">
                <button className="es-plus btn">+</button>
                <span>{cartList[x] ? cartList[x].quantity : 0}</span>
                <button className="es-minus btn">-</button>
              </div> */}
              {index >= 0 ?
                <div className="product-qty-btns d-flex align-items-center">
                  <button className="btn" onClick={() => {
                    dispatch(cartActions.removeFromCart({ id: x, quantity: 1 }))
                  }}>-</button>
                  <span>{cartList[index].quantity}</span>
                  <button className="btn" onClick={() => {
                    dispatch(cartActions.addToCart({ id: x, quantity: 1 }))
                  }}>+</button>
                </div>
                :
                <button onClick={() => {
                  dispatch(cartActions.addToCart({ id: x, quantity: 1 }))
                }} className="favourite-product-qty btn w-100 es-add-to-cart d-flex align-items-center justify-content-center">
                  Добавить
                </button>}
            </div>
          </div>
        </div>

      )
    }
  })
  console.log("lagmanHausProducts", lagmanHausProducts)

  return (
    <>
      {
        yakitoriyaProducts.find(item => item !== undefined) ?
          <div className="es-restorant-favourites">
            <h4 className="es-sub-header favourities-pl">Ресторан “Якитория”</h4>
            <div className="favourite-products-list row">
              {yakitoriyaProducts}
            </div>
          </div>
          :
          ''
      }
      {
        lagmanHausProducts.find(item => item !== undefined) ?
          <div className="es-restorant-favourites">
            <h4 className="es-sub-header favourities-pl">Ресторан “Лагман Хаус”</h4>
            <div className="favourite-products-list row">
              {lagmanHausProducts}
            </div>
          </div>
          :
          ''
      }
    </>
  )
}