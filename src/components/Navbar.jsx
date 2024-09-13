// src/components/Navbar.jsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 z-10 w-full p-4 text-white bg-blue-500">
      <ul className="flex justify-between">
        {/* <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li> */}
        <li>
          <Link to="/" className="hover:underline">Jobs</Link>
        </li>
        <li>
          <Link to="/bookmarks" className="hover:underline">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
