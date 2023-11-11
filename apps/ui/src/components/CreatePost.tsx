import Button from "./Button";
import Card from "./Card";

function CreatePost() {
  return (
    <Card className="mt-10">
      <h4 className="text-custom-gray text-lg">Create post</h4>
      <div className="pt-4 flex h-20">
        <input
          className="bg-custom-dark-black flex-grow rounded"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="flex justify-end pt-4">
        <Button className="px-9">Post</Button>
      </div>
    </Card>
  );
}

export default CreatePost;
