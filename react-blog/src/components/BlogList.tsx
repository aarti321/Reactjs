import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import { fetchBlogPosts } from '../services/api';

// Update the BlogPost type to match the returned data
interface BlogPost {
  id: string;
  title: string;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    fetchBlogPosts().then(data => setPosts(data)).catch(error => console.error('Error fetching blog posts:', error));
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
