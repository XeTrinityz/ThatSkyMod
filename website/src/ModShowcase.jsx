import React, { useState, useEffect } from 'react';
import GradientCustomizer from './components/GradientCustomizer';
import CustomButtons from './components/CustomButtons';
import InteractiveCard from './components/InteractiveCard';
import LoadingSpinner from './components/LoadingSpinner';
import playerImage from './assets/TSM_Player.png';
import progressionImage from './assets/TSM_Progression.png';
import dyesImage from './assets/TSM_Dyes.png';
import worldImage from './assets/TSM_World.png';

import 'ldrs/trefoil';

const ModShowcase = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToLoad = [playerImage, progressionImage, dyesImage, worldImage];
    let loadedImages = 0;

    const imageLoadHandler = () => {
      loadedImages++;
      if (loadedImages === imagesToLoad.length) {
        setIsLoading(false);
      }
    };

    // Create image objects to track loading
    imagesToLoad.forEach(src => {
      const img = new Image();
      img.onload = imageLoadHandler;
      img.onerror = imageLoadHandler; // Count errors as loaded to prevent hanging
      img.src = src;
    });

    // If all images are already cached, set loading to false
    if (imagesToLoad.every(src => {
      const img = new Image();
      return img.complete;
    })) {
      setIsLoading(false);
    }
  }, []);

  const features = [
    {
      title: "Player Controls & Movement",
      description: "Enhanced gameplay with Godmode, infinite stamina, super abilities (run, jump, swim, flight), and protection features like anti-rain damage and anti-AFK. Access special states and transformations for unique gameplay experiences.",
      image: playerImage
    },
    {
      title: "Automated Candle Collection",
      description: "Streamline your candle runs with automated tools including auto burn candles, auto collect wax, auto burn plants, and fragment collection. Features semi-CR with customizable delays and sequence controls for efficient farming.",
      image: progressionImage
    },
    {
      title: "Advanced Dye Customization",
      description: "Complete control over your character's appearance with an extensive dye system. Choose from a wide color palette for primary and secondary regions as well as options to randomize or remove dyes.",
      image: dyesImage
    },
    {
      title: "Environment & Gameplay Controls",
      description: "Comprehensive control over your game environment with options to disable wind walls, gravity, water, and clouds. Fine-tune gameplay elements with quick actions, multiplayer controls, and custom environment settings.",
      image: worldImage
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-blue-950 via-purple-900 to-black text-white">
      <LoadingSpinner isLoading={isLoading} />
      <div className="min-h-screen flex flex-col">
        {/* Enhanced Sparkle Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(150)].map((_, i) => {
            const size = Math.random() * 4 + 1;
            const duration = Math.random() * 8 + 4;
            const delay = Math.random() * 5;
            const sparkleType = Math.floor(Math.random() * 3);
            
            const hue = Math.random() * 60 + 200;
            const saturation = Math.random() * 30 + 70;
            const lightness = Math.random() * 30 + 70;
            const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            
            const startX = Math.random() * 120 - 10;
            const startY = Math.random() * 120 - 10;

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${startX}%`,
                  top: `${startY}%`,
                  background: sparkleType === 1 ? color : 'transparent',
                  transform: sparkleType === 2 ? 'rotate(45deg)' : 'none',
                  boxShadow: `0 0 ${size * 2}px ${color}`,
                  borderRadius: sparkleType === 1 ? '50%' : '0',
                  border: sparkleType !== 1 ? `1px solid ${color}` : 'none',
                  animation: `
                    sparkleFloat${i} ${duration}s ease-in-out ${delay}s infinite,
                    sparklePulse ${duration / 2}s ease-in-out ${delay}s infinite,
                    sparkleGlow ${duration / 3}s ease-in-out ${delay}s infinite
                  `,
                }}
              />
            );
          })}
        </div>

        {/* Hero Section */}
        <header className="relative py-4 sm:py-6 md:py-8 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-2 sm:mb-4 md:mb-6">
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent py-4 leading-relaxed"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #60A5FA, #C084FC, #60A5FA, #C084FC, #60A5FA)',
                  backgroundSize: '400% 100%',
                  animation: 'gradientMove 12s linear infinite'
                }}
              >
                That Sky Mod
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                An all-in-one mod menu for Sky: CoTL
              </p>
              <CustomButtons.DownloadButton />
              <CustomButtons.GitHubButton stars={64} />
            </div>
          </div>
        </header>

        {/* Interactive Features Grid */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[88rem] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {features.map((feature, index) => (
                <div key={index}>
                  <InteractiveCard feature={feature} />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features Note */}
          <div className="mt-12 sm:mt-16 md:mt-24 text-center px-4">
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-white/5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                And Much More...
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
                Discover additional features including unlocking emotes, playing animations, spells, teleport options, music controls, 
                and extensive settings to customize the mod exactly how you want it.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 sm:py-8 text-center text-gray-400 mt-auto">
          <p className="text-xs sm:text-sm">© 2025 That Sky Mod. Not affiliated with thatgamecompany.</p>
        </footer>

        {/* Gradient Customizer */}
        <GradientCustomizer />
      </div>
    </div>
  );
};

export default ModShowcase;