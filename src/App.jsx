import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import NotFound from "./pages/NotFound";
import JobDetail from "./pages/JobDetail";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <JobProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <main className="max-w-4xl mx-auto">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/new" element={<AddJob />} />
              <Route path="/jobs/:id" element={<JobDetail />} />
              <Route path="/jobs/:id/edit" element={<EditJob />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
    </JobProvider>
  );
}
