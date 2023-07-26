import { useContext, useState } from 'react'
import './SearchBar.css'
import { BsSearch } from 'react-icons/bs'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../Context/AppContext'

export default function SearchBar() {

  const [searchValue, setSearchValue] = useState("")
  const { setProducts, setLoading } = useContext(AppContext)

  const handleSearch = async (ev) => {
    ev.preventDefault()
    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue("")
  }

  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search-input"
        required
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button type="submit" className="search-button">
        <BsSearch />
      </button>
    </form>
  )
}