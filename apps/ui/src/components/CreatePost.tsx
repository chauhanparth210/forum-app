import Button from "./Button";
import Card from "./Card";

function CreatePost() {
  return (
    <Card className="mt-10 text-custom-gray">
      <h4 className="text-custom-gray text-lg">Create post</h4>
      <div className="pt-4 flex h-20">
        <input
          className="bg-custom-dark-black flex-grow rounded"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="flex pt-4 items-center">
        <input type="checkbox" className="bg-custom-dark-black rounded" />
        <p className="text-custom-gray ml-2">Post anonymously</p>
      </div>
      <div className="flex justify-end pt-4">
        <Button type="submit" className="px-9 form-input">
          Post
        </Button>
      </div>
    </Card>
  );
}

export default CreatePost;
