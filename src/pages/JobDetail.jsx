import { useParams, useNavigate, Link } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { useState } from "react";
import React, { useEffect } from "react";

function Toast({ message }) {
    if (!message) return null;
    return (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50">
            {message}
        </div>
    );
}

export default function JobDetail() {
    const { jobs, setJobs } = useJobs();
    const { id } = useParams();
    const navigate = useNavigate();

    const job = jobs.find((j) => j.id === Number(id));
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        document.title = "Job Detail | Job Tracker";
    }, []);

    if (!job) return <p className="p-6">Job not found.</p>;

    const handleDelete = () => {
        setToastMessage(`Job "${job.title}" deleted!`);
        setTimeout(() => {
            setJobs(jobs.filter((j) => j.id !== job.id));
            navigate("/jobs");
        }, 1000);
    };



    return (
        <div className="max-w-4xl mx-auto p-6">
            <Toast message={toastMessage} />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                <p className="text-sm text-gray-400 mb-6">Status: {job.status}</p>

                <div className="flex gap-4">
                    <Link
                        to={`/jobs/${job.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
