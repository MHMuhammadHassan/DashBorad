import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const InsightCard = ({ title, total, color, hasGraph, hasPiechart, details, diseases }) => {

  const pieData = {
    labels: diseases ? diseases.map(disease => disease.name) : [],
    datasets: [{
      data: diseases ? diseases.map(disease => disease.value) : [],
      backgroundColor: diseases ? diseases.map(disease => disease.color) : [],
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
  }

  return (
    <div className={`p-4 rounded-lg shadow-md ${color} w-max-[20vw] flex flex-col justify-between`}>
      
      <div className="flex  justify-between items-center mb-2">
        <div>
          <div className="text-gray-700 font-semibold text-sm">{title}</div>
          <div className="text-gray-900 text-2xl font-bold">{total}</div>
        </div>

        {hasPiechart && (
          <div className="w-20 h-20">
            <Pie data={pieData} options={pieOptions} />
          </div>
        )}
      </div>

      {hasGraph && (
        <div className="mt-2  h-10">
          <Line data={lineData} options={lineOptions} />
        </div>
      )}

      {details && (
        <div className="flex gap-2 text-xs text-gray-600">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1">
              <span className="font-bold text-gray-800">{value}</span> {key}
            </div>
          ))}
        </div>
      )}

      {diseases && (
        <div className="flex w-[20vw] justify-between text-xs text-gray-600">
          {diseases.map((disease, index) => (
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
