import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Home/HomePage';
import ProductPage from '../Products/ProductPage';
import SingleProductPage from '../SingleProduct/SingleProductPage';
import CartPage from '../Cart/CartPage';
import MyOrderPage from '../MyOrder/MyOrderPage';
import LoginPage from '../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage';
import Logout from '../Authentication/Logout';
import ProtectedRoute from './ProtectedRoute';

const Routing = ({ addToCart, cart }) => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/product/:id' element={<SingleProductPage />} />
    
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
      <Route path='/cart' element={<CartPage  />} />
      <Route path='/myorders' element={<MyOrderPage />} />
      <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  )
}

export default Routing
