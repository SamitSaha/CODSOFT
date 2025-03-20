// import { Link } from "react-router-dom";

// const jobs = [
//   { id: 1, title: "Software Engineer", company: "Google", location: "Remote" },
//   { id: 2, title: "Frontend Developer", company: "Facebook", location: "New York" }
// ];

// const JobListings = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold">Job Listings</h2>
//       {jobs.map((job) => (
//         <div key={job.id} className="p-4 border-b">
//           <h3 className="text-xl">{job.title}</h3>
//           <p>{job.company} - {job.location}</p>
//           <Link to={`/job/${job.id}`} className="text-blue-500">View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobListings;

import React, { useEffect, useState } from "react";
import { fetchJobs } from "../api/api";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const { data } = await fetchJobs();
      setJobs(data);
    }
    loadJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};

export default JobListings;
