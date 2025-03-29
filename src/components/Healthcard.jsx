import React, { useState, useEffect } from "react";
import AVCard from "./microcomponents/AVCard";

function Healthcard() {
  const [healthId, setHealthId] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");


  useEffect(() => {
    if (gender && state && city && dob) {
      setHealthId(`AV${gender}${state}${city}${dob.replace(/-/g, "")}`);
    }
  }, [gender, state, city, dob]);

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center bg-gray-100 p-4 space-y-6 md:space-y-0 md:space-x-6">
      {/* AVCard Component */}
      <div className="w-1/2 h-screen  flex flex-col justify-center items-center">
        <AVCard
          initialName={`${firstName} ${lastName}`}
          initialCardNumber={healthId}
          initialGender={gender}
          initialPhoneNumber="" 
          initialPhotoUrl="/default-avatar.png"
        />
      </div>

      {/* Health Card Registration Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          Health Card Registration
        </h2>
        <p className="text-center text-gray-700 font-medium">{healthId}</p>
        
        <form className="space-y-3">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 w-full border rounded"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 w-full border rounded"
            onChange={(e) => setLastName(e.target.value)}
          />

          <select
            className="p-2 w-full border rounded"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>

          <select
            className="p-2 w-full border rounded"
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="MH">Maharashtra</option>
            <option value="DL">Delhi</option>
            <option value="KA">Karnataka</option>
          </select>

          <select
            className="p-2 w-full border rounded"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="CSTM">Mumbai (CSTM)</option>
            <option value="NDLS">New Delhi (NDLS)</option>
            <option value="SBC">Bangalore (SBC)</option>
          </select>

          <input
            type="date"
            className="p-2 w-full border rounded"
            onChange={(e) => setDob(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Healthcard;
