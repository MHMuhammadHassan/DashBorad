import React, { useState ,useEffect } from 'react';
import Header from './Header';
import Filter from './Filter';
//import { mockData } from './data';
import AppointmentTable from './Appointments';
import axios from 'axios';

 
const Table = () => {
  const [search , setSearch] = useState('')
  const [status , setStatus] = useState('');
 const [data, setdata] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get('http://localhost:5000/dashborad/getappointment');
        setdata(res.data);
        console.log('hassan', data.data[0]);
        
      } catch (err) {
        setError(err.message || 'Something went wrong');
        console.error(err);
      }
    };

    getdata();
  }, data)
  const filterdata = data.filter((patient) => patient.name.includes(search) &&  patient.status.includes(status));
    return (
        <div className="flex flex-col mt-4 justify-center bg-slate-100 shadow-lg rounded-lg w-[96vw] mx-auto">
            <Header setSearch = {setSearch} />
            <Filter setStatus = {setStatus} />
            <AppointmentTable data={filterdata} />
        </div>
    );
};

export default Table;
