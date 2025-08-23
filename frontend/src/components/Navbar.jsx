import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/">View Posts</Link>
      <Link to="/upload">Upload</Link>
    </nav>
  );
}
