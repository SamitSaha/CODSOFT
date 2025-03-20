import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Job Board</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/jobs" className="px-4">Browse Jobs</Link>
        <Link to="/login" className="px-4">Login</Link>
        <Link to="/post-job" className="bg-green-500 px-4 py-2 rounded">Post A Job</Link>
      </div>
    </nav>
  );
};

export default Navbar;
