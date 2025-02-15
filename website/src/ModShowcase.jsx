import React, { useState, useRef, useEffect } from 'react';
import { Download, Sparkles } from 'lucide-react';

const InteractiveCard = ({ feature }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const animate = () => {
      if (isHovered) {
        const rotateX = (mousePosition.y - 0.5) * 20;
        const rotateY = (mousePosition.x - 0.5) * 20;
        
        setTransform(prev => ({
          x: prev.x + (rotateY - prev.x) * 0.1,
          y: -(prev.y + (rotateX - prev.y) * 0.1),
          scale: prev.scale + (1.05 - prev.scale) * 0.1
        }));
      } else {
        setTransform(prev => ({
          x: prev.x * 0.9,
          y: prev.y * 0.9,
          scale: 1 + (prev.scale - 1) * 0.9
        }));
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, mousePosition]);

  return (
    <div 
      ref={cardRef}
      className="w-full h-full rounded-xl cursor-pointer relative group"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect behind card */}
      <div 
        className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: `
            scale(${transform.scale * 1.2})
            rotateX(${transform.y}deg)
            rotateY(${transform.x}deg)
          `
        }}
      />

      <div
        className="relative w-full h-full rounded-xl transition-all duration-100 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-[2px]"
        style={{
          transform: `
            scale(${transform.scale})
            rotateX(${transform.y}deg)
            rotateY(${transform.x}deg)
          `,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Card content container with gradient border */}
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900/90 backdrop-blur-sm">
          <img 
            src={feature.image} 
            alt={feature.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          
          {/* Content overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d'
            }}
          />
          
          {/* Text content */}
          <div 
            className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-300"
            style={{
              transform: 'translateZ(75px)',
              transformStyle: 'preserve-3d',
              opacity: isHovered ? 1 : 0,
              translateY: isHovered ? 0 : '20px'
            }}
          >
            <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>

          {/* Shine effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              transform: `translateX(${(transform.x / 20) * 200}%) translateY(${(transform.y / 20) * 200}%)`
            }}
          />
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
            image: "/src/assets/TSM_Player.png"
        },
        {
            title: "Automated Candle Collection",
            description: "Streamline your candle runs with automated tools including auto burn candles, auto collect wax, auto burn plants, and fragment collection. Features semi-CR with customizable delays and sequence controls for efficient farming.",
            image: "/src/assets/TSM_Progression.png"
        },
        {
            title: "Advanced Dye Customization",
            description: "Complete control over your character's appearance with an extensive dye system. Choose from a wide color palette for primary and secondary regions as well as options to randomize or remove dyes.",
            image: "/src/assets/TSM_Dyes.png"
        },
        {
            title: "Environment & Gameplay Controls",
            description: "Comprehensive control over your game environment with options to disable wind walls, gravity, water, and clouds. Fine-tune gameplay elements with quick actions, multiplayer controls, and custom environment settings.",
            image: "/src/assets/TSM_World.png"
        }
    ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              animation: `twinkle ${Math.random() * 4 + 2}s infinite`
            }}
          />
        ))}
      </div>
      
      {/* Add animation keyframes to your style block */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative py-16 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            That Sky Mod
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            An all-in-one mod menu for Sky: CoTL
          </p>
        <button 
        onClick={() => window.location.href = 'https://github.com/XeTrinityz/ThatSkyApp/releases/latest/download/ThatSkyApp.exe'}
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full flex items-center justify-center mx-auto gap-2 transform hover:scale-105 transition-transform"
        >
        <Download size={24} />
        Download Latest Version
        </button>
        </div>
      </header>

    {/* Interactive Features Grid */}
    <section className="py-16 px-4">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="h-[640px]">
            <InteractiveCard feature={features[0]} />
        </div>
        <div className="h-[640px]">
            <InteractiveCard feature={features[1]} />
        </div>
        <div className="h-[640px]">
            <InteractiveCard feature={features[2]} />
        </div>
        <div className="h-[640px]">
            <InteractiveCard feature={features[3]} />
        </div>
        </div>
    </div>
    {/* Additional Features Note */}
    <div className="mt-16 text-center">
    <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        And Much More...
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
        Discover additional features including unlocking emotes, playing animations, spells, teleport options, music controls, 
        and extensive settings to customize the mod exactly how you want it.
        </p>
    </div>
    </div>
    </section>


      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p className="text-sm">© 2025 That Sky Mod. Not affiliated with thatgamecompany.</p>
      </footer>
    </div>
  );
};

export default ModShowcase;