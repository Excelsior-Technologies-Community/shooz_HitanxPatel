import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import LookbookHeaderSection from "./LookbookHeaderSection";
import SeasonStyleSection from "./SeasonStyleSection";
import ChicComfortSection from "./ChicComfortSection";
import TimelessSection from "./TimelessSection";
// import Footer from "../../components/Footer";
// import FooterMobile from "../../components/FooterMobile";

function LookBook() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <LookbookHeaderSection />
      <SeasonStyleSection />
      <ChicComfortSection />  
      <TimelessSection />
      {/* <Footer />
      <FooterMobile /> */}
    </>
  );
}

export default LookBook;