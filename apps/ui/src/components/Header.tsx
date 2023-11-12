import { useState } from "react";
import { Modal } from "react-responsive-modal";
import Button from "./Button";
import Login from "./Login";
import Signup from "./Signup";

type HeaderProps = {
  username: string;
};

function Header({ username }: HeaderProps) {
  const [isModalOpen, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  return (
    <header>
      <div className="flex justify-end">
        <Button
          className="px-9 form-input"
          onClick={() => {
            setOpen(true);
            setModalType("login");
          }}
        >
          Login
        </Button>
        <Button
          className="px-9 form-input ml-4"
          onClick={() => {
            setOpen(true);
            setModalType("signup");
          }}
        >
          Signup
        </Button>
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
        open={isModalOpen}
        onClose={() => setOpen(false)}
        closeIcon={
          <div className="h-8 w-8 bg-custom-dark-black text-white flex justify-center content-center rounded-[50%]">
            <span className="material-symbols-outlined mt-1">close</span>
          </div>
        }
        center
      >
        {modalType === "login" ? (
          <Login setModalType={setModalType} />
        ) : (
          <Signup setModalType={setModalType} />
        )}
      </Modal>
    </header>
  );
}

export default Header;
