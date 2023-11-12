import { useContext, useState } from "react";
import Button from "./Button";
import { UserContext } from "../context/UserContext";
import { LoginUser } from "../api";

type LoginProps = {
  setModalType: (type: string) => void;
  setOpen: (type: boolean) => void;
};

function Login({ setModalType, setOpen }: LoginProps) {
  const userContext = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const isEmail = username.includes("@");
      const user = await LoginUser({
        ...(isEmail ? { email: username } : { username }),
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
        <h3 className="text-custom-black text-sm">WELCOME BACK</h3>
        <h3 className="text-custom-gray text-lg pt-2">Log into your account</h3>
      </div>
      <form className="w-100 pt-12" onSubmit={handleLogin}>
        <div>
          <label className="text-custom-gray">Email or username</label>
          <br />
          <input
            placeholder="Enter your email or username"
            className="bg-custom-dark-black rounded w-full"
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
