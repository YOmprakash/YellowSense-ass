import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 z-10 w-full p-2 text-white bg-gray-800 rounded-t-lg shadow-lg">
      <ul className="flex justify-around py-3">
        <li>
          <Link to="/" className="transition duration-300 hover:underline hover:text-blue-400">Home</Link>
        </li>
        <li>
          <Link to="/jobs" className="transition duration-300 hover:underline hover:text-blue-400">Jobs</Link>
        </li>
        <li>
          <Link to="/bookmarks" className="transition duration-300 hover:underline hover:text-blue-400">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
