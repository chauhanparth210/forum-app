import { Dispatch, SetStateAction, createContext } from "react";
import { User } from "../api";

type UserContextType = {
  user: User | undefined | null;
  setUser?: Dispatch<SetStateAction<User | undefined>>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
});
