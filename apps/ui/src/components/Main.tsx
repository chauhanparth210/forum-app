import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import Header from "./Header";
import Posts from "./Posts";
import { Post, User, getPosts } from "../api";
import { UserContext } from "../context/UserContext";

function Main() {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getData() {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header username={user?.username} />
      <CreatePost setPosts={setPosts} />
      <Posts posts={posts} loading={loading} />
    </UserContext.Provider>
  );
}

export default Main;
