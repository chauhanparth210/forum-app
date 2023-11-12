import Button from "./Button";

type SignupProps = {
  setModalType: (type: string) => void;
  setOpen: (type: boolean) => void;
};

function Signup({ setModalType }: SignupProps) {
  return (
    <div className="text-custom-gray">
      <div className="text-center">
        <h3 className="text-custom-black text-sm">SIGN UP</h3>
        <h3 className="text-custom-gray text-lg pt-2">
          Create an account to continue
        </h3>
      </div>
      <form className="w-100 pt-12">
        <div>
          <label className="text-custom-gray">Email</label>
          <br />
          <input
            placeholder="Enter your email"
            className="bg-custom-dark-black rounded w-full"
          />
        </div>
        <div className="pt-4">
          <label className="text-custom-gray">Username</label>
          <br />
          <input
            placeholder="Enter your username"
            className="bg-custom-dark-black rounded w-full"
          />
        </div>
        <div className="pt-4">
          <label className="text-custom-gray">Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="bg-custom-dark-black rounded w-full"
          />
        </div>
        <Button type="submit" className="w-full mt-5 form-input">
          Continue
        </Button>
      </form>
      <div className="flex pt-3">
        <p className="text-custom-black">Already have an account? </p>
        <p
          className="text-custom-gray ml-2 cursor-pointer"
          onClick={() => setModalType("login")}
        >
          Login →
        </p>
      </div>
    </div>
  );
}

export default Signup;
