// src/pages/Jobs.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import JobDetails from './JobDetails';

const Jobs = () => {
  const [data, setData] = useState([]); // Holds the jobs data
  const [loading, setLoading] = useState(true); // Tracks if data is being loaded
  const [error, setError] = useState(null); // Tracks any errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://testapi.getlokalapp.com/common/jobs?page=1');
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data.results); // Set the job results into state
        setLoading(false); // Set loading to false after data is loaded
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if an error occurred
  }

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {data.length > 0 ? (
          data.map((job) => (
            <li key={job.id} className="border p-4 mb-4 rounded">
              {/* Link to the job details page using job.id */}
              <Link to={`/job/${job.id}`}>
                <h2 className="font-bold">{job.title}</h2>
                <JobDetails key={job.id} jobDetails={job} />
              </Link>
            </li>
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </ul>
    </div>
  );
};

export default Jobs;
