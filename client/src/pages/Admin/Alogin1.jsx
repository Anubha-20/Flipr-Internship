//import React from 'react';
//import Link from "next/link";
const Component=()=> {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#9333ea] via-[#ec4899] to-[#f97316] p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 sm:p-8">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome Back</h2>
            <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account.</p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
              <input id="email" className="w-full rounded-lg py-2 px-4 bg-gray-200 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:bg-gray-300 dark:focus:bg-gray-700" placeholder="name@example.com" required type="email" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">Password</label>
                <a href="#" className="text-sm font-medium text-[#9333ea] hover:underline dark:text-[#ec4899]">
                  Forgot password?
                </a>
              </div>
              <input id="password" className="w-full rounded-lg py-2 px-4 bg-gray-200 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:bg-gray-300 dark:focus:bg-gray-700" required type="password" />
            </div>
            <button className="w-full py-2 px-4 bg-[#9333ea] text-white rounded-lg hover:bg-[#ec4899] focus:outline-none focus:ring-2 focus:ring-[#9333ea]">
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Do not have an account?
            <a href="#" className="font-medium text-[#9333ea] hover:underline dark:text-[#ec4899]">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Component;
