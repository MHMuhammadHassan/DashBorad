import React from 'react';

const AppointmentTable = ({ data }) => {
    return (
        <div className="overflow-x-auto max-w-full">
            <table className="border rounded-lg shadow-sm w-full sm:w-auto m-2">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="px-4 py-2 border text-left">Name</th>
                        <th className="px-4 py-2 border text-left">Type</th>
                        <th className="px-4 py-2 border text-left">Previous Appointment</th>
                        <th className="px-4 py-2 border text-left">Status</th>
                        <th className="px-4 py-2 border text-left">Next Appointment</th>
                        <th className="px-4 py-2 border text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border">{item.name}</td>
                            <td className="px-4 py-2 border">
                                <span className={`px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                                    {item.type}
                                </span>
                            </td>
                            <td className="px-4 py-2 border">{item.previousAppointment}</td>
                            <td className="px-4 py-2 border">
                                <span className={`px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td className="px-4 py-2 border">{item.nextAppointment || 'N/A'}</td>
                            <td className="px-4 py-2 border text-center">
                                <button className="text-blue-500 mr-2">Edit</button>
                                <button className="text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Helper functions to determine color classes
function getTypeColor(type) {
    switch (type) {
        case 'Super':
            return 'bg-blue-200 text-blue-800';
        case 'Reviewing Problem':
            return 'bg-yellow-200 text-yellow-800';
        default:
            return 'bg-gray-200 text-gray-800';
    }
}

function getStatusColor(status) {
    switch (status) {
        case 'Attended':
            return 'bg-green-200 text-green-800';
        case 'Missed':
            return 'bg-red-200 text-red-800';
        case 'Cancelled':
            return 'bg-gray-200 text-gray-800';
        case 'No Appointment':
            return 'bg-orange-200 text-orange-800';
        default:
            return 'bg-gray-200 text-gray-800';
    }
}

export default AppointmentTable;
