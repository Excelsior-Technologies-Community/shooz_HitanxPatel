import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Collection from "./Pages/Collection/Collection";
import Product from "./Pages/Product/Product";
import Blog from "./Pages/Blog/Blog"
import BlogMain from "./Pages/BlogMain/BlogMain"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogMain" element={<BlogMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;