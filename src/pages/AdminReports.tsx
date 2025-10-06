// src/pages/ReportsPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ReportsPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseUrl}/api/reports/list`);
        setReports(res.data.reports || []);
      } catch (err) {
        console.error("Error fetching reports:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rescue Reports</h1>
      {loading ? (
        <p>Loading...</p>
      ) : reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        <div className="space-y-4">
          {reports.map((r) => (
            <Card key={r.id} className="p-4 shadow-md">
              <h2 className="font-semibold">Snake: {r.snake_name}</h2>
              <p>Handler ID: {r.handler_id}</p>
              <p>Status: <Badge variant={r.rescue_status === "completed" ? "success" : "warning"}>{r.rescue_status}</Badge></p>
              <p className="text-sm text-gray-500">Reported: {new Date(r.created_at).toLocaleString()}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}