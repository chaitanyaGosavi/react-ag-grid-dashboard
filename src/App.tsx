import {
  useState,
} from 'react';

import { Dashboard } from './pages/Dashboard';

import { Employees } from './pages/Employees';

import { Sidebar } from './components/layout/Sidebar';

import { MobileNav } from './components/layout/MobileNav';

import { Topbar } from './components/layout/Topbar';

import { PlaceholderPage } from './pages/PlaceholderPage';


function App() {
  const [activePage, setActivePage] =
    useState('dashboard');
  
  const [mobileMenuOpen, setMobileMenuOpen] = 
    useState(false);

  return (
    <div className="h-screen bg-slate-100 flex">
      {/* Mobile Navigation */}
      <MobileNav
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        activePage={
          activePage
        }
        setActivePage={
          setActivePage
        }
      />

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <Topbar onMenuClick={() => setMobileMenuOpen(true)} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8" onClick={() => setMobileMenuOpen(false)}>
          {activePage === 'dashboard' ? (
            <Dashboard />
          ) : activePage === 'employees' ? (
            <Employees />
          ) : (
            <PlaceholderPage title={activePage} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;