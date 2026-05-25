import React from 'react';

import {
  Construction,
  Sparkles,
} from 'lucide-react';

interface Props {
  title: string;

  description?: string;

  icon?: React.ReactNode;
}

export const PlaceholderPage: React.FC<
  Props
> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center">
      <div className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />

        <div className="relative px-10 py-14 text-center">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
            {icon || (
              <Construction size={42} />
            )}
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <Sparkles size={16} />
            Coming Soon
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-900 mt-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-slate-500 text-lg mt-4 leading-relaxed max-w-xl mx-auto">
            {description ||
              `The ${title} module is currently under development and will be available in a future update.`}
          </p>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-slate-900">
                24+
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Components
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-slate-900">
                8
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Modules
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-slate-900">
                100%
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Scalable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};