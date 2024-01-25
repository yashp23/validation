import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.value]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      methos: "post",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(res);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h1 className=" text-4xl text-center font-semibold p-5">SignUp</h1>
      <form
        action="post"
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className=" bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className=" bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className=" bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />

        <button className=" bg-slate-600 p-3 rounded-lg text-white font-semibold hover:opacity-95 ">
          Sign-up
        </button>
      </form>
      <div className=" flex justify-center my-4 gap-3">
        <p>Have an account ?</p>
        <Link to="/signin" className=" text-blue-800 font-semibold">
          SignIn
        </Link>
      </div>
    </div>
  );
}
