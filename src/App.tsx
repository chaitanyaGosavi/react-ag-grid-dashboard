import {
  useState,
} from 'react';

import { Dashboard } from './pages/Dashboard';

import { Employees } from './pages/Employees';

import { Sidebar } from './components/layout/Sidebar';


import { PlaceholderPage } from './pages/PlaceholderPage';


function App() {
  const [activePage, setActivePage] =
    useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <Sidebar
        activePage={
          activePage
        }
        setActivePage={
          setActivePage
        }
      />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {activePage === 'dashboard' ? (
          <Dashboard />
        ) : activePage === 'employees' ? (
          <Employees />
        ) : (
          <PlaceholderPage title={activePage} />
        )}
      </main>
    </div>
  );
}

export default App;