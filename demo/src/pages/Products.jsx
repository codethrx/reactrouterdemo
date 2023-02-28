import React from "react";
import { endpoint } from "../util";
import { useLoaderData, Link } from "react-router-dom";

function Products() {
  const data = useLoaderData();
  console.log(data);
  return !data ? (
    <h2>Loading...</h2>
  ) : (
    data?.map(({ title, id, price }) => (
      <Link to={JSON.stringify(id)} key={id}>
        {title}-{price}
      </Link>
    ))
  );
}

export default Products;
export const productLoader = async () => {
  const promise = await fetch(endpoint);
  const data = await promise.json();
  return data;
};
