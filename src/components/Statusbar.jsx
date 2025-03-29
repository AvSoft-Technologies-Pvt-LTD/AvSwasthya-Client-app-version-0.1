import React, { useEffect, useState } from 'react';

function Statusbar() {
  return (
    <div className="py-12 w-full bg-slate-100 flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mx-8 max-w-6xl px-4">
        <StatsCard 
          number={746}
          suffix="k"
          description="Successful Healthcard Registration"
        />
        <StatsCard 
          number={850}
          suffix=""
          description="Lab & Pharmacies integrated"
        />
        <StatsCard 
          number={93}
          suffix="%"
          description="Patient Satisfaction Rate"
        />
        <StatsCard 
          number={275}
          suffix="+"
          description="Top Specialists"
        />
      </div>
    </div>
  );
}

function StatsCard({ number, suffix = "", description }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    if (start === end) return;

    const duration = 2500; // Total duration in ms
    const incrementTime = 30; // Time between increments
    const increment = (end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="p-6 text-center transform hover:scale-105 transition-transform duration-300">
  
      <div className="text-3xl md:text-4xl font-bold mb-2 bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {count}{suffix}
      </div>
      <p className="text-cyan-950 text-sm text-balance">{description}</p> {/* Slightly lighter description text */}
    </div>
  );
}

export default Statusbar;
