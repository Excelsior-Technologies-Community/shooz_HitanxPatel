import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import ProductsBanner from "./ProductsBanner";
import ProductListing_section from "./ProductListing_section";
import ProductSection from "./ProductSection";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";

function Shop() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <ProductsBanner />
      <ProductListing_section />
      <ProductSection />
      <Footer />
      <FooterMobile />
    </>
  );
}

export default Shop;