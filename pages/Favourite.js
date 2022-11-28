import { useSelector } from "react-redux"
import FavouriteProducts from "../components/FavouriteProducts"

export default function Favourite() {
  const favouritesList = useSelector(state => state.favourite.favouritesList)
  console.log("favouritesList", favouritesList)
  const cartList = useSelector(state => state.cart.itemsList)
  console.log("cartList", cartList)
  return (
    <>
      <section className="favourite-section">
        <div className="container">
          <h2 className="es-section-header favourities-pl">Избранное</h2>
          {favouritesList.length > 0 ?
              <FavouriteProducts key= 'fav-prod' />
            : ''}
        </div>
      </section>

    </>
  )
}
