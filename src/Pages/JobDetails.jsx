const JobDetails = ({ job }) => {
  // Ensure that job data is passed properly
  if (!job) {
    return <div>No Job Details Available</div>;
  }

  console.log(job)

  return (
    <div className="mt-2">
     
    </div>
  );
};

export default JobDetails;