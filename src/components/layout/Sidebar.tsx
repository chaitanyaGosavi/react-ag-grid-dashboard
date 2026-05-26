import React from 'react';

import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  BarChart3,
  FileText,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  activePage: string;

  setActivePage: (
    page: string
  ) => void;
}

const menuItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    id: 'dashboard',
  },

  {
    icon: Users,
    label: 'Employees',
    id: 'employees',
  },

  {
    icon: Building2,
    label: 'Departments',
    id: 'departments',
  },

  {
    icon: Briefcase,
    label: 'Projects',
    id: 'projects',
  },

  {
    icon: BarChart3,
    label: 'Analytics',
    id: 'analytics',
  },

  {
    icon: FileText,
    label: 'Reports',
    id: 'reports',
  },

  {
    icon: Settings,
    label: 'Settings',
    id: 'settings',
  },
];

export const Sidebar: React.FC<
  SidebarProps
> = ({
  activePage,
  setActivePage,
}) => {
  return (
    <aside className="hidden lg:flex lg:w-64 xl:w-72 bg-slate-900 text-white flex-col h-screen sticky top-0 border-r border-slate-800">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-2xl shadow-lg">
            <Users size={24} />
          </div>

          <div>
            <h1 className="font-bold text-lg tracking-tight">
              EM System
            </h1>

            <p className="text-slate-400 text-sm">
              Management Portal
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        {/* Section Label */}
        <div className="px-3 mb-3">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Main Menu
          </p>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map(
            (item) => {
              const Icon =
                item.icon;

              const isActive =
                activePage ===
                item.id;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    setActivePage(
                      item.id
                    )
                  }
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  <Icon
                    size={20}
                    className={`transition-transform duration-200 ${isActive
                        ? 'scale-110'
                        : 'group-hover:scale-105'
                      }`}
                  />

                  <span className="font-medium text-sm">
                    {item.label}
                  </span>
                </button>
              );
            }
          )}
        </div>
      </nav>

      {/* Bottom User Card - Made By */}
      <div className="p-4 border-t border-slate-800">
        {/* Made By Label */}
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3 px-2">
          Made by
        </p>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 flex items-center gap-3 border border-slate-700 hover:border-blue-600 transition">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-lg">
            CG
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-white truncate">
              Chaitanya Gosavi
            </h4>

            <p className="text-xs text-blue-400 font-medium truncate">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};