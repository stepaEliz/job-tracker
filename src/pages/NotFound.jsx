import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold">Page not found</h2>
      <p className="mt-2 text-muted">We couldn't find what you were looking for.</p>
      <div className="mt-4">
        <Link to="/" className="underline">Go home</Link>
      </div>
    </div>
  );
}
