import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationForm from "./form/Register";
import LoginForm from "./form/Login";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import Healthcard from "./components/Healthcard";
import Home from "./pages/Home";

import PdashboardRoutes from "./pages/layouts/menu/PatientDashboard/PdashboardRoutes";

const PrivateRoute = ({ element }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/healthcard" element={<Healthcard/>} />
        {/* Dashboard Layout Wrapping All Private Routes */}
        <Route path="/dashboard/*" element={<PrivateRoute element={<DashboardLayout />} />}>
          <Route index element={<PdashboardRoutes/>} />
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

