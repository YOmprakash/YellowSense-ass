import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import JobDetails from "./JobDetails";

const Jobs = () => {
  const [data, setData] = useState([]); // Holds the jobs data
  const [loading, setLoading] = useState(true); // Tracks if data is being loaded
  const [error, setError] = useState(null); // Tracks any errors
  const [page, setPage] = useState(1); // Tracks the current page
  const [hasMore, setHasMore] = useState(true); // Tracks if more data is available

  const fetchJobs = async (page) => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      if (result.results.length > 0) {
        setData((prevData) => [...prevData, ...result.results]); // Append new data
        setHasMore(result.results.length > 0); // If no data, stop further requests
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(page); // Fetch data when component mounts or page changes
  }, [page]);

  const handleNext = () => {
    if (hasMore) setPage((prevPage) => prevPage + 1); // Increment page
  };

  if (loading && page === 1) {
    return <div>Loading...</div>; // Show loading message only on the first page load
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if an error occurred
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Jobs</h1>
      <ul className="space-y-4">
        {data.length > 0 ? (
          data.map((job) => (
            <li key={job.id} className="p-4 mb-4 border rounded shadow-md">
              <Link to={`/job/${job.id}`}>
                <h2 className="text-lg font-bold">{job.title}</h2>
              </Link>
              {/* <JobDetails job={job} /> */}
            </li>
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </ul>

      {/* Next Button for Pagination */}
      {hasMore && (
        <button
          className="p-2 mt-4 text-white bg-blue-500 rounded my-14 hover:bg-blue-600"
          onClick={handleNext}
          disabled={loading}
        >
          {loading ? "Loading..." : "Next"}
        </button>
      )}
    </div>
  );
};

export default Jobs;
