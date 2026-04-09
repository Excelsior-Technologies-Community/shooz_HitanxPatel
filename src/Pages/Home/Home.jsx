import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Heroslider from "./Heroslider";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <Heroslider />
      <CategorySection />
      <ProductSection />
    </>
  );
}

export default Home;