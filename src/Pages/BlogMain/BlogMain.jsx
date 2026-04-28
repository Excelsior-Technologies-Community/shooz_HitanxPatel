import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import HeroSection from "./HeroSection";
import MixedContentSection from "./MixedContentSection";
import ExploreCollections from "./ExploreCollections";
import FeedbackSection from "./FeedbackSection";
// import Footer from "../../components/Footer";
// import FooterMobile from "../../components/FooterMobile";

function BlogMain() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <HeroSection />
      <MixedContentSection />
      <ExploreCollections />
      <FeedbackSection />
      {/* <Footer />
      <FooterMobile /> */}
    </>
  );
}

export default BlogMain;