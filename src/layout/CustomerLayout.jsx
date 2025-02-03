import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductProvider from "../context/ProductContext/ProductProvider";
import CategoryProvider from "../context/CategoryContext/CategoryProvider";

function CustomerLayout() {
  return (
    <CategoryProvider>
    <ProductProvider>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ProductProvider>
    </CategoryProvider>
  )
}

export default CustomerLayout