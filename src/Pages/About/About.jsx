import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import ProductsBanner from "./ProductsBanner";
import ProductListing_section from "./ProductListing_section";
import ProductSection from "./ProductSection";

function About() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <ProductsBanner />
      <ProductListing_section />
      <ProductSection />
    </>
  );
}

export default About;