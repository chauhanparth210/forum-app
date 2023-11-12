import Button from "./Button";

function Login() {
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
    </div>
  );
}

export default Login;
