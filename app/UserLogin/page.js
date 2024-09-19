import React from "react";

export default function UserLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-darkBlue mb-8">
          Login
        </h2>

        {/* Email Input */}
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <hr className="w-full border-gray-300" />
          <span className="absolute bg-white px-4 text-sm text-gray-500">
            OR
          </span>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/UserSignUp"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
