// src/pages/Dashboard.js
import React from 'react';
import InsightCard from './insightCard';
import { insightsData } from './InsightData';
import Navbar from './navbar';
import User from './User';
const Dashboard = () => {
    const user = {
        name: 'Muhammad Hassan', 
        des: 'This task assign by Sir Arslan'
    };
    return (
    <>
        
     <Navbar/>
     <User Name = {user.name} Des = {user.des} />
     <div className='flex justify-center flex-col items-center'>
    <div className="flex  gap-4 w-[96vw] bg-slate-100 shadow-xl rounded-lg p-4 overflow-x-auto">
       
      {insightsData.map((data, index) => (
        <InsightCard key={index} {...data} />
      ))}
    </div>
    </div>
    </>
  );
};

export default Dashboard;
