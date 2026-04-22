import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import ProductDetails from "./ProductDetails";

// import Footer from "../../components/Footer";
// import FooterMobile from "../../components/FooterMobile";

function Product() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <ProductDetails />

      {/* <Footer />
      <FooterMobile /> */}
    </>
  );
}

export default Product;
