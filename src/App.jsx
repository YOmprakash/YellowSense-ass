//App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
// import JobDetails from "./pages/JobDetails";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Jobs />} />
        {/* <Route path="/job/:id" element={<JobDetails />} /> */}
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
