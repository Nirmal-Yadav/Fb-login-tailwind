import React from "react";

const Page = () => {
  return (
    <div className="container  flex mx-auto items-center justify-center">
      <div className="left mt-16 w-2/5 mx-4 ">
        <img
          className="w-64 mx-5"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt=""
        ></img>
        <p className="text-3xl mx-5  ">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="right mt-36 flex flex-col bg-white p-8 rounded-xl w-1/4 text-lg  shadow-lg ">
        <input
          className="px-4 h-12 my-2 outline-blue-600 border border-1 border-gray-300 rounded-lg"
          type="text"
          placeholder="email address or phone number"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 h-12 my-2 outline-blue-600 border border-1 border-gray-300 rounded-lg"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold">
          Log In
        </button>
        <span className="text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline">
          {" "}
          Forgotten Password?
        </span>
        <hr className="my-2" />
        <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit">
          Create New Account
        </button>
        <span className="absolute bottom-44 text-sm">
          <span className=" font-bold hover:underline cursor-pointer">
            Create a page
          </span>
          {" for a celebrity, brand or business."}
        </span>
      </div>
    </div>
  );
};

export default Page;
