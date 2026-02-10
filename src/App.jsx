import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFoundTV from "./pages/ErrorPage"; // import it

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Catch-all route */}
          <Route path="*" element={<NotFoundTV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
