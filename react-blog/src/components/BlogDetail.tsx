import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';

// Assuming fetchBlogPost is defined in your `api.ts` or similar file
import { fetchBlogPost } from '../services/api';

interface BlogPost {
  title: string;
  content: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the blog post ID from the route
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the blog post based on the ID
      fetchBlogPost(id).then(data => setPost(data)).catch(error => console.error('Error fetching blog post:', error));
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
