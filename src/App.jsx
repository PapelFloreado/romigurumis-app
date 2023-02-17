import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contacto from "./pages/Contacto"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/shop/item-detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
