import { useState } from "react";
import { Modal } from "react-responsive-modal";
import Button from "./Button";
import Login from "./Login";

type HeaderProps = {
  username: string;
};

function Header({ username }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-end">
        <Button className="px-9 form-input">Login</Button>
        <Button className="px-9 form-input ml-4">Signup</Button>
      </div>
      <h1 className="font-medium text-3xl text-custom-gray">
        Hello {username}
      </h1>
      <h5 className="mt-1">
        How are you doing today? Would you like to share something with the
        community 🤗
      </h5>
      <Modal
        classNames={{
          overlay: "custom-overlay",
          modal: "custom-modal",
        }}
        open={open}
        onClose={() => setOpen(false)}
        closeIcon={
          <div className="h-8 w-8 bg-custom-dark-black text-white flex justify-center content-center rounded-[50%]">
            <span className="material-symbols-outlined mt-1">close</span>
          </div>
        }
        center
      >
        <Login />
        <div className="flex pt-3">
          <p className="text-custom-black">Not registered yet?</p>
          <p className="text-custom-gray ml-2">Register →</p>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
