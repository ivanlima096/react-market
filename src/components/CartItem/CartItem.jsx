import { BsCartDashFill } from "react-icons/bs"
import "./CartItem.css"

export default function CartItem() {
  return (
    <section className="cart-item">
      <img
        src=""
        alt="imagem do produto"
        className="cart-item-img" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">Título do Produto</h3>
        <h3 className="cart-item-price">R$ 300,00</h3>

        <button type="button" className="button-remove-item"><BsCartDashFill /></button>
      </div>
    </section>
  )
}