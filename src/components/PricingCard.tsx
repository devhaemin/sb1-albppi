import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, features, isPopular }: PricingCardProps) => {
  return (
    <div className={`
      relative bg-gray-900/50 border rounded-xl p-8
      ${isPopular ? 'border-indigo-600' : 'border-gray-800'}
    `}>
      {isPopular && (
        <div className="absolute -top-3 right-4">
          <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full">인기</span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-indigo-500" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`
        w-full py-3 rounded-lg transition-all
        ${isPopular 
          ? 'bg-indigo-600 hover:bg-indigo-700' 
          : 'bg-gray-800 hover:bg-gray-700'}
      `}>
        선택하기
      </button>
    </div>
  );
};

export default PricingCard;