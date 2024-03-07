import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPosts(response.data.posts);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Post List</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {posts.map((post) => (
            <li key={post.id} className="py-4">
              <h3 className="text-blue-500 font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-2">Author: User{post.creator}</p>
              <p className="text-gray-700 mb-2">
                Date: {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{post.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
