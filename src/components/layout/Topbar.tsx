import React from 'react';
import {
  Bell,
  Search,
  Menu,
} from 'lucide-react';

export const Topbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg mb-8">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-white-100">
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-white-500">
              Employee Dashboard
            </h1>

            <p className="text-sm text-slate-200 hidden sm:block">
              Workforce analytics and management
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center bg-slate-200 rounded-xl px-3 py-2 w-72">
            <Search size={18} className="text-slate-900" />

            <input
              type="text"
              placeholder="Search employees..."
              className="bg-slate-200 outline-none border-none text-sm ml-2 w-full text-slate-900"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-white-100">
            <Bell size={20} />

            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full" />
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3 pl-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              JD
            </div>

            <div className="hidden md:block">
              <p className="font-medium text-sm text-white-900">
                John Doe
              </p>

              <p className="text-xs text-white-500">
                Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};