import AnnouncementBar from "../../components/AnnouncementBar";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import ContactIntroSection from "./ContactIntroSection";
import ContactSection from "./ContactSection";
import QuestionSection from "./QuestionSection";
import MapSection from "../../Pages/About us/MapSection";
import FAQSection from "./FAQSection";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";

function Contact() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <NavBar />
      <ContactIntroSection />
      <ContactSection />
      <QuestionSection />
      <MapSection />
      <FAQSection />
      <Footer />
      <FooterMobile />
    </>
  );
}

export default Contact;
