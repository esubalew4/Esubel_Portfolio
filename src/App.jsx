import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import MainPage from "./Pages/MainPage";
import AddProject from "./admin/AddProject";
import ProjectList from "./admin/ProjectList";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Navigate to="projectlist" replace />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="projectlist" element={<ProjectList />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
