
import { Route, Routes,useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Rings from './pages/Rings'
import Pendents from './pages/Pendents'
import Necklaces from './pages/Necklaces'

import Earrings from './pages/Earrings'
import Bracelets from './pages/Bracelets'

import Nosepins from './pages/Nosepins'
import Cart from './pages/Cart'
import Login from './pages/Login'
import GiftCards from './pages/GiftCards'

import Stores from './pages/Stores'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
 const location = useLocation();

 const hideNavbar =
   location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
     
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rings" element={<Rings />}></Route>
        <Route path="/pendents" element={<Pendents />}></Route>
        <Route path="/necklaces" element={<Necklaces />}></Route>

        <Route path="/earrings" element={<Earrings />}></Route>
        <Route path="/bracelets" element={<Bracelets />}></Route>

        <Route path="/nosepins" element={<Nosepins />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/giftcard" element={<GiftCards />}></Route>
        <Route path="/stores" element={<Stores />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App
