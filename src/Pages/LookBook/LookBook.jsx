import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import LookbookHeaderSection from "./LookbookHeaderSection";
import SeasonStyleSection from "./SeasonStyleSection";
import ChicComfortSection from "./ChicComfortSection";
import TimelessSection from "./TimelessSection";
import FashionForwardFitness from "./FashionForwardFitness";
import ExploreSection from "./ExploreSection";
import BestSeller from "./BestSeller";
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
      <FashionForwardFitness />
      <ExploreSection />
      <BestSeller />
      {/* <Footer />
      <FooterMobile /> */}
    </>
  );
}

export default LookBook;