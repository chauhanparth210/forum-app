import { useContext, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import { Post, createPosts } from "../api";
import { UserContext } from "../context/UserContext";

type CreatePostProps = {
  setPosts: (cb: any) => void;
};

function CreatePost({ setPosts }: CreatePostProps) {
  const [text, setText] = useState("");
  const [isAnonymous, setAnonymous] = useState(false);
  const { user } = useContext(UserContext);

  const handleClick = async () => {
    const data = await createPosts({ text, isAnonymous }, user?.jwt);
    setPosts((prevPosts: Post[]) => {
      return [data, ...prevPosts];
    });
  };

  return (
    <Card className="mt-10 text-custom-gray">
      <h4 className="text-custom-gray text-lg">Create post</h4>
      <div className="pt-4 flex h-20">
        <input
          className="bg-custom-dark-black flex-grow rounded"
          placeholder="How are you feeling today?"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="flex pt-4 items-center">
        <input
          type="checkbox"
          className="bg-custom-dark-black rounded"
          onChange={() => setAnonymous(!isAnonymous)}
          checked={isAnonymous}
        />
        <p className="text-custom-gray ml-2">Post anonymously</p>
      </div>
      <div className="flex justify-end pt-4">
        <Button type="submit" className="px-9 form-input" onClick={handleClick}>
          Post
        </Button>
      </div>
    </Card>
  );
}

export default CreatePost;
