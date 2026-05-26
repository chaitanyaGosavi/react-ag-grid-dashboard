import React from 'react';

import { KPIGrid } from '../components/cards/KPICards';

import { DashboardAnalytics } from '../components/dashboard/DashboardAnalytics';

import { sampleData } from '../data/sampleData';

import { useGridData } from '../hooks/useGridData';

export const Dashboard: React.FC =
  () => {
    const { stats } =
      useGridData(
        sampleData
      );

    return (
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Workforce analytics,
              employee performance
              and operational
              insights.
            </p>
          </div>

        </div>

        {/* KPI */}
        <KPIGrid
          totalSalary={
            stats.totalSalary
          }
          avgRating={
            stats.avgRating
          }
          totalProjects={
            stats.totalProjects
          }
          activeEmployees={
            stats.activeCount
          }
        />

        {/* Analytics */}
        <DashboardAnalytics
          data={sampleData}
          activeEmployees={
            stats.activeCount
          }
          avgRating={
            stats.avgRating
          }
          totalProjects={
            stats.totalProjects
          }
        />
      </div>
    );
  };