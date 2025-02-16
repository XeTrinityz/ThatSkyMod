import React, { useState, useRef, useEffect } from 'react';
import { Download, Sparkles } from 'lucide-react';
import GradientCustomizer from './GradientCustomizer';
import playerImage from './assets/TSM_Player.png';
import progressionImage from './assets/TSM_Progression.png';
import dyesImage from './assets/TSM_Dyes.png';
import worldImage from './assets/TSM_World.png';

const InteractiveCard = ({ feature }) => {
  const cardRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mousePositionRef.current = { x, y };
  };

  useEffect(() => {
    const animate = () => {
      if (isHovered) {
        const rotateX = (mousePositionRef.current.y - 0.5) * 20;
        const rotateY = (mousePositionRef.current.x - 0.5) * 20;
        setTransform((prev) => ({
          x: prev.x + (rotateY - prev.x) * 0.1,
          y: -(prev.y + (rotateX - prev.y) * 0.1),
          scale: prev.scale + (1.05 - prev.scale) * 0.1,
        }));
      } else {
        setTransform((prev) => ({
          x: prev.x * 0.9,
          y: prev.y * 0.9,
          scale: 1 + (prev.scale - 1) * 0.9,
        }));
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="w-full h-full rounded-xl cursor-pointer relative group"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative w-full h-full rounded-xl transition-all duration-100 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-[2px]"
        style={{
          transform: `scale(${transform.scale}) rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900/90 backdrop-blur-sm">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d',
            }}
          />
          <div
            className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end transform transition-all duration-300"
            style={{
              transform: 'translateZ(75px)',
              transformStyle: 'preserve-3d',
              opacity: isHovered ? 1 : 0,
              translateY: isHovered ? 0 : '20px',
            }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300">{feature.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModShowcase = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-black text-white">
      <div className="min-h-screen flex flex-col">
        {/* Background Animation Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(150)].map((_, i) => {
            const size = Math.random() * 4 + 1;
            const startX = Math.random() * 120 - 10;
            const startY = Math.random() * 120 - 10;
            const hue = Math.random() * 60 + 200;
            const saturation = Math.random() * 30 + 70;
            const lightness = Math.random() * 30 + 70;
            const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

            return (
              <div
                key={i}
                className="absolute background-element"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${startX}%`,
                  top: `${startY}%`,
                  background: Math.random() > 0.66 ? color : 'transparent',
                  transform: Math.random() > 0.66 ? 'rotate(45deg)' : 'none',
                  boxShadow: `0 0 ${size * 2}px ${color}`,
                  borderRadius: Math.random() > 0.66 ? '50%' : '0',
                  border: Math.random() > 0.66 ? `1px solid ${color}` : 'none',
                  animation: `
                    starfield ${Math.random() * 10 + 8}s linear infinite
                  `
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
              <button 
                onClick={() => window.location.href = 'https://github.com/XeTrinityz/ThatSkyApp/releases/latest/download/ThatSkyApp.exe'}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full flex items-center justify-center mx-auto gap-2 sm:gap-3 transform hover:scale-105 transition-transform text-base sm:text-lg md:text-xl"
              >
                <Download size={24} />
                Download Installer
              </button>
            </div>
          </div>
        </header>

        {/* Interactive Features Grid */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[88rem] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {features.map((feature, index) => (
                <div key={index} className="h-64 sm:h-80 md:h-96 lg:h-[33rem]">
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