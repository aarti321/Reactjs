import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css'; // Make sure to add styling for the table
import { fetchBlogPosts } from '../services/api';

// Define the BlogPost interface
interface BlogPost {
  _id: string;         // MongoDB ObjectId as a string
  title: string;
  content?: string;   // Optional content field
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Fetch posts from API and handle errors
    fetchBlogPosts()
      .then(data => {
        // Ensure every post has a content field, even if it's missing from the API
        const postsWithContent = data.map((post: { _id: string; title: string; content?: string }) => ({
          _id: post._id,
          title: post.title,
          content: post.content || '' // Provide an empty string if content is missing
        }));
        setPosts(postsWithContent);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setError('Failed to fetch blog posts.');
        setLoading(false);
      });
  }, []);

  // Handle loading and error states
  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>
                  <Link to={`/posts/${post._id}`} className="view-link">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogList;
