import { useContext } from "react"
import formatCurrency from "../../utils/formatCurrency"
import "./ProductCard.css"
import { BsFillCartPlusFill } from "react-icons/bs"
import AppContext from "../../Context/AppContext"


export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
  }

  return (
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="product-img" />
      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price)}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button
        type="button"
        className="button-addCart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}