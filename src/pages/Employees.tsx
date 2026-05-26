import React, {
  useMemo,
} from 'react';

import { Filters } from '../components/layout/Filters';

import { DataGrid } from '../components/grid/DataGrid';

import { useGridData } from '../hooks/useGridData';

import { sampleData } from '../data/sampleData';

export const Employees: React.FC =
  () => {
    const {
      filteredData,
      filters,
      updateFilter,
      resetFilters,
    } = useGridData(
      sampleData
    );

    const departments =
      useMemo(() => {
        return Array.from(
          new Set(
            sampleData.map(
              (
                item
              ) =>
                item.department
            )
          )
        ).sort();
      }, []);

    const locations =
      useMemo(() => {
        return Array.from(
          new Set(
            sampleData.map(
              (
                item
              ) =>
                item.location
            )
          )
        ).sort();
      }, []);

    return (
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Employees
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Manage employee records,
            filters, exports and
            workforce analytics.
          </p>
        </div>

        {/* Filters */}
        <Filters
          filters={filters}
          onFilterChange={
            updateFilter
          }
          onReset={resetFilters}
          departments={
            departments
          }
          locations={locations}
        />

        {/* Grid */}
        <DataGrid
          data={filteredData}
        />
      </div>
    );
  };