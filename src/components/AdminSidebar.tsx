import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-xl font-bold mb-8">⚡ Admin Panel</h1>
      <nav className="space-y-4">
        <Link to="/admin-dashboard" className="block hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/handlers" className="block hover:text-gray-300">
          Handlers
        </Link>
        <Link to="/reports" className="block hover:text-gray-300">
          Reports
        </Link>
      </nav>
    </div>
  );
}