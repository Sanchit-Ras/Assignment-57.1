import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

import ProductDetail from "./ProductDetail.jsx"
ReactDOM.render(
  <React.StrictMode>
      <App />
      <ProductDetail />
  </React.StrictMode>,
  document.getElementById("root")
);