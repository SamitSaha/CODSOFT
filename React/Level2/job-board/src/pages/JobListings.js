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
