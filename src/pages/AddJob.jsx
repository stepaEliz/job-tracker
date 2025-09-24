import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  );
}

export default function AddJob() {
  const { jobs, setJobs } = useJobs();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Applied");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    document.title = "Add Job | Job Tracker";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      title,
      description,
      status,
      createdAt: Date.now(),
    };
    setJobs([...jobs, newJob]);

    setToastMessage(`Job "${title}" added!`);
    setTimeout(() => navigate("/jobs"), 1000);

    setTitle("");
    setDescription("");
    setStatus("Applied");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Toast message={toastMessage} />
      <h2 className="text-2xl font-bold mb-6">Add Job</h2>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <input
          type="text"
          placeholder="Job Title"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Description"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-colors"
        >
          Save Job
        </button>
      </form>
    </div>
  );
}
