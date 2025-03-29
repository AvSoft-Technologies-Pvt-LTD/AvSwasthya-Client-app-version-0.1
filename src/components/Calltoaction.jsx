import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Appointment from "../assets/BKapp.png";

const Calltoaction = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", fullName: "", contact: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "contact" && !/^\d*$/.test(value)) return; 
        setFormData({ ...formData, [name]: value });
    };

    const validateField = (name, value) => {
        let error = "";
        if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email!";
        if (name === "fullName" && value.trim().length < 3) error = "At least 3 letters required!";
        if (name === "contact" && !/^\d{10}$/.test(value)) error = "Enter a 10-digit number!";
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    return (
        <div className="flex justify-center items-center bg-gray-50 mb-24">
            <div className="w-7/9 h-9/10 rounded-3xl shadow-2xl border-2 border-cyan-500">
                <div className="relative bg-gray-50 p-6 z-10 container mx-auto px-6 py-10 lg:px-12 rounded-3xl">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16">
                        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-9">
                            <img src={Appointment} alt="Book an appointment" className="w-full h-full object-contain rounded-lg" />
                            <div className="flex flex-wrap gap-4 justify-center mt-6">
                                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-2 rounded-3xl font-semibold shadow-md transition" onClick={() => navigate("/register")}>
                                    Generate HealthCard 
                                </button>
                                <button className="border border-cyan-600 text-cyan-600 px-5 py-2 rounded-3xl font-semibold shadow-md transition hover:bg-cyan-100">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
                            <h2 className="text-2xl lg:text-3xl font-bold text-cyan-900">
                                Get expert advice from top doctors anytime,{" "}
                                <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                                    anywhere!
                                </span>
                            </h2>
                            <p className="text-lg text-cyan-950 max-w-lg">
                                Connect with qualified healthcare professionals and receive personalized medical consultation from the comfort of your home.
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-between w-full max-w-lg bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
                                {["Get Consultation", "Book Appointment", "Find Best Doctor", "Get Expert Opinion"].map((text, index) => (
                                    <button
                                        key={index}
                                        className={`flex items-center justify-center px-4 py-2 text-cyan-900 font-medium w-1/2 sm:w-1/4 text-sm transition-all duration-300 
                                        ${index !== 3 ? "border-b sm:border-b-0 sm:border-r border-gray-300" : ""} hover:bg-cyan-100`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {text} <HiArrowRight size={14} />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pr-10 ml-12">
                        <h2 className="text-lg ml-4 mt-6 sm:text-xl font-semibold text-gray-800 text-start mb-4">
                            Book an appointment in <span className="text-cyan-600">3 simple steps</span>
                        </h2>

                        <form className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Email", name: "email", type: "email", icon: <FaEnvelope />, placeholder: "Enter email" },
                                { label: "Full Name", name: "fullName", type: "text", icon: <FaUser />, placeholder: "Enter full name" },
                                { label: "Contact", name: "contact", type: "text", icon: <FaPhoneAlt />, placeholder: "Enter contact", maxLength: 10 }
                            ].map(({ label, name, type, icon, placeholder, maxLength }) => (
                                <div key={name}>
                                    <label className="text-sm p-3 font-medium text-gray-700 flex items-center gap-2">
                                        {icon} {label}
                                    </label>
                                    <input
                                        type={type}
                                        name={name}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        onBlur={(e) => validateField(name, e.target.value)}
                                        maxLength={maxLength}
                                        placeholder={placeholder}
                                        className="w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-cyan-500"
                                    />
                                    <p className="text-red-500 text-xs">{errors[name]}</p>
                                </div>
                            ))}

                            <div className="flex items-end">
                                <button
                                    type="button"
                                    onClick={() => navigate("/register")}
                                    className="w-full sm:w-auto bg-cyan-600 text-white px-3 py-3 rounded-3xl hover:bg-cyan-700 transition"
                                >
                                    Quick Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calltoaction;
