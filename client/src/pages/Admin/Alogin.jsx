//import React from 'react';

const alogin=()=> {
  return (
   <>
   
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6366F1] to-[#EC4899]">
      <div className="max-w-md w-full bg-white bg-opacity-80 rounded-2xl p-6 backdrop-blur-lg dark:bg-gray-900/80">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Enter your credentials to access your account.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-gray-700 dark:text-gray-300">Username</label>
            <input className="w-full rounded-lg py-2 px-4 bg-gray-200 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:bg-gray-300 dark:focus:bg-gray-700" id="username" placeholder="Enter your username" type="text" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</label>
            <input className="w-full rounded-lg py-2 px-4 bg-gray-200 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:bg-gray-300 dark:focus:bg-gray-700" id="password" placeholder="Enter your password" type="password" />
          </div>
          <button className="w-full py-2 px-4 bg-[#6366F1] text-white rounded-lg hover:bg-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
            Login
          </button>
        </div>
      </div>
    </div>
   </>
  );
}
export default alogin;
