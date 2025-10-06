import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminHandlers from "./pages/AdminHandlers1";   // ✅ New page
import AdminReports from "./pages/AdminReports"; 
function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      ✅ Welcome to Admin Dashboard
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/handlers" element={<AdminHandlers />} />
        <Route path="/reports" element={<AdminReports />} />
      </Routes>
    </BrowserRouter>
  );
}