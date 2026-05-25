import React, { useState } from 'react';

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
} from 'lucide-react';

interface Props {
  employeeName: string;
}

export const EmployeeActions: React.FC<Props> = ({
}) => {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative flex justify-center">
      {/* Trigger */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center transition"
      >
        <MoreHorizontal size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-11 right-0 z-50 w-44 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          <button className="w-full px-4 py-3 flex items-center gap-3 text-sm hover:bg-slate-50 transition text-slate-700">
            <Eye size={16} />

            View Profile
          </button>

          <button className="w-full px-4 py-3 flex items-center gap-3 text-sm hover:bg-slate-50 transition text-slate-700">
            <Pencil size={16} />

            Edit Employee
          </button>

          <button className="w-full px-4 py-3 flex items-center gap-3 text-sm hover:bg-red-50 transition text-red-600">
            <Trash2 size={16} />

            Remove
          </button>
        </div>
      )}
    </div>
  );
};