import React from "react";
import { Search, Bell, User } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="sticky top-0 mt-2 z-50 bg-gray-50 py-2 mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-semibold">
            {user?.firstName || "Guest"} {user?.lastName || ""}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-2 w-64 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500"
              />
            </div>
            <Bell className="h-6 w-6 text-gray-500 hover:text-cyan-600 cursor-pointer " />
            <div className="h-10 w-10 rounded-full bg-slate-200  border flex items-center justify-center cursor-pointer hover:bg-cyan-200">
              <User className="h-5 w-5 text-cyan-950" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
