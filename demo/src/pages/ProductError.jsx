import React from "react";
import { Link, useRouteError } from "react-router-dom";
function ProductError() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3 style={{ color: "rgba(1,0,0,0.9)" }}>{error.message}</h3>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default ProductError;
