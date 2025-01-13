import './App.css'
import Cart from './pages/Cart/cart'
import Checkout from './pages/Checkout/checkout'
import Header from './pages/home/header'
import Home from './pages/home/home'
import Wishlist from './pages/home/Wishlist'
import Comparable from './pages/home/Comparable'
import Login from './pages/home/Login'
import Signup from './pages/home/Signup'
import FakeProduct from './pages/fakeProduct/fakeProduct'
import { CartProvider } from 'react-use-cart'
function App() {

  return (
    <>
    <CartProvider>
    <Home/>
    </CartProvider>
   {/* <Header/>
   <Cart/> */}
   {/* <Checkout/> */}
      {/* <Wishlist/> */}
      {/* <Comparable/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </>
  )
}

export default App
