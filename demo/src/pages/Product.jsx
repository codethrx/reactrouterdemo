import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { endpoint } from "../util";
function Product() {
  const data = useLoaderData();
  console.log(data);
  return <div>Product</div>;
}

export default Product;
export const loader = async ({ params }) => {
  const data = await fetch(endpoint + "/" + params.id);
  if (!data.ok) throw new Error("Product not");
  const result = await data.json();
  return result;
};
