import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const GradientCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState({
    from: '#172554',
    via: '#581c87',
    to: '#000000'
  });

  useEffect(() => {
    updateGradient(colors);
  }, [colors]);

  const updateGradient = (newColors) => {
    const gradientElement = document.querySelector('.min-h-screen');
    if (gradientElement) {
      gradientElement.style.background = `linear-gradient(to bottom, ${newColors.from}, ${newColors.via}, ${newColors.to})`;
    }
  };

  const handleColorChange = (position, color) => {
    setColors(prevColors => {
      const newColors = {
        ...prevColors,
        [position]: color
      };
      return newColors;
    });
  };

  const handleReset = () => {
    const defaultColors = {
      from: '#172554',
      via: '#581c87',
      to: '#000000'
    };
    setColors(defaultColors);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Palette className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-gray-900/95 backdrop-blur-md p-4 rounded-lg shadow-xl border border-gray-700 w-64">
          <h3 className="text-white font-semibold mb-4">Customize Gradient</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Top Color</label>
              <input
                type="color"
                value={colors.from}
                onChange={(e) => handleColorChange('from', e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Middle Color</label>
              <input
                type="color"
                value={colors.via}
                onChange={(e) => handleColorChange('via', e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Bottom Color</label>
              <input
                type="color"
                value={colors.to}
                onChange={(e) => handleColorChange('to', e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradientCustomizer;