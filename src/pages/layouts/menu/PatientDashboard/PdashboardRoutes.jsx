import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../../DashboardLayout";
import Dashboard from "./Dashboard";
import MedicalRecord from "./MedicalRecord";
import PatientAppointments from "./Settings";
import Settings from "./Settings";

const PdashboardRoutes = () => {
  return (

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="medical-record" element={<MedicalRecord />} />
        <Route path="calendar" element={<PatientAppointments />} />
        <Route path="settings" element={<Settings />} />
        {/* Catch-all 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
   
  );
};

export default PdashboardRoutes;
