import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import AddStudent from "../pages/AddStudent";
import EditStudent from "../pages/EditStudent";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;