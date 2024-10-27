import React, { useState } from "react";

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes || 0);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState(post.comments || []);
    const [commentText, setCommentText] = useState("");

    const handleLike = () => {
        setLiked((prevLiked) => !prevLiked);
        setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
    };

    const handleCommentSubmit = () => {
        if (commentText.trim() === "") return;

        const newComment = {
            username: "Current User", // Replace with actual username if available
            text: commentText,
        };
        
        setComments([...comments, newComment]);
        setCommentText(""); 
    };

    const formattedTimestamp = new Date(post.timestamp).toLocaleString();

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
                    <p>No comments yet. Be the first one to comment.</p>
                ) : (
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id} className="mb-2 flex ">
                                <strong>{comment.username} </strong>
                                <p> : {comment.text}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Comment Input */}
                <div className="mt-4 flex items-center">
                    <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Write a comment..."
                        className="p-2 w-full bg-gray-800 text-white rounded"
                    />
                    <button onClick={handleCommentSubmit} className="ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-blue-500"
                        >
                            <path d="M12 2a10 10 0 110 20 10 10 0 010-20zM10 15.9l6-6-1.4-1.4L10 13.1l-2.6-2.6L6 12.9l4 4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
