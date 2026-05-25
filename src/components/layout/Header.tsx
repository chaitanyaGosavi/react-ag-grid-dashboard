import React from 'react';
import { Users } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-2">
          <Users size={32} />
          <h1 className="text-3xl font-bold">Employee Management Dashboard</h1>
        </div>
        <p className="text-blue-100">
          Comprehensive employee performance and workforce analytics
        </p>
      </div>
    </div>
  );
};
