"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Story = () => {
  const [usersArray, setUsersArray] = useState([]);

  const fetchStories = async () => {
    try {
      const response = await fetch("https://ig-clone-c6ba4-default-rtdb.firebaseio.com/users.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      const usersArray = Object.values(data);
      console.log("Users STORY array:", usersArray);
      setUsersArray(usersArray);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="flex space-x-4 overflow-x-auto no-scrollbar p-4 bg-transparent">
      {usersArray.map((user) => (
        <Link href={`/user/${user?.id}`} key={user.id}>
          <div className="text-white flex-shrink-0 w-16">
            <img
              src={user.profileImage}
              alt={user.username}
              className="w-16 h-16 rounded-full border-2 border-red-500"
            />
            <p className="text-xs text-center mt-2 text-white">{user.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Story;
