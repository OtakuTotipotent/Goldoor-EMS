const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b border-gray-400/10">
        <h1 className="leading-tight">
          Hello,
          <br />
          <span className="text-2xl text-emerald-500">User</span>
          👋
        </h1>
        <button className="cursor-pointer border border-white px-2.5 py-1 rounded-lg opacity-70 hover:text-red-400 hover:border-red-400 transition-colors">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
