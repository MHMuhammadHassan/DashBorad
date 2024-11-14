import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InsightCard from './insightCard';
import Navbar from './navbar';
import User from './User';
import Table from './table/Table';

const Dashboard = () => {
    const [dbData, setDbData] = useState([]);
    const [error, setError] = useState(null);
    
    const user = {
        name: 'Muhammad Hassan', 
        des: 'This task was assigned by Sir Arslan'
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/dashborad/getCards');
                setDbData(res.data);
                console.log(res.data[1].diseases[1]);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                console.error(err);
            }
        };
        getData();
    }, []);  // Keep the dependency array empty to fetch data only on mount

    return (
        <>
            <Navbar />
            <User Name={user.name} Des={user.des} />
            <div className='flex justify-center flex-col items-center'>
                <div className="flex gap-4 w-[96vw] bg-slate-100 shadow-xl rounded-lg p-4 overflow-x-auto">
                    {dbData.map((data, index) => (
                        <InsightCard key={index} {...data} />
                    ))}
                </div>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <Table />
            </div>
            {error && <p className="text-red-500">Error: {error}</p>}
        </>
    );
};

export default Dashboard;
