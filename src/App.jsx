import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFoundTV from "./pages/ErrorPage";
import BlogDetails from "./pages/BlogDetails";
import AllProjects from "./pages/AllProjects";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/AllProjects" element={<AllProjects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Catch-all route */}
          <Route path="*" element={<NotFoundTV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
