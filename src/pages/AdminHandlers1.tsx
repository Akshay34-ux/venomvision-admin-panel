// src/pages/HandlersPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HandlersPage() {
  const [handlers, setHandlers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchHandlers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseUrl}/api/handlers/active`);
        setHandlers(res.data.handlers || []);
      } catch (err) {
        console.error("Error fetching handlers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHandlers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🐍 Active Snake Handlers</h1>

      {loading ? (
        <p className="text-gray-500">Loading handlers...</p>
      ) : handlers.length === 0 ? (
        <p className="text-gray-600">⚠️ No active handlers found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {handlers.map((h) => (
            <Card
              key={h.id}
              className="p-5 rounded-xl shadow-md hover:shadow-xl transition bg-white border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-lg">{h.name}</h2>
                <Badge variant="success" className="capitalize">
                  {h.status}
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-medium">📧 Email:</span> {h.email}
                </p>
                <p>
                  <span className="font-medium">📞 Phone:</span> {h.phone}
                </p>
                <p>
                  <span className="font-medium">🎯 Experience:</span>{" "}
                  {h.experience || "N/A"}
                </p>
                <p>
                  <span className="font-medium">🐍 Specialization:</span>{" "}
                  {h.specialization || "N/A"}
                </p>
                <p>
                  <span className="font-medium">📍 Location:</span>{" "}
                  {h.location || "N/A"}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}