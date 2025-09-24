import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const { jobs, setJobs } = useJobs();
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(() => {
      setJobs(jobs.filter((j) => j.id !== job.id));
    }, 300);
  };

  const statusColors = {
    Applied: "bg-blue-100 text-blue-800",
    Interview: "bg-yellow-100 text-yellow-800",
    Offer: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
  };

  const date = new Date(job.createdAt).toLocaleDateString();

  return (
    <div
      className={`p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      } hover:shadow-lg`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold truncate">{job.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[job.status]}`}>
          {job.status}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-2 truncate">{job.description}</p>
      <p className="text-xs text-gray-400 mb-2">Added on {date}</p>
      <div className="flex justify-between items-center">
        <Link to={`/jobs/${job.id}`} className="text-pink-500 hover:underline text-sm">
          View details →
        </Link>
      </div>
    </div>
  );
}
