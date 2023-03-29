import { Route, Routes } from "react-router-dom";
import { Products } from "../Products/Products";
import { ProductDetails } from "../Products/ProductDetails";
import { Home } from "../landing/home";

import { Footer } from "../Footer/Footer";
import { Cart } from "../checkout/Cart";
import { Shipping } from "../shipping/shipping";
import { Payment } from "../payment/payment";

export const Main = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/products/details/:id"
          element={<ProductDetails />}
        ></Route>
        <Route path="/checkout/cart" element={<Cart />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />

      {/* <Shipping></Shipping> */}

      {/* <Payment></Payment> */}
    </>
  );
};
