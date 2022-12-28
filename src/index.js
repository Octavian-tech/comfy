import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//React Comfy Store
//domain dev-ki4l1gy55mxnzoc6.us.auth0.com
//cliente id lpSkvQnv6Mq4jZTix4PSUiXCnfGw9uQb

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-ki4l1gy55mxnzoc6.us.auth0.com"
  clientId="lpSkvQnv6Mq4jZTix4PSUiXCnfGw9uQb"
  redirectUri={window.location.origin}
  cacheLocation='localstorage'
>
  <UserProvider>
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
  </UserProvider>
  </Auth0Provider>
);

// ReactDOM.render(
//   <Auth0Provider
//   domain="dev-ki4l1gy55mxnzoc6.us.auth0.com"
//   clientId="lpSkvQnv6Mq4jZTix4PSUiXCnfGw9uQb"
//   redirectUri={window.location.origin}
//   cacheLocation='localstorage'
// >
//   <UserProvider>
//   <ProductsProvider>
//     <FilterProvider>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </FilterProvider>
//   </ProductsProvider>
//   </UserProvider>
//   </Auth0Provider>,
//   document.getElementById("root")
// );
