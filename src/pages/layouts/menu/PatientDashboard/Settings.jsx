import { useState } from 'react';
import { FiEdit2, FiUser, FiMail, FiPhone, FiCalendar, FiKey, FiHome, FiMapPin } from 'react-icons/fi';
import { FaIdCard, FaTransgender, FaBriefcaseMedical, FaHeartbeat } from 'react-icons/fa';
import axios from 'axios';

const fields = [
  { key: 'firstName', label: 'First Name', type: 'text', editable: false, icon: <FiUser className="text-gray-400" /> },
  { key: 'lastName', label: 'Last Name', type: 'text', editable: false, icon: <FiUser className="text-gray-400" /> },
  { key: 'aadhar', label: 'Aadharcard number', type: 'text', editable: false, icon: <FaIdCard className="text-gray-400" /> },
  { key: 'email', label: 'Email', type: 'email', editable: true, icon: <FiMail className="text-gray-400" /> },
  { key: 'phone', label: 'Phone', type: 'tel', editable: true, icon: <FiPhone className="text-gray-400" /> },
  { key: 'alternatephone', label: 'Alternate Phone Number', type: 'tel', editable: true, icon: <FiPhone className="text-gray-400" /> },
  { key: 'dob', label: 'Date of Birth', type: 'date', editable: true, icon: <FiCalendar className="text-gray-400" /> },
  { key: 'gender', label: 'Gender', type: 'text', editable: false, icon: <FaTransgender className="text-gray-400" /> },
  { key: 'occupation', label: 'Occupation', type: 'dropdown', editable: true, icon: <FaBriefcaseMedical className="text-gray-400" /> },
  { key: 'bloodGroup', label: 'Blood Group', type: 'dropdown', editable: true, icon: <FaHeartbeat className="text-gray-400" /> },
  { key: 'permanentAddress', label: 'Permanent Address', type: 'text', editable: true, icon: <FiHome className="text-gray-400" /> },
  { key: 'temporaryAddress', label: 'Temporary Address', type: 'text', editable: true, icon: <FiMapPin className="text-gray-400" /> },
  { key: 'password', label: 'Password', type: 'password', editable: true, icon: <FiKey className="text-gray-400" /> },
  { key: 'confirmPassword', label: 'Confirm Password', type: 'password', editable: true, icon: <FiKey className="text-gray-400" /> }
];

const occupationOptions = ["Businessman", "Government", "Corporate Job", "Doctor", "Teacher"];
const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Trupti',
    lastName: 'Chavan',
    aadhar: '6345 7792 XXXX',
    email: 'trupti45@gmail.com',
    phone: '+91 9082640664',
    alternatephone: '',
    dob: '',
    gender: 'Female',
    occupation: '',
    permanentAddress: '',
    temporaryAddress: '',
    bloodGroup: '',
    password: '********',
    confirmPassword: '********',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userData); // To check what data is being submitted
      await axios.put('https://api.example.com/user', userData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderSelectOptions = (options, key) => (
    <select
      name={key}
      value={userData[key]}
      onChange={(e) => setUserData({ ...userData, [key]: e.target.value })}
      className="w-full pl-10 pr-3 py-2 border rounded-md"
    >
      <option value="">Select {key}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2 text-blue-600">
            <FiEdit2 className="w-4 h-4 text-blue-600" />
            <span>Edit</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map(({ key, label, type, editable, icon }) => (
            <div key={key} className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-500">
                  {icon}
                </span>
                {isEditing && type === 'dropdown' ? (
                  key === 'occupation' ? renderSelectOptions(occupationOptions, key)
                  : key === 'bloodGroup' ? renderSelectOptions(bloodGroupOptions, key)
                  : null
                ) : (
                  <input
                    type={type}
                    value={userData[key]}
                    onChange={(e) => setUserData({ ...userData, [key]: e.target.value })}
                    disabled={!isEditing || !editable}
                    className="w-full pl-10 pr-3 py-2 border rounded-md disabled:bg-gray-50"
                  />
                )}
              </div>
            </div>
          ))}

          {isEditing && (
            <div className="col-span-2 flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-white border rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
