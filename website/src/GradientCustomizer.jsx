import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const GradientCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState({
    from: '#172554',
    via: '#581c87',
    to: '#000000'
  });
  const [selectedAnimation, setSelectedAnimation] = useState('starfield');

  const animations = {
    sparkle: {
      name: "Sparkle",
      keyframes: (i) => `
        sparkleFloat${i % 3} ${Math.random() * 8 + 4}s ease-in-out ${Math.random() * 5}s infinite,
        sparklePulse ${Math.random() * 4 + 2}s ease-in-out ${Math.random() * 5}s infinite,
        sparkleGlow ${Math.random() * 3 + 1.5}s ease-in-out ${Math.random() * 5}s infinite
      `,
      style: {
        borderRadius: '0',
        background: 'transparent',
        transform: 'rotate(45deg)'
      }
    },
    fireflies: {
      name: "Fireflies",
      keyframes: () => `fireflies ${Math.random() * 6 + 4}s ease-in-out infinite`,
      style: {
        borderRadius: '50%',
        filter: 'blur(1px)'
      }
    },
    raindrops: {
      name: "Cosmic Rain",
      keyframes: () => `raindrops ${Math.random() * 4 + 2}s linear infinite`,
      style: {
        borderRadius: '25% 75%',
        filter: 'blur(0.5px)'
      }
    },
    energyParticles: {
      name: "Energy Particles",
      keyframes: () => `energyParticles ${Math.random() * 8 + 6}s ease-in-out infinite`,
      style: {
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        filter: 'blur(0.5px)'
      }
    },
    starfield: {
      name: "Starfield",
      keyframes: () => `starfield ${Math.random() * 10 + 8}s linear infinite`,
      style: {
        borderRadius: '50%',
        transform: 'scale(0.5)'
      }
    },
    crystalShimmer: {
      name: "Crystal Shimmer",
      keyframes: () => `crystalShimmer ${Math.random() * 6 + 4}s ease-in-out infinite`,
      style: {
        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        background: 'transparent',
        backdropFilter: 'blur(2px)'
      }
    }
  };

  useEffect(() => {
    updateBackgroundElements();
  }, [colors, selectedAnimation]);

  const updateBackgroundElements = () => {
    const gradientElement = document.querySelector('.min-h-screen');
    if (gradientElement) {
      gradientElement.style.background = `linear-gradient(to bottom, ${colors.from}, ${colors.via}, ${colors.to})`;
    }

    const backgroundElements = document.querySelectorAll('.background-element');
    backgroundElements.forEach((element, i) => {
      const size = Math.random() * 4 + 1;
      const hue = Math.random() * 60 + 200;
      const saturation = Math.random() * 30 + 70;
      const lightness = Math.random() * 30 + 70;
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      
      const animation = animations[selectedAnimation];
      Object.assign(element.style, {
        ...animation.style,
        animation: animation.keyframes(i),
        background: animation.style.background === 'transparent' ? 'transparent' : color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        border: animation.style.background === 'transparent' ? `1px solid ${color}` : 'none'
      });
    });
  };

  const handleColorChange = (position, color) => {
    setColors(prevColors => ({
      ...prevColors,
      [position]: color
    }));
  };

  const handleReset = () => {
    setColors({
      from: '#172554',
      via: '#581c87',
      to: '#000000'
    });
    setSelectedAnimation('sparkle');
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
          <h3 className="text-white font-semibold mb-4">Customize Theme</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Background Style</label>
              <select
                value={selectedAnimation}
                onChange={(e) => setSelectedAnimation(e.target.value)}
                className="w-full bg-gray-800 text-white rounded p-2 border border-gray-700"
              >
                {Object.entries(animations).map(([key, { name }]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>
            </div>

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