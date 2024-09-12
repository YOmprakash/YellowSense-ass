//App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Bookmarks from './pages/Bookmarks';
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
