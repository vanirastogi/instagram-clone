"use client";
import React, { useEffect, useRef, useState } from 'react';
import Post from './Post';
import Link from 'next/link';

function Posts() {
  const [allPosts, setAllPosts] = useState([]); 
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [usersArray, setUsersArray] = useState([]);
  const loader = useRef(null);
  const postsToShow = 5; 

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://ig-clone-c6ba4-default-rtdb.firebaseio.com/users.json");
      // console.log("Response status:", response.status); // Log status

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("Fetched data:", data); // Log the fetched data

      const usersArray = Object.values(data);
      // console.log("Users array:", usersArray); // Log the users array
      setUsersArray(usersArray);

      const posts = usersArray.flatMap(user => 
        user.posts.map(post => ({
          ...post,
          userId: user.id,
          profileImage: user.profileImage,
          fullName: user.fullName
        })) || []
      );

      // console.log("All posts:", posts); // Log the flattened posts

      if (posts.length > 0) {
        setAllPosts(posts); s
        setDisplayedPosts(posts.slice(0, postsToShow)); 
      } else {
        setError("No posts found.");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to load more posts
  const loadMorePosts = () => {
    setLoadingMore(true); 

    // Simulate network delay
    setTimeout(() => {
      const nextPosts = allPosts.slice(displayedPosts.length, displayedPosts.length + postsToShow);
      setDisplayedPosts(prev => [...prev, ...nextPosts]);
      setLoadingMore(false);
    }, 1000); 
  };

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loadingMore) {
        loadMorePosts();
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, displayedPosts, allPosts, loadingMore]); 

  return (
    <div className='bg-gray-800 min-h-screen'>
      {loading && <p className='text-white'>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {displayedPosts.map((post) => {
        const user = usersArray.find(user => user.id === post.userId);
        
        return (
          <div key={post.id} className="mb-8">
            <div className='p-4 flex'>
              <img
                src={user?.profileImage}
                alt={user?.fullName} 
                className='w-12 h-12 rounded-full mr-4'
              />
              <Link href={`/user/${user?.id}`}>
                <h2 className="text-lg py-2 font-bold text-white">
                  {user?.fullName} 
                </h2>
              </Link>
              <p className="text-gray-400 px-2 py-3 text-sm">{post.timestamp}</p>
              
            </div>
            <Post post={post} />
          </div>
        );
      })}
      
      {loadingMore && displayedPosts.length > 0 && <p className='text-white'>Loading more posts...</p>} 
      <div ref={loader} className='h-10'></div>
    </div>
  );
}

export default Posts;
