import React, { useState } from 'react';
import { RiHospitalLine, RiStethoscopeFill, RiHomeOfficeLine, RiArrowDropDownFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'; 
import logo from '../assets/AV.png';

function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate(); 
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className='bg-white px-6 py-3 text-cyan-700 flex justify-between items-center mx-8 my-5 sticky top-5 rounded-4xl text-lg shadow-lg relative z-50'>
      <div className='flex items-center text-3xl'>
        <img src={logo} className='w-10 h-10 rounded-full' alt='logo' />
        <h1 className='mx-2 font-extrabold flex items-center bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent ml-9'>
          A<p className='text-cyan-900'>v</p>
          <span className='text-xl mt-2'>Swastya</span>
        </h1>
      </div>

      <ul className='flex gap-8 font-medium'>
        <li className='cursor-pointer flex items-center gap-1 '><RiHomeOfficeLine /> Home</li>
        <li
          className='relative cursor-pointer flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-100'
          onClick={() => toggleDropdown('doctors')}
        >
          <RiStethoscopeFill /> Doctors <RiArrowDropDownFill />
          {dropdown === 'doctors' && (
            <ul className='absolute bg-slate-100 text-cyan-950 py-2 px-4 mt-1 rounded shadow-lg w-44 z-20 top-14'>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>General</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Specialists</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Surgeons</li>
            </ul>
          )}
        </li>
        <li
          className='relative cursor-pointer flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-100'
          onClick={() => toggleDropdown('hospitals')}
        >
          <RiHospitalLine /> Hospitals <RiArrowDropDownFill />
          {dropdown === 'hospitals' && (
            <ul className='absolute bg-slate-100 text-cyan-950 py-2 px-4 mt-1  rounded shadow-lg w-44 z-20 top-14 '>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Private</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Government</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Clinics</li>
            </ul>
          )}
        </li>
        <li
          className='relative cursor-pointer flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-100'
          onClick={() => toggleDropdown('services')}
        >
          Services <RiArrowDropDownFill />
          {dropdown === 'services' && (
            <ul className='absolute bg-slate-100 text-cyan-950 py-2 px-4 mt-1 rounded shadow-lg w-44 z-20 top-14'>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Healthcard</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Consultation</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Labs/Scans</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Pharmacy</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Insurance</li>
              <li className='hover:bg-cyan-50  hover:rounded-lg px-2 py-1'>Emergency</li>
            </ul>
          )}
        </li>
      </ul>

      <div className='flex gap-2'>
        <div className='flex gap-2 font-normal'>
          <button
            className='text-cyan-950 rounded-4xl border-2 border-cyan-500 px-4 py-1 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer'
            onClick={() => navigate('/login')} // Navigate to Login
          >
            Login
          </button>
          <button
            className='bg-cyan-700 rounded-4xl text-cyan-50 px-4 py-1 hover:bg-cyan-800 border-cyan-500  cursor-pointer'
            onClick={() => navigate('/register')} // Navigate to Register
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
