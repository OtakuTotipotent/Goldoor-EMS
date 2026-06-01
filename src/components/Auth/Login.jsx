const Login = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Hello beloved people!");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 px-8 py-12 rounded-lg">
        {/* Auth Form */}
        <form
          className="flex flex-col items-center justify-center gap-6"
          onSubmit={(e) => {
            handleLoginSubmit(e);
          }}
        >
          {/* Fields */}
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
          {/* Buttons */}
          <div className="mt-4 w-full flex gap-3 px-2">
            <button className="flex-1 py-1 border border-emerald-400 text-emerald-400 text-sm rounded-lg hover:opacity-70 cursor-pointer transition-colors duration-200">
              Log in
            </button>
            <button className="flex-1 py-1 border border-gray-400 text-gray-400 text-sm rounded-lg hover:opacity-70 cursor-pointer transition-colors duration-200">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
