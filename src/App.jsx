//App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jobs from "./Pages/Jobs";
import Home from "./Pages/Home";
import Bookmarks from "./Pages/Bookmarks";
import JobDetails from "./Pages/JobDetails";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
