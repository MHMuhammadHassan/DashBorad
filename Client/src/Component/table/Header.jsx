import React, { useState } from 'react'; // Added useState import
import AppointmentFoam from './AppointmentForm';
import axios from 'axios';

const Header = ({ setSearch }) => {
  const [add, setAdd] = useState(false); 

  const handleClick = () => {
    setAdd(true);
  };

  const handleClose = () => {
    setAdd(false);
  };

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);

    const putdata=async () =>{
      try {
        await axios.post('http://localhost:5000/dashborad/addappointment', data)  
      } catch (error) {
        console.log( 'post data error',error)
      }

    }
    putdata();
    setAdd(false); 
  };

  const returnSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between border bg-slate-50 max-w-[94vw] rounded-lg shadow-lg w-full m-2 mb-0 p-2">
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="font-bold text-xl">Patients</h3>
          <p className="font-light text-sm">Patient details and Activity logs</p>
        </div>

        <input
          type="text"
          onChange={returnSearch}
          placeholder="Search"
          className="w-50 p-2 mt-2 h-8 rounded-3xl border border-gray-100"
        />
        <button
          onClick={handleClick}
          className="text-blue-600 py-0 p-2 mr-2 m-2 border border-blue-600 text-center"
        >
          Add
        </button>
      </div>

      {add && (
        <AppointmentFoam
          showModal={true}
          edit={false}
          onSubmit={handleFormSubmit} 
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Header;
