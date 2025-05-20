import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      {/* Divider */}
      <div className="my-6 flex items-center justify-center">
        <span className="border-t border-gray-300 w-full"></span>
        <span className="mx-4 text-gray-400">or</span>
        <span className="border-t border-gray-300 w-full"></span>
      </div>

      {/* Social Buttons */}
      <div className="space-y-3">
        <button className="w-full border rounded py-2 flex items-center justify-center gap-2">
          <FaGoogle className="text-red-500" /> Sign in with Google
        </button>
        <button className="w-full border rounded py-2 flex items-center justify-center gap-2">
          <FaFacebookF className="text-blue-600" /> Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
