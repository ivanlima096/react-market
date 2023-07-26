import "./CartButton.css"
import { BsCart } from "react-icons/bs"
export default function CartButton() {
  return (
    <button className="cart-button">
      <BsCart />
      <span className="cart-status">1</span>
    </button>
  )
}