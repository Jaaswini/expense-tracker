import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation or API call here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="bg-[#F2F3F5] h-full w-full p-10 ">
      <div className="flex flex-col gap-3 bg-white shadow-xl p-10 rounded-lg">
        <div className="text-lg font-semibold">Login to Your Account</div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-left">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-1 rounded-lg p-2"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-left">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-1 rounded-lg p-2"
            />
          </div>
          <div
            // type="submit"
            className="bg-blue-600 rounded-lg py-2 text-white font-semibold cursor-pointer transition-all duration-100 ease-in hover:bg-blue-700"
          >
            Login
          </div>
        </form>
        <a
          href="/"
          className="text-blue-500 transition-all duration-100 ease-in cursor-pointer hover:underline"
        >
          Forgot password?
        </a>
        <div>
          Don't have an account?{" "}
          <a
            href="/"
            className="text-blue-500 transition-all duration-100 ease-in cursor-pointer hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
