import React, {
  useMemo,
  useRef,
} from 'react';

import { AgGridReact } from 'ag-grid-react';

import type {
  ColDef,
} from 'ag-grid-community';

import {
  ModuleRegistry,
  ClientSideRowModelModule,
  PaginationModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  ValidationModule,
  CellStyleModule,
  CsvExportModule,
} from 'ag-grid-community';

import 'ag-grid-community/styles/ag-theme-quartz.css';

import {
  Download,
  RefreshCcw,
  Search,
  SlidersHorizontal,
  Star,
  CheckCircle,
  XCircle,
} from 'lucide-react';

import type { Employee } from '../../types';

import {
  formatCurrency,
  formatDate,
  getStatusColor,
  getRatingColor,
} from '../../utils/formatting';

import { EmployeeActions } from './EmployeeActions';
interface GridProps {
  data: Employee[];
}

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  PaginationModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  ValidationModule,
  CellStyleModule,
  CsvExportModule,
]);
const StatusCellRenderer = (
  props: any
) => {
  const isActive = props.value;

  const colors =
    getStatusColor(isActive);

  const Icon = isActive
    ? CheckCircle
    : XCircle;

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold w-fit ${colors}`}
    >
      <Icon size={14} />

      {isActive
        ? 'Active'
        : 'Inactive'}
    </div>
  );
};

const RatingCellRenderer = (
  props: any
) => {
  const rating = props.value;

  const color =
    getRatingColor(rating);

  return (
    <div
      className={`flex items-center gap-1 font-medium ${color}`}
    >
      <Star
        size={15}
        fill="currentColor"
      />

      <span>
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const SkillsCellRenderer = (
  props: any
) => {
  const skills =
    props.value || [];

  return (
    <div className="flex flex-wrap gap-1">
      {skills
        .slice(0, 2)
        .map(
          (
            skill: string,
            idx: number
          ) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-lg font-medium"
            >
              {skill}
            </span>
          )
        )}

      {skills.length > 2 && (
        <span className="text-slate-500 text-xs px-2 py-1">
          +
          {skills.length - 2}
        </span>
      )}
    </div>
  );
};

export const DataGrid: React.FC<
  GridProps
> = ({ data }) => {
  const gridRef =
    useRef<AgGridReact<Employee>>(
      null
    );

  const handleExport = () => {
    gridRef.current?.api.exportDataAsCsv(
      {
        fileName:
          'employees-report.csv',
      }
    );
  };

  const columnDefs = useMemo<
    ColDef<Employee>[]
  >(
    () => [
      {
        field: 'firstName',
        headerName:
          'First Name',
        width: 130,
        pinned: 'left',
      },

      {
        field: 'lastName',
        headerName:
          'Last Name',
        width: 130,
        pinned: 'left',

        cellClass:
          'font-semibold text-slate-800',
      },

      {
        field: 'email',
        headerName: 'Email',
        width: 220,
      },

      {
        field: 'department',
        headerName:
          'Department',
        width: 150,
      },

      {
        field: 'position',
        headerName:
          'Position',
        width: 170,
      },

      {
        field: 'salary',
        headerName: 'Salary',
        width: 140,

        valueFormatter: (
          params
        ) =>
          formatCurrency(
            params.value
          ),

        cellClass:
          'font-semibold text-slate-800',
      },

      {
        field: 'location',
        headerName:
          'Location',
        width: 130,
      },

      {
        field:
          'performanceRating',

        headerName: 'Rating',

        width: 120,

        cellRenderer:
          RatingCellRenderer,
      },

      {
        field:
          'projectsCompleted',

        headerName:
          'Projects',

        width: 110,
      },

      {
        field: 'age',
        headerName: 'Age',
        width: 90,
      },

      {
        field: 'hireDate',

        headerName:
          'Hire Date',

        width: 140,

        valueFormatter: (
          params
        ) =>
          formatDate(
            params.value
          ),
      },

      {
        field: 'skills',

        headerName:
          'Skills',

        width: 180,

        cellRenderer:
          SkillsCellRenderer,
      },

      {
        field: 'manager',

        headerName:
          'Manager',

        width: 150,

        valueFormatter: (
          params
        ) =>
          params.value ||
          'N/A',
      },

      {
        field: 'isActive',

        headerName: 'Status',

        width: 130,

        cellRenderer:
          StatusCellRenderer,
      },

      {
        headerName: '',

        width: 90,

        sortable: false,

        filter: false,

        pinned: 'right',

        cellRenderer: (
          params: any
        ) => (
          <EmployeeActions
            employeeName={`${params.data.firstName} ${params.data.lastName}`}
          />
        ),
      },
    ],
    []
  );

  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-slate-200 px-5 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Employee Directory
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Manage and analyze
            employee records
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-3 h-11 min-w-[240px]">
            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Quick search..."
              className="bg-transparent outline-none border-none text-sm ml-2 w-full"
            />
          </div>

          {/* Filter */}
          <button className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 transition flex items-center gap-2 text-sm font-medium text-slate-700">
            <SlidersHorizontal size={16} />

            Filters
          </button>

          {/* Refresh */}
          <button className="h-11 w-11 rounded-xl border border-slate-200 hover:bg-slate-100 transition flex items-center justify-center">
            <RefreshCcw size={16} />
          </button>

          {/* Export */}
          <button
            onClick={handleExport}
            className="h-11 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition flex items-center gap-2 text-sm font-medium shadow-sm"
          >
            <Download size={16} />

            Export CSV
          </button>
        </div>
      </div>

      {/* Empty State */}
      {data.length === 0 ? (
        <div className="h-[500px] flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-5">
            <Search
              size={34}
              className="text-slate-400"
            />
          </div>

          <h3 className="text-xl font-semibold text-slate-900">
            No employees found
          </h3>

          <p className="text-slate-500 mt-2 max-w-sm">
            Try adjusting filters
            or search criteria to
            find matching employees.
          </p>
        </div>
      ) : (
        <div
          className="ag-theme-quartz"
          style={
            {
              height: '720px',
              width: '100%',

              '--ag-font-size':
                '14px',

              '--ag-border-color':
                '#e2e8f0',

              '--ag-header-background-color':
                '#f8fafc',

              '--ag-header-foreground-color':
                '#0f172a',

              '--ag-row-hover-color':
                '#f8fafc',

              '--ag-selected-row-background-color':
                '#eff6ff',

              '--ag-odd-row-background-color':
                '#ffffff',

              '--ag-background-color':
                '#ffffff',

              '--ag-foreground-color':
                '#0f172a',

              '--ag-border-radius':
                '24px',
            } as React.CSSProperties
          }
        >
          <AgGridReact<Employee>
            ref={gridRef}
            rowData={data}
            columnDefs={columnDefs}
            pagination
            paginationPageSize={10}
            paginationPageSizeSelector={[
              10,
              20,
              50,
            ]}
            animateRows
            rowHeight={58}
            headerHeight={52}
            suppressCellFocus={
              false
            }
            suppressMovableColumns={
              false
            }
            enableCellTextSelection
            defaultColDef={{
              sortable: true,
              filter: true,
              floatingFilter: true,
              resizable: true,
            }}
          />
        </div>
      )}
    </div>
  );
};