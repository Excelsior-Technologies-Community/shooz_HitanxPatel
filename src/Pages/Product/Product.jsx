import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import ProductDetails from "./ProductDetails";
import ProductInfo from "./ProductInfo";
import HeroSection from "./HeroSection";
import PromoSection from "./PromoSection";
import FeaturesSection from "./FeaturesSection";
import HeroExplorer from "./HeroExplorer";
import FaqSection from "./FaqSection";
import SaleEvent from "./SaleEvent";
// import Footer from "../../components/Footer";
// import FooterMobile from "../../components/FooterMobile";

function Product() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <ProductDetails />
      <ProductInfo />
      <HeroSection />
      <PromoSection />
      <FeaturesSection />
      <HeroExplorer />
      <FaqSection />
      <SaleEvent />
      {/* <Footer />
      <FooterMobile /> */}
    </>
  );
}

export default Product;
