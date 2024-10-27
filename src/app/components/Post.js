// src/app/components/Post.js
import React, { useState } from "react";

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes || 0); // Default to 0 if likes is undefined
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState(post.comments || []); // Default to empty array if comments is undefined

    const handleLike = () => {
        setLiked((prevLiked) => !prevLiked);
        setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
    };

    return (
        <div className="bg-transparent p-4 text-white">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
            <p>{post.body}</p>
            <div className="flex space-x-4 mt-2">
                <button onClick={handleLike} className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={liked ? 'red' : 'none'}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                    <span className="ml-1">{likes}</span>
                </button>
            </div>

            <div className="mt-4">
                <h3>Comments:</h3>
                {comments.length === 0 ? (
                    <p>No Comments yet. Be the first one to comment.</p>
                ) : (
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id} className="mb-2">
                                <strong>{comment.username}</strong> {comment.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Post;
