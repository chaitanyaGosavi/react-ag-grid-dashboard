import React from 'react';

import {
  TrendingUp,
  Users,
  Award,
  Briefcase,
} from 'lucide-react';

interface Props {
  activeEmployees: number;

  avgRating: number;

  totalProjects: number;
}

export const QuickInsights: React.FC<
  Props
> = ({
  activeEmployees,
  avgRating,
  totalProjects,
}) => {
  const insights = [
    {
      title:
        'Workforce Efficiency',

      value: `${avgRating.toFixed(
        1
      )}/5`,

      icon: Award,

      description:
        'Average employee performance remains above target.',
    },

    {
      title:
        'Active Workforce',

      value:
        activeEmployees,

      icon: Users,

      description:
        'Employees currently active across departments.',
    },

    {
      title:
        'Project Delivery',

      value:
        totalProjects,

      icon: Briefcase,

      description:
        'Projects completed this quarter.',
    },

    {
      title:
        'Growth Trend',

      value: '+12%',

      icon: TrendingUp,

      description:
        'Hiring and engagement metrics improved.',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Quick Insights
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          Executive workforce
          overview and trends.
        </p>
      </div>

      <div className="space-y-5">
        {insights.map(
          (
            insight,
            index
          ) => {
            const Icon =
              insight.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon size={20} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-slate-900">
                      {
                        insight.title
                      }
                    </h4>

                    <span className="text-sm font-semibold text-blue-600">
                      {
                        insight.value
                      }
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    {
                      insight.description
                    }
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};