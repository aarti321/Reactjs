import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css'; // Optional: Create this CSS file for styling
import { fetchBlogPostById } from '../services/api';

// Define the BlogPost interface
interface BlogPost {
  _id: string;
  title: string;
  content: string;  // This time content is required, since it's a detailed view
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get post id from the route parameters
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Ensure that id is not undefined before making the API call
    if (id) {
      fetchBlogPostById(id)  // Since id is guaranteed to be a string, this works fine
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(error => {
          console.error(`Error fetching blog post with id ${id}:`, error);
          setError('Failed to fetch the blog post.');
          setLoading(false);
        });
    } else {
      setError('No blog post ID provided.');
      setLoading(false);
    }
  }, [id]);

  // Handle loading and error states
  if (loading) {
    return <p>Loading blog post...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Blog post not found.</p>; // In case no post is returned
  }

  return (
    <div className="blog-detail">
      <h1>{post.title}</h1>
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
