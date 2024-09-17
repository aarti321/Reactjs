const API_BASE_URL = 'http://localhost:8000/api';

export const fetchBlogPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  return response.json();
};

export const fetchBlogPost = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  return response.json();
};
