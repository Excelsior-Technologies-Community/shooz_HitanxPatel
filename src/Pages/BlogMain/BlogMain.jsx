import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import BlogMainHeroSection from "./BlogMainHeroSection";
import MixedContentSection from "./MixedContentSection";
import ExploreCollections from "./ExploreCollections";
import FeedbackSection from "./FeedbackSection";
import YouMayAlsoLike from "./YouMayAlsoLike";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";

function BlogMain() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <BlogMainHeroSection />
      <MixedContentSection />
      <ExploreCollections />
      <FeedbackSection />
      <YouMayAlsoLike />
      <Footer />
      <FooterMobile />
    </>
  );
}

export default BlogMain;