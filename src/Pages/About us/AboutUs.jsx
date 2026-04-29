import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import IntroSection from "./IntroSection";
import PromoSection from "../../Pages/Product/PromoSection";
import FeaturesSection from "../../Pages/Product/FeaturesSection";
import UniqueStyleSection from "./UniqueStyleSection";
import MapSection from "./MapSection";
// import Footer from "../../components/Footer";
// import FooterMobile from "../../components/FooterMobile";

function AboutUs() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <IntroSection />
      <PromoSection />
      <FeaturesSection />
      <UniqueStyleSection />
      <MapSection />
      {/* <Footer />
      <FooterMobile /> */}
    </>
  );
}

export default AboutUs;