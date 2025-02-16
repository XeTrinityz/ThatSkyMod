import React, { useState, useRef, useEffect } from 'react';

const InteractiveCard = ({ feature }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsActive(false);
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
    if (!cardRef.current || isTouchDevice.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = Math.min(Math.max((mouseX / (rect.width / 2)) * 35, -35), 35);
    const rotateX = Math.min(Math.max(-(mouseY / (rect.height / 2)) * 35, -35), 35);

    setTransform({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice.current) {
      setTransform({ x: 0, y: 0 });
      setIsActive(false);
    }
  };

  const handleTouch = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <div
      ref={cardRef}
      className="w-full rounded-xl cursor-pointer relative group"
      style={{
        perspective: isTouchDevice.current ? 'none' : '1000px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouch}
      onTouchEnd={(e) => e.preventDefault()}
    >
      <div
        className="relative rounded-xl transform-gpu transition-transform duration-100 ease-out bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-[2px]"
        style={{
          transform: isTouchDevice.current ? 'none' : `rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative rounded-xl overflow-hidden bg-gray-900/90 backdrop-blur-sm">
          <div className="relative w-full" style={{ paddingBottom: '77.6%' }}>
            <img
              src={feature.image}
              alt={feature.title}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-80'
              }`}
            />
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`absolute inset-0 p-4 sm:p-6 flex flex-col justify-end transition-all duration-300 ${
              isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300">{feature.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;