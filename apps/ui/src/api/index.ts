const BASE_URL = "http://localhost:5000";

export type User = {
  id: string;
  username: string;
  email: string;
  jwt: string;
};

export type Post = {
  id: string;
  text: string;
  created: string;
  user: User | null;
};

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/post`);
  const data = await response.json();
  return data;
};

export const createPosts = async (
  post: { text: string; isAnonymous: boolean },
  token?: string
): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/post/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

export const LoginUser = async (user: {
  username?: string;
  email?: string;
  password: string;
}): Promise<User> => {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};
