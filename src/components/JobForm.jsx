import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { useNavigate } from "react-router-dom";

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  );
}

export default function JobForm() {
  const { jobs, setJobs } = useJobs();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      title,
      description,
      status: "Applied",
      createdAt: Date.now(),
    };
    setJobs([...jobs, newJob]);

    // Показываем toast
    setToastMessage(`Job "${title}" added!`);

    // Через 1 сек редирект на Jobs
    setTimeout(() => navigate("/jobs"), 1000);

    // Сбрасываем поля
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Toast message={toastMessage} />
      <h2 className="text-2xl font-bold mb-4">Add Job</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Job Title"
          className="border p-2 rounded w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Description"
          className="border p-2 rounded w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}
