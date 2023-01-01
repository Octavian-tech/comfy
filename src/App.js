import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
// import styled from "styled-components";
import { Navbar, Sidebar, Footer } from "./components";

import {
  About,
  Cart,
  Checkout,
  Home,
  Products,
  SingleProduct,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <AuthWrapper>
      <Router>
      {/* <React.Fragment> */}
        <Navbar />
        <Sidebar />
        <Routes>
          <Route  path="/" element={<Home />}/>
            {/* <Home />
          </Route> */}
          <Route  path="/about" element={<About />} />
            {/* <About />
          </Route> */}
          <Route  path="/cart" element={<Cart />}/>
            {/* <Cart />
          </Route> */}
          <Route  path="/products" element={<Products />}/>
            {/* <Products />
          </Route> */}
          <Route  path="/products/:id" element={<SingleProduct />}/>
            {/* <SingleProduct />
          </Route> */}
          <Route  path="/checkout" element={<PrivateRoute> <Checkout /> </PrivateRoute>}/>
            {/* <Checkout />
          </PrivateRoute> */}
          <Route  path="*" element={<ErrorPage />}/>
            {/* <ErrorPage />
          </Route> */}
        </Routes>
        {/* </React.Fragment> */}
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
