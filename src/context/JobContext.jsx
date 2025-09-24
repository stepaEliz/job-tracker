import { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

const isLocalStorageAvailable = () => {
  try {
    const testKey = "__test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

export const JobProvider = ({ children }) => {


  const [jobs, setJobs] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("jobs")) || [];
    if (saved.length === 0) {
      return [
        {
          id: 1,
          title: "Frontend Developer",
          description: "React, Tailwind, SPA",
          status: "Applied",
          createdAt: Date.now(),
        },
        {
          id: 2,
          title: "Backend Developer",
          description: "Node.js, Express, MongoDB",
          status: "Interview",
          createdAt: Date.now(),
        },
        {
          id: 3,
          title: "Fullstack Developer",
          description: "React + Node.js project",
          status: "Offer",
          createdAt: Date.now(),
        },
      ];
    }
    return saved;
  });

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      try {
        localStorage.setItem("jobs", JSON.stringify(jobs));
      } catch (e) {
        console.error("Cannot write to localStorage:", e);
      }
    }
  }, [jobs]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
