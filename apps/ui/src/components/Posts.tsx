import Card from "./Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type User = {
  id: string;
  username: string;
  email: string;
};

type Post = {
  id: string;
  text: string;
  created: string;
  user: User | null;
};

type PostProps = {
  post?: Post;
};

function Post({ post }: PostProps) {
  return (
    <Card className="mt-4" key={post?.id}>
      <div>
        <p className="text-custom-gray">
          {post?.user?.username || "Anonymous user"}
        </p>
        <p className="">{dayjs(post?.created).fromNow()}</p>
      </div>
      <div className="mt-5 py-4 px-3 flex bg-custom-dark-black flex-grow rounded">
        {post?.text}
      </div>
    </Card>
  );
}

function Posts() {
  // const [posts, setPosts] = useState();

  return (
    <>
      <Post />
    </>
  );
}

export default Posts;
