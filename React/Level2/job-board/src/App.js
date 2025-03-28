import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import JobDetail from "./pages/JobDetail";
import EmployerDashboard from "./pages/EmployerDashboard";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App;