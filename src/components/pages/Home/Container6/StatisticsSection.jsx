import React from "react";

const StatisticsSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid container */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Item 1 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-l-4 border-yellow-600 group">
            <div className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-all duration-300">
              10+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium uppercase tracking-wider group-hover:text-blue-800 transition-all duration-300">
              CENTERS
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-l-4 border-yellow-600 group">
            <div className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-all duration-300">
              20+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium uppercase tracking-wider group-hover:text-blue-800 transition-all duration-300">
              LIVE PROJECTS
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-l-4 border-yellow-600 col-span-2 lg:col-span-1 group">
            <div className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-all duration-300">
              50+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium uppercase tracking-wider group-hover:text-blue-800 transition-all duration-300">
              iNDUSTRY TRAINERS
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-l-4 border-yellow-600 group">
            <div className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-all duration-300">
              10 Thousand+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium uppercase tracking-wider group-hover:text-blue-800 transition-all duration-300">
              TRAINING HOURS COMPLETED
            </div>
          </div>

          {/* Item 5 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-l-4 border-yellow-600 group">
            <div className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-all duration-300">
              10,000+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium uppercase tracking-wider group-hover:text-blue-800 transition-all duration-300">
              TRAINED STUDENTS
            </div>
          </div>

          {/* Item 6 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-l-4 border-yellow-600 col-span-2 lg:col-span-1 group">
            <div className="absolute inset-0 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-all duration-300">
              70+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium uppercase tracking-wider group-hover:text-blue-800 transition-all duration-300">
              COLLEGE TIEUPS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;