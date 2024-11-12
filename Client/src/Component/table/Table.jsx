import React, { useState } from 'react';
import Header from './Header';
import Filter from './Filter';
//import { mockData } from './data';
import AppointmentTable from './Appointments';
 const mockData = [
    {
      id: 1,
      name: "Olivia Rhye",
      type: "Super",
      previousAppointment: "May 8, 2024",
      status: "Attended",
      nextAppointment: "July 13, 2024",
    },
    {
      id: 2,
      name: "Phoenix Baker",
      type: "Reviewing Problem",
      previousAppointment: "Feb 12, 2024",
      status: "No Appointment",
      nextAppointment: "",
    },

    {
        id: 3,
        name: "Olivia Rhye",
        type: "Super",
        previousAppointment: "May 8, 2024",
        status: "Attended",
        nextAppointment: "July 13, 2024",
      },
      {
        id: 4,
        name: "Phoenix Baker",
        type: "Reviewing Problem",
        previousAppointment: "Feb 12, 2024",
        status: "No Appointment",
        nextAppointment: "",
      },

      {
        id: 5,
        name: "Olivia Rhye",
        type: "Super",
        previousAppointment: "May 8, 2024",
        status: "Missed",
        nextAppointment: "July 13, 2024",
      },
      {
        id: 6,
        name: "Phoenix Baker",
        type: "Reviewing Problem",
        previousAppointment: "Feb 12, 2024",
        status: "No Appointment",
        nextAppointment: "",
      },
  ];
const Table = () => {
  const [search , setSearch] = useState('')
  const [status , setStatus] = useState('');
  const filterdata = mockData.filter((patient) => patient.name.includes(search) &&  patient.status.includes(status));
    return (
        <div className="flex flex-col mt-4 justify-center bg-slate-100 shadow-lg rounded-lg w-[96vw] mx-auto">
            <Header setSearch = {setSearch} />
            <Filter setStatus = {setStatus} />
            <AppointmentTable data={filterdata} />
        </div>
    );
};

export default Table;
