import { useMemo, useState, useCallback } from 'react';
import type { Employee, FilterState } from '../types';

export const useGridData = (data: Employee[]) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    department: '',
    location: '',
    minSalary: 0,
    isActive: null,
  });

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.firstName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        item.lastName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        item.department.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesDepartment =
        !filters.department || item.department === filters.department;

      const matchesLocation =
        !filters.location || item.location === filters.location;

      const matchesSalary = item.salary >= filters.minSalary;

      const matchesActive =
        filters.isActive === null || item.isActive === filters.isActive;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesLocation &&
        matchesSalary &&
        matchesActive
      );
    });
  }, [data, filters]);

  const updateFilter = useCallback(
    (key: keyof FilterState, value: any) => {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const resetFilters = useCallback(() => {
    setFilters({
      searchTerm: '',
      department: '',
      location: '',
      minSalary: 0,
      isActive: null,
    });
  }, []);

  const stats = useMemo(() => {
    return {
      totalSalary: filteredData.reduce((sum, item) => sum + item.salary, 0),
      avgRating: filteredData.reduce((sum, item) => sum + item.performanceRating, 0) / filteredData.length || 0,
      totalProjects: filteredData.reduce((sum, item) => sum + item.projectsCompleted, 0),
      activeCount: filteredData.filter((item) => item.isActive).length,
    };
  }, [filteredData]);

  return {
    filteredData,
    filters,
    updateFilter,
    resetFilters,
    stats,
  };
};
