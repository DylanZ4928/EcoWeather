import React from "react";
import Main from "./pages/Main";
import AdminLogin from "./pages/admin/AdminLogin";
import NewAdmin from "./pages/admin/NewAdmin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ChangeLocation from "./pages/admin/ChangeLocation";
import NewEvent from "./pages/admin/NewEvent";
import LocationChangeSuccess from "./pages/admin/LocationChangeSuccess";
import NewEventSuccess from "./pages/admin/NewEventSuccess";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./pages/utils/background";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Background />
          <Routes>
            <Route path="/" element={<Navigate to="/Main" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/NewAdmin" element={<NewAdmin />} />
            <Route path="/ChangeLocation" element={<ChangeLocation />} />
            <Route path="/NewEvent" element={<NewEvent />} />
            <Route
              path="/LocationChangeSuccess"
              element={<LocationChangeSuccess />}
            />
            <Route path="/NewEventSuccess" element={<NewEventSuccess />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
