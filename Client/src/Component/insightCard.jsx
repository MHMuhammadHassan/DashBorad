import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const InsightCard = ({ title, total, color, hasGraph, hasPiechart, details = {}, diseases = [] }) => {
  // Ensure diseases is parsed correctly as an array
  let diseasesArray = [];
let detailsArray =[];
  if (typeof diseases === 'string') {
    try {
      diseasesArray = JSON.parse(diseases);
    } catch (error) {
      console.error("Failed to parse diseases:", error);
      diseasesArray = [];
    }
  } else if (Array.isArray(diseases)) {
    diseasesArray = diseases;
  }
  if(details != null){
    details = JSON.parse(details);

}

  

  const pieData = {
    labels: diseasesArray.map(disease => disease.name),
    datasets: [{
      data: diseasesArray.map(disease => disease.value),
      backgroundColor: diseasesArray.map(disease => disease.color),
      borderWidth: 1,
    }],
  };
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
  };

  // Line chart dummy data
  const lineData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${color} w-[20vw] flex flex-col justify-between`}>
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="text-gray-700 font-semibold text-sm">{title}</div>
          <div className="text-gray-900 text-2xl font-bold">{total}</div>
        </div>
        {hasPiechart === 1  && (
          <div className="w-20 h-20">
            <Pie data={pieData} options={pieOptions} />
          </div>
        )}
      </div>

      {hasGraph === 1 && (
        <div className="mt-2 h-10">
          <Line data={lineData} options={lineOptions} />
        </div>
      )}

 {details && details != null &&(
  <div className="flex min-w-[20vw]  gap-2 text-xs text-gray-600">
    
      <div  className="flex items-center gap-1">
        <span className="font-bold text-gray-800">{details.Key}</span> {details.value}
      </div>
    
  </div>
)} 


      {diseasesArray.length > 0 && (
        <div className="flex min-w-[18vw] m-auto justify-between text-xs text-gray-600">
          {diseasesArray.map((disease, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="font-bold text-gray-800">{disease.name}</p>
              <p>{disease.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InsightCard;
