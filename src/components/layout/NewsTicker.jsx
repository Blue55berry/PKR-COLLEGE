import React from 'react';

const NewsTicker = ({ news }) => {
  const defaultNews = "International Seminar on Decoding the Relevance of Ethic Standards Executions, Chief Guest, Dr Pratibha Hariharan Riding at USA • Annual Sports Day 2025 - Registration Open • NAAC Peer Team Visit Scheduled - January 2025 • New Computer Lab Inauguration";
  
  return (
    <div className="bg-slate-700 text-white py-3 px-4 flex items-center">
      <div className="mr-4 font-bold flex items-center">
        <span className="mr-2">📢</span> News
      </div>
      <div className="overflow-hidden flex-1">
        <div className="whitespace-nowrap animate-marquee">
          {news || defaultNews}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
