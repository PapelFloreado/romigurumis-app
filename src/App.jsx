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
import SignIn from "./pages/SignIn"
import { AuthContextProvider } from "./context/AuthContext"
import Account from "./pages/Account"
import Protected from "./components/Protected/Protected"
import SignUp from "./pages/SignUp"
import PasswordReset from "./pages/PasswordReset"

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider> 
      <CartContext> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/password-reset" element={<PasswordReset/>}/>
            <Route path="/account" element={<Protected><Account/></Protected>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/shop/item-detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </CartContext>
    </AuthContextProvider>
    </BrowserRouter>
  )
}


export default App