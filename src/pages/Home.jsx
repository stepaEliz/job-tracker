import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
      <div className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-2xl font-semibold">Welcome to JobTracker</h1>
        <p className="mt-2 text-muted">
          Keep track of applications, companies and statuses. This is a small
          educational project showing React, Router, Context and Tailwind.
        </p>
        <div className="mt-4">
          <Link to="/jobs" className="px-4 py-2 bg-pink-500 text-white rounded-md">View Jobs</Link>
        </div>
      </div>
  );
}
