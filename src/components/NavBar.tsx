import React from 'react';
import { Music4 } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music4 className="w-6 h-6 text-indigo-600" />
          <span className="font-bold">Soundary</span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full text-sm transition-all">
          시작하기
        </button>
      </div>
    </nav>
  );
};

export default NavBar;