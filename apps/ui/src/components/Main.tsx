import { useContext, useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import Header from "./Header";
import Posts from "./Posts";
import { Post, getPosts, meQuery } from "../api";
import { UserContext } from "../context/UserContext";

function Main() {
  const { setUser, user } = useContext(UserContext);
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getUser() {
      try {
        const jwtToken = localStorage.getItem("jwt-token");
        if (jwtToken) {
          const user = await meQuery(jwtToken);
          if (setUser) {
            setUser(user);
          }
        }
      } catch (error) {
        console.log({ error });
      }
    }

    getUser();
  }, []);

  return (
    <>
      <Header username={user?.username} />
      <CreatePost setPosts={setPosts} />
      <Posts posts={posts} loading={loading} />
    </>
  );
}

export default Main;
