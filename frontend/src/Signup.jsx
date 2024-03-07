import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    axios
      .post("http://localhost:3001/signup", formData)
      .then((response) => {
        if (response.status === 201) {
          nav("/posts");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong Email or password");
      });
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      profilePicture: "",
      termsAccepted: false,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-indigo-400 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block font-medium mb-1 text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field bottom-3"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium mb-1 text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-medium mb-1 text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label
              htmlFor="termsAccepted"
              className="font-medium text-gray-700"
            >
              I accept the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="btn-submit bg-blue-400 px-5 py-2 rounded-xl text-white hover:bg-blue-500 w-full mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
