import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductProvider from "../context/ProductContext/ProductProvider";

function CustomerLayout() {
  return (
    <ProductProvider>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ProductProvider>
  )
}

export default CustomerLayout