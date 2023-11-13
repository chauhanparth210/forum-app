import { useState } from "react";
import Main from "./components/Main";
import { UserContext } from "./context/UserContext";
import { User } from "./api";

function App() {
  const [user, setUser] = useState<User>();

  return (
    <div className="container mx-auto px-5 py-8 flex flex-wrap flex-col text-custom-black">
      <UserContext.Provider value={{ user, setUser }}>
        <Main />
      </UserContext.Provider>
    </div>
  );
}

export default App;
