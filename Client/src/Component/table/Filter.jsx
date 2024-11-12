import React, { useState } from 'react';

const Filter = ({ setStatus }) => {
  const [activeTab, setActiveTab] = useState("General Info");

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="flex justify-between border bg-slate-50 max-w-[94vw] rounded-lg shadow-lg w-full m-2 mt-0 p-2">
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab("General Info")}
          className={`px-4 py-2 rounded ${
            activeTab === "General Info" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
          }`}
        >
          General Info
        </button>
        <button
          onClick={() => setActiveTab("Monitoring Status")}
          className={`px-4 py-2 rounded ${
            activeTab === "Monitoring Status" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
          }`}
        >
          Monitoring Status
        </button>
      </div>

      <div className="flex space-x-4">
        <select onChange={handleStatus} className="px-2 py-1 h-[5vh] border rounded bg-white text-gray-700">
          <option value="">Status</option>
          <option value="Attended">Attended</option>
          <option value="Missed">Missed</option>
          <option value="No Appointment">No Appointment</option>
        </select>
        
        <select className="px-2 py-1 h-[5vh] border rounded bg-white text-gray-700">
          <option disabled>Sort By</option>
          <option value="Name">Name</option>
          <option value="Date">Date</option>
        </select>
        
        <select className="px-2 py-1 h-[5vh] border rounded bg-white text-gray-700">
          <option disabled>Bulk Action</option>
          <option value="Delete">Delete</option>
          <option value="Edit">Edit</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
