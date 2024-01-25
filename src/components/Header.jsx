import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" bg-slate-200">
      <div className=" flex justify-between max-w-6xl items-center mx-auto p-4">
        <h1 className="text-black font-bold ">Auth App</h1>
        <ul className="flex space-x-6">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/signin">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
