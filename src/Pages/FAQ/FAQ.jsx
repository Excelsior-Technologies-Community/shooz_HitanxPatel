import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Breadcrumb from "./Breadcrumb";
import FAQ1 from "./FAQ1";
import FAQ2 from "./FAQ2";
import ContactCTASection from "./ContactCTASection";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";

function FAQ() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <Breadcrumb />
      <FAQ1 />
      <FAQ2 />
      <ContactCTASection />
      <Footer />
      <FooterMobile />
    </>
  );
}

export default FAQ;