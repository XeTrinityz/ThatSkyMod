import React, { useEffect } from 'react';
import { trefoil } from 'ldrs';

const LoadingSpinner = ({ isLoading }) => {
  useEffect(() => {
    // Register the custom element
    trefoil.register();
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <l-trefoil
        size="40"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4"
        color="white"
      ></l-trefoil>
      <p className="mt-4 text-white/90 text-sm">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;