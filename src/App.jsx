import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">MiniBlog</h1>
        </div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetail />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
