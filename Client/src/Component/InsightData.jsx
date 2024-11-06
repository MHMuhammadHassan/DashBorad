// src/mockData.js

export const insightsData = [
    {
      title: 'All Patients',
      total: 400,
      details: { OPD: 200, Indoor: 100, ICOP: 100 },
      chartType: 'pie',
      color: 'bg-pink-100',
    },
    {
      title: 'Active Patients',
      total: 170,
      details: { OPD: 90, Indoor: 30, ICOP: 50 },
      chartType: 'pie',
      color: 'bg-orange-100',
    },
    {
      title: 'New Registrations',
      total: 62,
      change: '10%',
      trend: 'up',
      duration: 'Last 7 Days',
      color: 'bg-cyan-100',
    },
    {
      title: 'Previous Appointments',
      total: 13,
      change: '-6.0%',
      trend: 'down',
      duration: 'Last 2 Days',
      color: 'bg-blue-100',
    },
    {
      title: 'Appointments Today',
      total: 12,
      details: { OPD: 1, Indoor: 8, ICOP: 3 },
      color: 'bg-purple-100',
    },
    {
      title: 'Doctors',
      total: 5,
      color: 'bg-yellow-100',
    },
  ];
  