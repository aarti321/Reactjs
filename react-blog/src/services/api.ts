export const fetchBlogPosts = async (): Promise<{ id: string; title: string }[]> => {
  const response = await fetch('/api/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // Make sure the data matches { id: string; title: string }[]
};

// If `fetchBlogPost` is also used, ensure it matches the expected type
export const fetchBlogPost = async (id: string): Promise<{ title: string; content: string }> => {
  const response = await fetch(`/api/posts/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
