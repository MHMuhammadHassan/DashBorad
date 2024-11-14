import React, { useState } from 'react';

const AppointmentFoam = ({
  showModal,
  edit,
  name: initialName = '',
  type: initialType = '',
  previousAppointment: initialPreviousAppointment = '',
  status: initialStatus = '',
  nextAppointment: initialNextAppointment = '',
  onSubmit,
  onClose,
}) => {
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [previousAppointment, setPreviousAppointment] = useState(initialPreviousAppointment);
  const [status, setStatus] = useState(initialStatus);
  const [nextAppointment, setNextAppointment] = useState(initialNextAppointment);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, type, previousAppointment, status, nextAppointment });
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">{edit ? 'Edit Appointment' : 'Add Appointment'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="type">
                  Type
                </label>
                <input
                  type="text"
                  id="type"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="previousAppointment">
                  Previous Appointment
                </label>
                <input
                  type="date"
                  id="previousAppointment"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={previousAppointment}
                  onChange={(e) => setPreviousAppointment(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="status">
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="nextAppointment">
                  Next Appointment
                </label>
                <input
                  type="date"
                  id="nextAppointment"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={nextAppointment}
                  onChange={(e) => setNextAppointment(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  {edit ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentFoam;
