import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../services/api';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogPosts().then(data => setPosts(data));
  }, []);

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
