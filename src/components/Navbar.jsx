import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="text-2xl font-bold text-pink-500">
          Job Tracker
        </div>
        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            Jobs
          </Link>
          <Link
            to="/jobs/new"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            Add Job
          </Link>
        </div>
      </div>
    </nav>
  );
}
