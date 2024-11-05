"use client"
import Post from '@/app/components/Post';
import { useRecentProfiles } from '@/app/context/RecentProfilesContext';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';

const UserProfile = ({ params }) => {
  const { id } = params;  
  const [usersArray, setUsersArray] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { addRecentProfile } = useRecentProfiles();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://ig-clone-c6ba4-default-rtdb.firebaseio.com/users.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status ${response.status}`);
        }
        const data = await response.json();
        
        const usersArray = Object.values(data);
        setUsersArray(usersArray);

        const foundUser = usersArray.find(user => user.id == id);
        if (!foundUser) {
          notFound();  
        } else {
          setUser(foundUser);
          addRecentProfile(foundUser);
        }
      } catch (error) {
        setError("Failed to load data.");
      }
    };

    fetchUsers();
  }, [id, addRecentProfile]); 

  if (error) {
    return <div className="text-red-500 text-center text-lg">Error: {error}</div>;
  }

  if (!user) {
    return <div className="text-gray-500 text-center text-lg">Loading...</div>;
  }

  return (
    <div className="ml-60 p-5 max-w-2xl">
      <div className="flex items-center gap-5 mb-5 border-b border-gray-300 pb-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={user.profileImage}
          alt={user.fullName}
        />
        <div>
          <h1 className="text-3xl font-bold text-white">{user.fullName}</h1>
          <p className="text-gray-600 mt-1">{user.bio}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts:</h2>
        {user.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
