import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
}

const StatsCard = ({ number, label }: StatsCardProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

export default StatsCard;