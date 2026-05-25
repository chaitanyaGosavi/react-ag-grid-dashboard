import React from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Award,
  TrendingUp,
  Wallet,
} from 'lucide-react';

import { formatCurrency } from '../../utils/formatting';

interface KPICardProps {
  label: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  iconBg: string;
  trendColor: string;
  formatValue?: (val: any) => string;
}

export const KPICard: React.FC<KPICardProps> = ({
  label,
  value,
  change,
  icon,
  iconBg,
  trendColor,
  formatValue,
}) => {
  const displayValue = formatValue ? formatValue(value) : value;

  const isPositive = change >= 0;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-100 to-transparent rounded-full blur-3xl opacity-70" />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              {label}
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
              {displayValue}
            </h2>
          </div>

          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${iconBg}`}
          >
            {icon}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center gap-2 mt-8">
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-semibold ${trendColor}`}
          >
            {isPositive ? (
              <ArrowUpRight size={16} />
            ) : (
              <ArrowDownRight size={16} />
            )}

            <span>
              {isPositive ? '+' : ''}
              {change.toFixed(1)}%
            </span>
          </div>

          <span className="text-sm text-slate-500">
            vs last month
          </span>
        </div>
      </div>
    </div>
  );
};

interface KPIGridProps {
  totalSalary: number;
  avgRating: number;
  totalProjects: number;
  activeEmployees: number;
}

export const KPIGrid: React.FC<KPIGridProps> = ({
  totalSalary,
  avgRating,
  totalProjects,
  activeEmployees,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
      <KPICard
        label="Total Salary Budget"
        value={totalSalary}
        change={8.5}
        icon={<Wallet size={26} />}
        iconBg="bg-gradient-to-br from-blue-500 to-indigo-600"
        trendColor="bg-emerald-50 text-emerald-700"
        formatValue={formatCurrency}
      />

      <KPICard
        label="Average Performance"
        value={avgRating}
        change={2.3}
        icon={<Award size={26} />}
        iconBg="bg-gradient-to-br from-violet-500 to-purple-600"
        trendColor="bg-emerald-50 text-emerald-700"
        formatValue={(val) => `${val.toFixed(1)}/5.0`}
      />

      <KPICard
        label="Total Projects"
        value={totalProjects}
        change={12.1}
        icon={<TrendingUp size={26} />}
        iconBg="bg-gradient-to-br from-amber-500 to-orange-600"
        trendColor="bg-emerald-50 text-emerald-700"
      />

      <KPICard
        label="Active Employees"
        value={activeEmployees}
        change={5.0}
        icon={<Users size={26} />}
        iconBg="bg-gradient-to-br from-emerald-500 to-teal-600"
        trendColor="bg-emerald-50 text-emerald-700"
      />
    </div>
  );
};