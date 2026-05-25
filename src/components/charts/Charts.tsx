import React, { useMemo } from 'react';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from 'recharts';

import {
  TrendingUp,
  Users,
  Building2,
  MapPin,
} from 'lucide-react';

import type { Employee } from '../../types';

interface ChartsProps {
  data: Employee[];
}

export const Charts: React.FC<ChartsProps> = ({
  data,
}) => {
  // Status Distribution
  const statusData = useMemo(() => {
    const active = data.filter(
      (e) => e.isActive
    ).length;

    const inactive = data.filter(
      (e) => !e.isActive
    ).length;

    return [
      {
        name: 'Active',
        value: active,
      },

      {
        name: 'Inactive',
        value: inactive,
      },
    ];
  }, [data]);

  // Department Count
  const departmentData = useMemo(() => {
    const depts = new Map<
      string,
      number
    >();

    data.forEach((item) => {
      depts.set(
        item.department,
        (depts.get(item.department) || 0) + 1
      );
    });

    return Array.from(
      depts.entries()
    ).map(([department, count]) => ({
      department,
      count,
    }));
  }, [data]);

  // Locations
  const locationCount = useMemo(() => {
    return new Set(
      data.map((e) => e.location)
    ).size;
  }, [data]);

  // Average Rating
  const avgRating = useMemo(() => {
    if (!data.length) return 0;

    return (
      data.reduce(
        (acc, curr) =>
          acc + curr.performanceRating,
        0
      ) / data.length
    );
  }, [data]);

  const COLORS = [
    '#2563eb',
    '#e2e8f0',
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Avg Rating */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Avg Performance
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {avgRating.toFixed(1)}
              </h3>
            </div>

            <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center">
              <TrendingUp size={22} />
            </div>
          </div>
        </div>

        {/* Employees */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Employees
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {data.length}
              </h3>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Users size={22} />
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Departments
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {departmentData.length}
              </h3>
            </div>

            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Building2 size={22} />
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Locations
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {locationCount}
              </h3>
            </div>

            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <MapPin size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Employee Status */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900">
            Employee Status
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Active vs inactive employees
          </p>
        </div>

        <div className="h-[240px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
              >
                {statusData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legends */}
        <div className="flex items-center justify-center gap-6 mt-4">
          {statusData.map(
            (item, index) => (
              <div
                key={item.name}
                className="flex items-center gap-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background:
                      COLORS[index],
                  }}
                />

                <span className="text-sm text-slate-600">
                  {item.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Department Distribution */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-slate-900">
            Department Distribution
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Employees per department
          </p>
        </div>

        <div className="h-[260px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={departmentData}
            >
              <XAxis
                dataKey="department"
                tick={{
                  fontSize: 11,
                }}
              />

              <YAxis
                tick={{
                  fontSize: 11,
                }}
              />

              <Tooltip />

              <Bar
                dataKey="count"
                radius={[
                  8,
                  8,
                  0,
                  0,
                ]}
                fill="#2563eb"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};