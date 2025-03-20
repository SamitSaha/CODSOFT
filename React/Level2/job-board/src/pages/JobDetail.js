import { useParams } from "react-router-dom";

const jobs = {
  1: { title: "Software Engineer", description: "Great job at Google" },
  2: { title: "Frontend Developer", description: "Exciting role at Facebook" }
};

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs[id];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{job.title}</h2>
      <p className="mt-2">{job.description}</p>
      <button className="mt-4 bg-blue-500 px-6 py-3 text-white rounded">Apply Now</button>
    </div>
  );
};

export default JobDetail;
