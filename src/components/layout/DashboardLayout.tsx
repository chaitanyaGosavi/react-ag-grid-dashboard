import React from 'react';
import { Topbar } from './Topbar';

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <Topbar />

          <main className="p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};