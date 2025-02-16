import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  return (
    <button 
      onClick={() => window.location.href = 'https://github.com/XeTrinityz/ThatSkyApp/releases/latest/download/ThatSkyApp.exe'}
      className="group relative cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full flex items-center justify-center mx-auto gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] text-base sm:text-lg md:text-xl"
    >
      <div className="relative flex items-center gap-2">
        <Download className="w-6 h-6 transform transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0" />
        <Download className="w-6 h-6 transform transition-all duration-300 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0" />
        <span>Download Installer</span>
      </div>
    </button>
  );
};

export default DownloadButton;