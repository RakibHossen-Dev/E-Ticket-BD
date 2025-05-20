"use client";
import { FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="md:w-1/2 hidden bg-[#00026e] md:flex items-center justify-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center p-4">
          The Easiest Way to Create Events and Sell More Tickets Online
        </h2>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          <h2 className="text-xl font-semibold mb-6">
            Create your E-TicketBD account
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="name"
                placeholder="Enter your name"
                className="w-full border rounded px-4 py-2 focus:outline-none"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded px-4 py-2 focus:outline-none"
              />
            </div>
            {/* Photo */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Image
              </label>
              <input
                type="file"
                className="w-full border rounded px-4 py-2 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border rounded px-4 py-2 pr-10 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#00026e] text-white py-2 rounded flex items-center justify-center gap-2"
            >
              Create an Account <FaSignInAlt />
            </button>
          </form>
          {/* Sign up Link */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?
            <Link href="/register" className="text-[#00026e] font-semibold">
              Sign in
            </Link>
          </p>

          {/* Footer */}
          <p className="mt-4 text-xs text-center text-gray-400">
            © 2025, E-TicketBD. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
