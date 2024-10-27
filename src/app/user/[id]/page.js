
"use client"
import { useRecentProfiles } from '@/app/context/RecentProfilesContext';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';

const UserProfile = ({ params }) => {
  const { id } = params;  
  const [usersArray, setUsersArray] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const {addRecentProfile} = useRecentProfiles();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://ig-clone-c6ba4-default-rtdb.firebaseio.com/users.json");
        console.log("response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status ${response.status}`);
        }
        const data = await response.json();
        
        const usersArray = Object.values(data);
        setUsersArray(usersArray);
        console.log(usersArray);

        const foundUser = usersArray.find(user => user.id == id);
        if (!foundUser) {
          notFound();  
        } else {
          setUser(foundUser);
          addRecentProfile(foundUser);
        }

      } catch (error) {
        console.error('Failed to load data:', error);
        setError("Failed to load data.");
      }
    };

    fetchUsers();
  }, [id , addRecentProfile]); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ml-60'>
      <h1>{user.fullName}</h1>
      <img src={user.profileImage} alt={user.fullName} />
      <p>{user.bio}</p>
      <h2>Posts:</h2>
      {user.posts.map(post => (
        <div key={post.id}>
          <img src={post.image} alt={post.caption} />
          <p>{post.caption}</p>
          <p>Likes: {post.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
