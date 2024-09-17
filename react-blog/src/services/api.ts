// src/services/api.ts
import axios from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
  baseURL: 'http://localhost:8000/api',  // Replace with your actual Laravel API URL
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Fetch blog posts from the backend
export const fetchBlogPosts = async () => {
  try {
    const response = await api.get('/posts'); // Makes a GET request to /api/posts
    return response.data;  // Return the array of blog posts
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error; // Re-throw the error so it can be caught in the component
  }
};

// Fetch a single blog post by ID (optional if you need a detailed view)
export const fetchBlogPostById = async (_id: string) => {
  try {
    const response = await api.get(`/posts/${_id}`);
    return response.data;  // Return the blog post data
  } catch (error) {
    console.error(`Error fetching blog post with id ${_id}:`, error);
    throw error;
  }
};
