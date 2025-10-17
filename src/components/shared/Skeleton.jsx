import React from "react";

const Skeleton = ({ rows = 5 }) => {
  return (
    <div
      role="status"
      className="relative animate-pulse w-full rounded-xl bg-gradient-to-b from-gray-800 via-gray-900 to-black p-6 shadow-lg overflow-hidden"
    >
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 w-full mb-3">
          <div className="h-3 bg-gray-700 rounded-full w-1/3"></div>
          <div className="h-3 bg-gray-600 rounded-full w-1/4"></div>
          <div className="h-3 bg-gray-700 rounded-full flex-1"></div>
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
        <div className="h-8 w-32 bg-gray-600 rounded-md"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent absolute inset-0"></div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Skeleton;
