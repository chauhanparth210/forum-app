import { useContext, useState } from "react";
import Button from "./Button";
import { signUpUser } from "../api";
import { UserContext } from "../context/UserContext";

type SignupProps = {
  setModalType: (type: string) => void;
  setOpen: (type: boolean) => void;
};

function Signup({ setModalType, setOpen }: SignupProps) {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = await signUpUser({
        email,
        username,
        password,
      });
      localStorage.setItem("jwt-token", user?.jwt);
      if (userContext?.setUser) {
        userContext.setUser(user);
      }
      setOpen(false);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="text-custom-gray">
      <div className="text-center">
        <h3 className="text-custom-black text-sm">SIGN UP</h3>
        <h3 className="text-custom-gray text-lg pt-2">
          Create an account to continue
        </h3>
      </div>
      <form className="w-100 pt-12" onSubmit={handleSignUp}>
        <div>
          <label className="text-custom-gray">Email</label>
          <br />
          <input
            placeholder="Enter your email"
            className="bg-custom-dark-black rounded w-full"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="pt-4">
          <label className="text-custom-gray">Username</label>
          <br />
          <input
            placeholder="Enter your username"
            className="bg-custom-dark-black rounded w-full"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="pt-4">
          <label className="text-custom-gray">Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="bg-custom-dark-black rounded w-full"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
