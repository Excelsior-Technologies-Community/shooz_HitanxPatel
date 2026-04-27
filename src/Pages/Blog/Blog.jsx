import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import HeroSection from "./HeroSection";
import BlogGrid from "./BlogGrid";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";

function Blog() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <HeroSection />
      <BlogGrid />
      <Footer />
      <FooterMobile />
    </>
  );
}

export default Blog;