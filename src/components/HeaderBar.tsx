// src/components/HeaderBar.tsx
export default function HeaderBar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">VenomVision Admin</h1>
      <button className="text-sm bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded">
        Logout
      </button>
    </div>
  );
}