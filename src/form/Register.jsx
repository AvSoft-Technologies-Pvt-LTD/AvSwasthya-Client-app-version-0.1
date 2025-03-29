
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../context-api/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  role: "",
  gender: "",
  email: "",
  password: "",
};

const formReducer = (state, action) => ({ ...state, [action.name]: action.value });

const RegistrationForm = () => {
  const [formData, dispatchForm] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    dispatchForm({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) return;
  
    try {
      const response = await dispatch(registerUser(formData)).unwrap();
      console.log("Registration successful:", response);
  
      // Convert role to lowercase to match dropdown value storage
      const userRole = formData.role.toLowerCase();
      const redirectPath = userRole === "patient" ? "/healthcard" : "/login";
      
      console.log("Navigating to:", redirectPath);
      
      // Ensure state updates properly before navigating
      setTimeout(() => navigate(redirectPath), 100);
    } catch (error) {
      console.error("Registration failed:", error);
      alert(error.message || "Registration failed. Please try again.");
    }
  };
  
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-cyan-800">AV Swasthya</h2>
        <p className="text-center text-gray-600 mb-4">Join us for seamless healthcare services</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { name: "firstName", type: "text", placeholder: "First Name" },
            { name: "lastName", type: "text", placeholder: "Last Name" },
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="p-2 bg-gray-50 border border-gray-300 rounded w-full focus:ring-2 focus:ring-teal-300"
              />
              {errors[field.name] && <p className="text-red-500 text-xs">{errors[field.name]}</p>}
            </div>
          ))}

          {[
            { name: "role", options: ["Select Role", "Patient", "Doctor", "Pharmacist", "Lab Technician", "Hospital Admin"] },
            { name: "gender", options: ["Select Gender", "Male", "Female", "Other"] },
          ].map((select) => (
            <div key={select.name}>
              <select
                name={select.name}
                value={formData[select.name]}
                onChange={handleChange}
                className="p-2 bg-gray-50 border border-gray-300 rounded w-full focus:ring-2 focus:ring-teal-300"
              >
                {select.options.map((option, index) => (
                  <option key={index} value={index === 0 ? "" : option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              {errors[select.name] && <p className="text-red-500 text-xs">{errors[select.name]}</p>}
            </div>
          ))}

          {[
            { name: "email", type: "email", placeholder: "Email" },
            { name: "password", type: "password", placeholder: "Password" },
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="p-2 bg-gray-50 border border-gray-300 rounded w-full focus:ring-2 focus:ring-teal-300"
              />
              {errors[field.name] && <p className="text-red-500 text-xs">{errors[field.name]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full p-2 bg-cyan-500 text-white rounded-3xl text-sm font-semibold hover:bg-teal-600 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3 text-gray-600 text-sm">
          Already have an account? <a href="/login" className="text-teal-500 font-semibold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;