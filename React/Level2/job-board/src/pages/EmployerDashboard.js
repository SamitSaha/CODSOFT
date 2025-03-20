import React, { useState } from "react";
import { postJob } from "../api/api";

const EmployerDashboard = () => {
  const [job, setJob] = useState({ title: "", company: "", location: "", description: "", salary: "" });

  const handleChange = (e) => setJob({ ...job, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postJob(job);
      alert("Job posted successfully!");
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary" onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} required />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default EmployerDashboard;
