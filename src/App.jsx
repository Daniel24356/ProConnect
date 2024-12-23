import './App.css'
// <<<<<<< HEAD
// import Home from './pages/home/home'
// =======
import Cart from './pages/Cart/cart'
import Checkout from './pages/Checkout/checkout'
import Home from './pages/home/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Wishlist from './pages/home/Wishlist'
import Comparable from './pages/home/Comparable'
import Login from './pages/home/Login'
import Signup from './pages/home/Signup'
import { WishlistProvider } from './context/WishlistContext'
function App() {

  return (
    <>
      <WishlistProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/comparable' element={<Comparable/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
       </Router>
      </WishlistProvider>
    </>
  )
}

export default App
