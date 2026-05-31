const Login = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Hello beloved people!");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 px-8 py-12 rounded-lg">
        <form
          className="flex flex-col items-center justify-center gap-6"
          onSubmit={(e) => {
            handleLoginSubmit(e);
          }}
        >
          <input
            className="outline-none border-b text-gray-400 border-gray-400 px-3 py-1.5 hover:border-emerald-400 focus:border-emerald-400 focus:text-emerald-400 transition-colors duration-200"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="outline-none border-b text-gray-400 border-gray-400 px-3 py-1.5 hover:border-emerald-400 focus:border-emerald-400 focus:text-emerald-400 transition-colors duration-200"
            type="password"
            placeholder="Enter password"
            required
          />
          <button className="mt-4 border border-gray-400 text-gray-400 text-sm px-8 py-1.5 rounded-lg hover:opacity-70 hover:text-emerald-400 hover:border-emerald-400 cursor-pointer transition-colors duration-200">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
