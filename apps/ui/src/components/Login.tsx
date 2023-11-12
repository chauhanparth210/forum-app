import Button from "./Button";

type LoginProps = {
  setModalType: (type: string) => void;
};

function Login({ setModalType }: LoginProps) {
  return (
    <div className="text-custom-gray">
      <div className="text-center">
        <h3 className="text-custom-black text-sm">WELCOME BACK</h3>
        <h3 className="text-custom-gray text-lg pt-2">Log into your account</h3>
      </div>
      <form className="w-100 pt-12">
        <div>
          <label className="text-custom-gray">Email or username</label>
          <br />
          <input
            placeholder="Enter your email or username"
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
          Login now
        </Button>
      </form>
      <div className="flex pt-3">
        <p className="text-custom-black">Not registered yet?</p>
        <p
          className="text-custom-gray ml-2 cursor-pointer"
          onClick={() => setModalType("signup")}
        >
          Register →
        </p>
      </div>
    </div>
  );
}

export default Login;
