import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Heroslider from "./Heroslider";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";
import ComfortMeetsFashion from "./ComfortMeetsFashion";
import BootsSection from "./BootsSection";
import FashionSneakers from "./FashionSneakers";
import SeasonEndSale from "./SeasonEndSale";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <Heroslider />
      <CategorySection />
      <ProductSection />
      <ComfortMeetsFashion />
      <BootsSection />
      <FashionSneakers />
      <SeasonEndSale />
    </>
  );
}

export default Home;