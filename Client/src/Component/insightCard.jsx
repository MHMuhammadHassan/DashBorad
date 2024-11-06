import React from 'react';

const InsightCard = ({ title, total, details, color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color} w-[40vw] h-[15vh] flex flex-col justify-between`}>

      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="text-gray-700 font-semibold text-sm">{title}</div>
          <div className="text-gray-900 text-2xl font-bold">{total}</div>
        </div>

        <div className="w-10 h-10 bg-gradient-to-t from-sky-400 to-green-500 rounded-full border-4 border-gray-300 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 36 36" className="w-8 h-8">
            <circle
              className="text-pink-500"
              strokeWidth="3.8"
              strokeDasharray="30,100"
              fill="none"
              cx="18"
              cy="18"
              r="15.9155"
            />
            <circle
              className="text-yellow-400"
              strokeWidth="3.8"
              strokeDasharray="40,100"
              fill="none"
              cx="18"
              cy="18"
              r="15.9155"
            />
            <circle
              className="text-blue-500"
              strokeWidth="3.8"
              strokeDasharray="30,100"
              fill="none"
              cx="18"
              cy="18"
              r="15.9155"
            />
          </svg>
        </div>
      </div>
      
      {/* Details Section */}
    
      {details && (
        <div className="flex gap-2 text-xs text-gray-600">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1">
              <span className="font-bold text-gray-800">{value}</span> {key}
            </div>
          ))}
        </div>
      )}
    </div> 
    
  );
};

export default InsightCard;
