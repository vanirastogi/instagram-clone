"use client"
import { createContext, useContext, useEffect, useState } from "react";

const RecentProfilesContext = createContext();

export const RecentProfilesProvider = ({ children }) => {
  const [recentProfiles, setRecentProfiles] = useState([]);

  // Load profiles from local storage when the component mounts
  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("recentProfiles")) || [];
    setRecentProfiles(storedProfiles);
  }, []);

  // Update local storage whenever recentProfiles changes
  useEffect(() => {
    localStorage.setItem("recentProfiles", JSON.stringify(recentProfiles));
  }, [recentProfiles]);

  // Function to add a profile
  const addRecentProfile = (profile) => {
    setRecentProfiles((prev) => {
      const updatedProfiles = [profile, ...prev.filter((p) => p.id !== profile.id)];
      return updatedProfiles.slice(0, 5); 
    });
  };

  return (
    <RecentProfilesContext.Provider value={{ recentProfiles, addRecentProfile }}>
      {children}
    </RecentProfilesContext.Provider>
  );
};

// Custom hook for easy access to context
export const useRecentProfiles = () => useContext(RecentProfilesContext);
