import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"
import AppContext from "../../Context/AppContext"
import formatCurrency from "../../utils/formatCurrency"

export default function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return (
    <section className={`cart ${isCartVisible ? "cart-active" : ""} `}>
      <div>
        {(cartItems.length > 0 ? "" : "Poxa! Você não achou nada que goste ainda?")}
      </div>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">Resumo do Carrinho: {formatCurrency(totalPrice)}</div>
    </section>
  )
}