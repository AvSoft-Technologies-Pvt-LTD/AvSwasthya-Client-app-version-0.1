import React from 'react';
import { FiArrowRight } from "react-icons/fi"; // Import arrow icon

const specialties = [
  { name: "Cardiology", image: "src/assets/Cardio.png" },
  { name: "Gynecology", image: "src/assets/Gyneco.png" },
  { name: "Orthopedics", image: "src/assets/Ortho.png" },
  { name: "Oncology", image: "src/assets/Onco.png" },
  { name: "ENT", image: "src/assets/ENT.png" },
  { name: "Proctology", image: "src/assets/Procto.png" },
  { name: "ENT", image: "src/assets/ENT.png" },
  { name: "Proctology", image: "src/assets/Procto.png" },
];

const Speciality = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <section className="bg-gray-50 py-12 px-6 my-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-cyan-900">
            Our Medical Specialties <p className='bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent'>Expert Care Everywhere</p>
          </h2>
          <p className="text-cyan-900 mt-2">
            With top specialists in various fields, we provide expert healthcare services across multiple locations.
          </p>
        </div>

        <div className="mt-20 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto ">
          {specialties.map((specialty, index) => (
            <div  key={index} 
              className="bg-white shadow-md rounded-xl overflow-hidden flex items-center border border-gray-300 hover:border-cyan-700 p-2 transition-transform transform hover:scale-105 relative group"
            >
              {/* Image on the left */}
              <div className="bg-gray-100 p-1 rounded-lg">
                <img src={specialty.image} alt={specialty.name} className="w-16 h-16 object-contain" />
              </div>

              {/* Name on the right */}
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{specialty.name}</h3>
              </div>

              {/* Arrow Button (Visible on Hover) */}
              <div className=" bg-cyan-200 p-1 rounded-full  absolute right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                <FiArrowRight size={24} className="text-gray-700" />
              </div>
            </div>
          ))}
        </div>

      </section>
      <div className="text-center bg-gray-50">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition">
            Explore All Specialties →
          </button>
        </div>
    </div>
  );
};

export default Speciality;
