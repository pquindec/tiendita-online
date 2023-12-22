import { Link } from "../Components/Link.jsx"
import { products as initialProducts } from '../Mocks/Products.json'
import { Products } from "../Components/Products.jsx"
import { useState } from "react"
import { Header } from "../Components/Header.jsx"
import { Footer } from "../Components/Footer.jsx"
import { useFilters } from "../hooks/useFilters.jsx"
import { Cart } from "../Components/Carts.jsx"
import { CartProvider } from "../Context/carts.jsx"
import "../public/css/HomePage.css"


export default function HomePage(){
  const [products] = useState(initialProducts)
  const { filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)
  
    return(
      <CartProvider>
          <Link to='/about' className="linkToAbout">Sobre Nosotros</Link>
          <Header />
          <Cart />
          <Products products={filteredProducts} />
          <Footer />
      </CartProvider>
    )
  }