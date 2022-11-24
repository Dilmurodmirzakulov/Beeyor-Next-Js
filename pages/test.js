import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const boolean = useSelector(state => state.cart.isLoggedIn)
  const hendleClick = () => {
    dispatch(cartActions.login())
    console.log(boolean)
  }
  
  return (
    <>
      <button onClick={hendleClick} className="test-component">button</button>
    </>
  );
}
