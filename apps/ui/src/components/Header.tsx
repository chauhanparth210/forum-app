type HeaderProps = {
  username: string;
};

function Header({ username }: HeaderProps) {
  return (
    <header>
      <h1 className="font-medium text-3xl text-custom-gray">
        Hello {username}
      </h1>
      <h5 className="mt-1">
        How are you doing today? Would you like to share something with the
        community 🤗
      </h5>
    </header>
  );
}

export default Header;
