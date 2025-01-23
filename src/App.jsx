import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="products/:id" element={<Products />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
