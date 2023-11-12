import { memo } from "react";
import Card from "./Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Post } from "../api";
import Spinner from "./Spinner";

dayjs.extend(relativeTime);

type SinglePostProps = {
  post?: Post;
};

type PostsProps = {
  posts: Post[] | undefined;
  loading: boolean;
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

const MemorizedPost = memo(SinglePost);

function Posts({ posts, loading }: PostsProps) {
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

export default memo(Posts);
