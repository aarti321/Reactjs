import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPost } from '../services/api';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchBlogPost(id).then(data => setPost(data));
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
