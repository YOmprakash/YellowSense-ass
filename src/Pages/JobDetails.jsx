import ClipLoader from "react-spinners/ClipLoader";



const JobDetails = ({ job }) => {
  if (!job) return <div>No Job Details Available</div>;

  
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Location: {job.location}</h3>
      <p className="text-gray-700">Salary: {job.salary}</p>
      <p className="text-gray-700">Phone: {job.phone}</p>
    </div>
  );
};

export default JobDetails;
