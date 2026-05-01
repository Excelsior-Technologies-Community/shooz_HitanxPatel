import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Collection from "./Pages/Collection/Collection";
import Product from "./Pages/Product/Product";
import Blog from "./Pages/Blog/Blog"
import BlogMain from "./Pages/BlogMain/BlogMain"
import AboutUs from "./Pages/About us/AboutUs";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import LookBook from "./Pages/LookBook/LookBook";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogMain />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/LookBook" element={<LookBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;