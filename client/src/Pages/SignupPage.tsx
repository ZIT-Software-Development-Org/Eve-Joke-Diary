import React, { useState } from "react";
import axios from "axios";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    //Destructing the name and value from the input
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSignup = async (e) => {
    //Preventing the default behavior of the form
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/signup", formData);
      console.log("Signup Success:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again.");
      //Clearing the form
      setFormData({ username: "", email: "", password: "" });
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">Signup Page</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
