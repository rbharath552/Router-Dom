import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-black text-white px-6 py-3">
        <div>
          <h1>Router</h1>
        </div>

        <div className="flex gap-9">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;