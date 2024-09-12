// src/components/Navbar.jsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white fixed bottom-0 w-full">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/jobs" className="hover:underline">Jobs</Link>
        </li>
        <li>
          <Link to="/bookmarks" className="hover:underline">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
