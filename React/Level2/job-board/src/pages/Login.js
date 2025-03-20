// const Login = () => {
//     return (
//       <div className="p-6">
//         <h2 className="text-2xl font-bold">Login</h2>
//         <input type="text" placeholder="Email" className="border p-2 w-full my-2" />
//         <input type="password" placeholder="Password" className="border p-2 w-full my-2" />
//         <button className="bg-blue-500 px-6 py-3 text-white rounded">Login</button>
//       </div>
//     );
//   };
  
//   export default Login;
  
import React, { useState } from "react";
import { login } from "../api/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem("token", data.token);
      alert("Login Successful");
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
