import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <h1 className="font-semibold text-emerald-400 cursor-default select-none underline underline-offset-10">
        EMS: All in One System!
      </h1>
      <div className="border-2 border-emerald-600 px-8 py-12 rounded-lg">
        {/* Auth Form */}
        <form
          className="flex flex-col items-center justify-center gap-6"
          onSubmit={(e) => {
            formHandler(e);
          }}
        >
          {/* Fields */}
          <input
            className={`outline-none border-b  ${email.trim() === "" ? "text-gray-400 border-gray-400" : "text-emerald-400 border-emerald-400"} px-3 py-1.5 hover:border-emerald-400 focus:border-emerald-400 focus:text-emerald-400 transition-colors duration-200`}
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className={`outline-none border-b ${password.trim() === "" ? "text-gray-400 border-gray-400" : "text-emerald-400 border-emerald-400"} px-3 py-1.5 hover:border-emerald-400 focus:border-emerald-400 focus:text-emerald-400 transition-colors duration-200`}
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
