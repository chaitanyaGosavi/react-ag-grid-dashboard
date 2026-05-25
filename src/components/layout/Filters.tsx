import React from 'react';
import {
  Search,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';

import type { FilterState } from '../../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (
    key: keyof FilterState,
    value: any
  ) => void;

  onReset: () => void;

  departments: string[];
  locations: string[];
}

export const Filters: React.FC<FiltersProps> = ({
  filters,
  onFilterChange,
  onReset,
  departments,
  locations,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
      {/* Top Row */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-slate-100 p-2 rounded-xl">
              <SlidersHorizontal
                size={18}
                className="text-slate-700"
              />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Employee Filters
              </h3>

              <p className="text-sm text-slate-500">
                Filter employee records and analytics
              </p>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition text-slate-700 font-medium"
        >
          <RotateCcw size={16} />
          Reset Filters
        </button>
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-4 mt-6">
        {/* Search */}
        <div className="relative 2xl:col-span-2">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search employees, emails, positions..."
            value={filters.searchTerm}
            onChange={(e) =>
              onFilterChange('searchTerm', e.target.value)
            }
            className="w-full h-12 pl-11 pr-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
        </div>

        {/* Department */}
        <select
          value={filters.department}
          onChange={(e) =>
            onFilterChange('department', e.target.value)
          }
          className="h-12 px-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
        >
          <option value="">
            All Departments
          </option>

          {departments.map((dept) => (
            <option
              key={dept}
              value={dept}
            >
              {dept}
            </option>
          ))}
        </select>

        {/* Location */}
        <select
          value={filters.location}
          onChange={(e) =>
            onFilterChange('location', e.target.value)
          }
          className="h-12 px-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
        >
          <option value="">
            All Locations
          </option>

          {locations.map((loc) => (
            <option
              key={loc}
              value={loc}
            >
              {loc}
            </option>
          ))}
        </select>

        {/* Salary */}
        <input
          type="number"
          placeholder="Min Salary (K)"
          value={
            filters.minSalary === 0
              ? ''
              : filters.minSalary / 1000
          }
          onChange={(e) =>
            onFilterChange(
              'minSalary',
              e.target.value
                ? parseFloat(e.target.value) * 1000
                : 0
            )
          }
          className="h-12 px-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
        />

        {/* Status */}
        <select
          value={
            filters.isActive === null
              ? ''
              : filters.isActive
              ? 'true'
              : 'false'
          }
          onChange={(e) => {
            if (e.target.value === '') {
              onFilterChange('isActive', null);
            } else {
              onFilterChange(
                'isActive',
                e.target.value === 'true'
              );
            }
          }}
          className="h-12 px-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
        >
          <option value="">
            All Status
          </option>

          <option value="true">
            Active
          </option>

          <option value="false">
            Inactive
          </option>
        </select>
      </div>
    </div>
  );
};