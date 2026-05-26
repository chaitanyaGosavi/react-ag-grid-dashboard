import React from 'react';
import { X, LayoutDashboard, Users, Building2, Briefcase, BarChart3, FileText, Settings } from 'lucide-react';

interface MobileNavProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'Employees', id: 'employees' },
  { icon: Building2, label: 'Departments', id: 'departments' },
  { icon: Briefcase, label: 'Projects', id: 'projects' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: FileText, label: 'Reports', id: 'reports' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export const MobileNav: React.FC<MobileNavProps> = ({ activePage, setActivePage, isOpen, onClose }) => {
  const handleMenuClick = (pageId: string) => {
    setActivePage(pageId);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onClose} />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Users size={20} />
            </div>
            <div>
              <h1 className="font-bold text-lg">EM System</h1>
              <p className="text-slate-400 text-xs">Management</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="px-3 mb-3">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Main Menu</p>
          </div>

          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom User Card - Made By */}
        <div className="p-4 border-t border-slate-800 flex-shrink-0">
          {/* Made By Label */}
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3 px-2">
            Made by
          </p>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 flex items-center gap-3 border border-slate-700 hover:border-blue-600 transition">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-lg flex-shrink-0">
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
      </div>
    </>
  );
};
