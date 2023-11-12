import Card from "./Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post, getPosts } from "../api";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

dayjs.extend(relativeTime);

type SinglePostProps = {
  post?: Post;
};

function SinglePost({ post }: SinglePostProps) {
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

const MemorizedPost = React.memo(SinglePost);

function Posts() {
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

  if (loading) {
    return (
      <div className="pt-10 flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>{posts?.map((post) => <MemorizedPost key={post?.id} post={post} />)}</>
  );
}

export default React.memo(Posts);
