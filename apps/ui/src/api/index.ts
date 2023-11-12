const BASE_URL = "http://localhost:5000";

export type User = {
  id: string;
  username: string;
  email: string;
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
  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDFiYTVhNi00ZjdjLTRkMWItYWY4OS0wZDgwODQ5MTgzNjkiLCJpYXQiOjE2OTk4MDEyNjgsImV4cCI6MTY5OTgxMjA2OH0.yZurAtU-ZM5V-EoXJi-aNFFRdHjJEQpqrD9JqoQsVsI"
): Promise<Post[]> => {
  console.log({ post });

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
