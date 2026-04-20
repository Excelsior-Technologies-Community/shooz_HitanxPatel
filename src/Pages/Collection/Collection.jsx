import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import CollectionSection from "./CollectionSection";
import StyleRedefined from "./StyleRedefined";
import BestWomenSlider from "./BestWomenSlider";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";

function Collection() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <CollectionSection />
      <StyleRedefined />
      <BestWomenSlider />
      <Footer />
      <FooterMobile />
    </>
  );
}

export default Collection;