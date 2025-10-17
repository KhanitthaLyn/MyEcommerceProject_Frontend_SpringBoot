import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { Toaster } from "react-hot-toast";

import Home from "./components/home/Home";
import Products from "./components/products/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/cart/Cart";
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";
import Checkout from "./components/checkout/Checkout";
import PaymentConfirmation from "./components/checkout/PaymentConfirmation";

import PrivateRoute from "./components/PrivateRoute";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/dashboard/Dashboard";
import AdminProducts from "./components/admin/products/AdminProducts";
import Sellers from "./components/admin/sellers/Sellers";
import Category from "./components/admin/categories/Category";
import Orders from "./components/admin/orders/Orders";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute publicPage={false} />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirm" element={<PaymentConfirmation />} />
        </Route>

        {/* Auth routes */}
        <Route element={<PrivateRoute publicPage />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin routes */}
        <Route element={<PrivateRoute adminOnly />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="sellers" element={<Sellers />} />
             <Route path="orders" element={<Orders />} />
            <Route path="categories" element={<Category />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
