import React from 'react';

import type { Employee } from '../../types';

import { Charts } from '../charts/Charts';

import { QuickInsights } from './QuickInsights';

interface Props {
  data: Employee[];

  activeEmployees: number;

  avgRating: number;

  totalProjects: number;
}

export const DashboardAnalytics: React.FC<
  Props
> = ({
  data,
  activeEmployees,
  avgRating,
  totalProjects,
}) => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
      {/* Charts */}
      <div className="2xl:col-span-8">
        <Charts data={data} />
      </div>

      {/* Insights */}
      <div className="2xl:col-span-4">
        <QuickInsights
          activeEmployees={
            activeEmployees
          }
          avgRating={
            avgRating
          }
          totalProjects={
            totalProjects
          }
        />
      </div>
    </div>
  );
};