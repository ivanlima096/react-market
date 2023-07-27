import { useContext } from "react"
import "./CartButton.css"
import { BsCart } from "react-icons/bs"
import AppContext from "../../Context/AppContext"


export default function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <BsCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}

    </button>
  )
}