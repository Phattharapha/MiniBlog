import { Link } from "react-router-dom";

function Navbar() {
  return (
   
    <nav className="bg-white shadow p-4">
      <div className="flex gap-x-12">
        <Link
          to="/"
          className="flex-1 hover:underline"
        >
          Home
        </Link>
        <Link to="/about" className="flex-1 hover:underline">
          About
        </Link>
        <Link to="/blog" className="flex-1 hover:underline">
          Blog
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
