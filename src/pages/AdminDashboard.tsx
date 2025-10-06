import  { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";
import HeaderBar from "@/components/HeaderBar";
import HandlerTable from "@/components/HandlerTable";

export default function AdminDashboard() {
  const [handlers, setHandlers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";

  // Fetch all handler applications
  const fetchHandlers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/handlers/list`); // ✅ Correct endpoint
      setHandlers(res.data.handlers || []);
    } catch (err) {
      console.error("Error fetching handlers:", err);
    } finally {
      setLoading(false);
    }
  };

  // Approve or Reject handler
  const updateStatus = async (id: string, action: "approve" | "reject") => {
    try {
      await axios.put(`${baseUrl}/api/admin/handlers/${id}/${action}`);
      fetchHandlers(); // refresh list
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  useEffect(() => {
    fetchHandlers();
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1">
        <HeaderBar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Handler Applications</h1>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <HandlerTable handlers={handlers} updateStatus={updateStatus} />
          )}
        </div>
      </div>
    </div>
  );
}