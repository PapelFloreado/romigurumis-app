import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contacto from "./pages/Contacto"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer"
import CartContext  from "./context/CartContext"
import Cart from "./pages/Cart"

function App() {

  return (
    <BrowserRouter>
      <CartContext>
        
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/shop/item-detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </CartContext>
    </BrowserRouter>
  )
}


export default App