import { useState, useEffect } from "react";
import { Heart, Activity, Stethoscope, Pill, Syringe, Thermometer } from "lucide-react";

const AVCard = ({ initialName, initialCardNumber, initialGender, initialPhoneNumber, initialPhotoUrl = "/default-avatar.png" }) => {
  const [formData, setFormData] = useState({
    name: initialName,
    cardNumber: initialCardNumber,
    gender: initialGender,
    phoneNumber: initialPhoneNumber,
    photoUrl: initialPhotoUrl,
  });

  // Update state when props change
  useEffect(() => {
    setFormData({
      name: initialName,
      cardNumber: initialCardNumber,
      gender: initialGender,
      phoneNumber: initialPhoneNumber,
      photoUrl: initialPhotoUrl,
    });
  }, [initialName, initialCardNumber, initialGender, initialPhoneNumber, initialPhotoUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-[350px] h-[250px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 relative group backdrop-blur-md ">
  
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <Heart className="absolute top-4 right-4 w-5 h-5 text-gray-500 animate-float" />
        <Activity className="absolute bottom-6 left-6 w-6 h-6 text-gray-500 animate-float" />
        <Stethoscope className="absolute top-16 right-16 w-8 h-8 text-gray-500 animate-float" />
        <Pill className="absolute bottom-16 right-6 w-5 h-5 text-gray-500 animate-float" />
        <Syringe className="absolute top-24 left-10 w-6 h-6 text-gray-500 animate-float" />
        <Thermometer className="absolute bottom-10 right-24 w-6 h-6 text-gray-500 animate-float" />
      </div>

      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl" />

      {/* Main Content */}
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-start gap-4">
          {/* Profile Photo */}
          <div className="relative group-hover:scale-110 transition-transform duration-300">
            <img
              src={formData.photoUrl}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg"
            />
          </div>

          {/* Form Fields */}
          <div className="flex-1 space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent text-lg font-semibold text-white placeholder-gray-400 outline-none border-b border-transparent focus:border-gray-400 transition-colors"
              placeholder="Enter Name"
            />
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-400 outline-none border-b border-transparent focus:border-gray-400 transition-colors"
              placeholder="Card Number"
            />
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-400 outline-none border-b border-transparent focus:border-gray-400 transition-colors"
              placeholder="Gender"
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-400 outline-none border-b border-transparent focus:border-gray-400 transition-colors"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-right ml-auto">
            <div className="text-gray-300 font-bold text-sm tracking-wide">AV SWASTHYA</div>
            <div className="text-[10px] text-gray-400">Healthcare Partner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AVCard;
