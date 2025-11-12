import React from 'react';

const EventCard = ({ date, title, description }) => {
  return (
    <div className="mb-4 border-l-4 border-green-500 pl-3">
      <div className="bg-green-100 text-green-800 py-1 px-3 text-sm inline-block mb-1">
        {date}
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default EventCard;
