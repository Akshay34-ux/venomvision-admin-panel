// src/components/HandlerTable.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandlerTable({ handlers, updateStatus }: any) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Specialization</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {handlers.map((h: any) => (
            <tr key={h.id} className="border-t hover:bg-gray-50 transition">
              <td className="p-3 font-medium">{h.name}</td>
              <td className="p-3">{h.email}</td>
              <td className="p-3">{h.phone}</td>
              <td className="p-3">{h.experience || "-"}</td>
              <td className="p-3">{h.specialization || "-"}</td>
              <td className="p-3">
                <Badge
                  className={
                    h.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : h.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                >
                  {h.status}
                </Badge>
              </td>
              <td className="p-3 text-center space-x-2">
                {h.status === "pending" ? (
                  <>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => updateStatus(h.id, "approve")}
                    >
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => updateStatus(h.id, "reject")}
                    >
                      Reject
                    </Button>
                  </>
                ) : (
                  <span className="text-gray-400 italic">No actions</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}