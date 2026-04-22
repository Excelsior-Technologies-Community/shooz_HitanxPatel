import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Collection from "./Pages/Collection/Collection";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;