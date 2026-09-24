import { client } from '@/utils/http';

const USER_ID = 2293;

export const getUser = async () => {
  const response = await client.get(`/users/${USER_ID}`);

  return response.data;
};

export const getAllPosts = async () => {
  const response = await client.get(`/posts?userId=${USER_ID}`);

  return response.data;
};

export const getPost = async ({id}) => {
  const response = await client.get(`/posts/${id}`);

  return response.data;
};

export const createPost = async ({title, body}) => {
  const response = await client.post('/posts', {
    userId: USER_ID,
    title,
    body,
  });

  return response.data;
};

export const updatePost = async ({ id, title, body }) => {
  const response = await client.patch(`/posts/${id}`, {
    userId: USER_ID,
    title,
    body,
  });

  return response.data;
};

export const deletePost = async id => {
  const response = await client.delete(`/posts/${id}`);

  return response.data;
};