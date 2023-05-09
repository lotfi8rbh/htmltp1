import React from "react";
import { Routes, Route } from "react-router-dom";

import LPage from "./views/LPage";
import Auth from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import RtlLayout from "./layouts/rtl";
import SIform from "views/auth/SignUpForm";

const App = () => {
  return (
    <Routes>

      <Route path="/sign-up" element={<SIform />} />
      <Route path="auth/*" element={<Auth />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<LPage />} />

    </Routes>
  );
};

export default App;
