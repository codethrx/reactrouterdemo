import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import A from "./pages/A";
import B from "./pages/B";
import Form from "./pages/Forms";
import Products, { productLoader } from "./pages/Products";
import Product, { loader } from "./pages/Product";
import ProductError from "./pages/ProductError";
let router;
//  router = createBrowserRouter([
//   { element: <Page1 />, path: "/" },
//   { element: <Page2 />, path: "/new" },
// ]);
router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Page1 />} index />
      <Route element={<Page2 />} path="/:id" />
      <Route path="form" element={<Form />}>
        <Route path="a" element={<A />} />
        <Route path="b" element={<B />} />
      </Route>
      <Route path="products">
        <Route index loader={productLoader} element={<Products />} />
        <Route
          path=":id"
          loader={loader}
          element={<Product />}
          errorElement={<ProductError />}
        />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
