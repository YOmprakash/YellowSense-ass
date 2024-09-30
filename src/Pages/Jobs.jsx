import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://testapi.getlokalapp.com/common/jobs?page=${page}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      if (result.results.length > 0) {
        setData((prevData) => [...prevData, ...result.results]);
        console.log(result.results.primary_details);
        setHasMore(result.results.length > 0);
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
    fetchJobs(page);
  }, [page]);

  const handleNext = () => {
    if (hasMore) setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1)
    return (
      <div className="flex items-center justify-center h-screen text-xl text-center">
        <ClipLoader color={"#3498db"} loading={loading} size={50} />
      </div>
    );
  if (error)
    return (
      <div className="text-xl text-center text-red-500">Error: {error}</div>
    );

  return (
    <div className="min-h-screen p-6 pb-20 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-700">Available Jobs</h1>
      <ul className="space-y-6">
        {data.length > 0 ? (
          data.map((job) => (
            <li
              key={job.id}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <Link to={`/job/${job.id}`}>
                <h2 className="mb-2 text-2xl font-semibold">{job.title}</h2>
              </Link>
              <p className="text-gray-600">Location: {job.job_location_slug}</p>
              <p className="text-gray-600">Salary: {job.salary}</p>
              <p className="text-gray-600">Phone: {job.phone}</p>
            </li>
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </ul>
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={handleNext}
            disabled={loading}
          >
            {loading ? <ClipLoader color={"#fff"} loading={loading} size={25} /> : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Jobs;
