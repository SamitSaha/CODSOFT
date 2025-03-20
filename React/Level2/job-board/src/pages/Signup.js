const Signup = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Signup</h2>
        <input type="text" placeholder="Name" className="border p-2 w-full my-2" />
        <input type="email" placeholder="Email" className="border p-2 w-full my-2" />
        <input type="password" placeholder="Password" className="border p-2 w-full my-2" />
        <button className="bg-green-500 px-6 py-3 text-white rounded">Sign Up</button>
      </div>
    );
  };
  
  export default Signup;
  