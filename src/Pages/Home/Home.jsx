import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Heroslider from "./Heroslider";
import CategorySection from "./CategorySection";
import ProductSectionOld from "./ProductSectionOld";
import ComfortMeetsFashion from "./ComfortMeetsFashion";
import BootsSection from "./BootsSection";
import FashionSneakers from "./FashionSneakers";
import SeasonEndSale from "./SeasonEndSale";
import OurMostPopularStyles from "./OurMostPopularStyles";
import StoreBanner from "./StoreBanner";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <Heroslider />
      <CategorySection />
      <ProductSectionOld />
      <ComfortMeetsFashion />
      <BootsSection />
      <FashionSneakers />
      <SeasonEndSale />
      <OurMostPopularStyles />
      <StoreBanner />
    </>
  );
}

export default Home;