import CartItem from "../CartItem/CartItem"
import "./Cart.css"

export default function Cart() {
  return (
    <section className="cart">
      <div className="cart-items">Itens do Carrinho
        <CartItem />
      </div>
      <div className="cart-resume">Resumo do Carrinho</div>
    </section>
  )
}