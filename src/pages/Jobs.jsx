import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const { jobs } = useJobs();
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const [searchTitle, setSearchTitle] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    document.title = "Jobs | Job Tracker";
    
    // Фильтруем по статусу и по названию
    let updated = [...jobs];

    if (filterStatus !== "All") {
      updated = updated.filter(
        (job) => job.status.toLowerCase() === filterStatus.toLowerCase()
      );
    }

    if (searchTitle.trim() !== "") {
      updated = updated.filter((job) =>
        job.title.toLowerCase().includes(searchTitle.trim().toLowerCase())
      );
    }

    setFilteredJobs(updated);
  }, [jobs, filterStatus, searchTitle]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Заголовок и кнопка Add Job */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Jobs</h1>
        <Link
          to="/jobs/new"
          className="px-4 py-2 rounded-md bg-pink-500 text-white hover:opacity-90 transition-opacity"
        >
          Add Job
        </Link>
      </div>

      {/* Фильтры */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Список вакансий */}
      {filteredJobs.length === 0 ? (
        <div className="rounded-lg p-6 bg-gray-200 dark:bg-gray-700 shadow">
          <p className="text-gray-600 dark:text-gray-300">
            No jobs found.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
