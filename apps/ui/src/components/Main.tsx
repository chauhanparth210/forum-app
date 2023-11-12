import CreatePost from "./CreatePost";
import Header from "./Header";
import Posts from "./Posts";

function Main() {
  return (
    <>
      <Header username="Jane" />
      <CreatePost />
      <Posts />
    </>
  );
}

export default Main;
