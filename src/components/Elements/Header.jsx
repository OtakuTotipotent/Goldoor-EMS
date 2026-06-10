const Header = ({ data }) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b border-gray-400/10">
        <h1 className="leading-tight">
          Hello,
          <br />
          <span className="text-2xl text-emerald-500">{data.firstName}</span>
          👋
        </h1>
        <button className="cursor-pointer border px-2.5 py-1 rounded-lg opacity-70 text-red-400 border-red-400 hover:opacity-50 transition-opacity">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
