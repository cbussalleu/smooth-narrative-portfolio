
import React, { useState, useEffect } from 'react';

interface CustomCursorProps {
  showCursor: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ showCursor }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (!showCursor) return null;

  return (
    <div
      className={`
        fixed pointer-events-none z-50 transition-all duration-300 ease-out
        ${showCursor ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
      `}
      style={{
        left: mousePosition.x - 150,
        top: mousePosition.y - 30,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="bg-black text-white px-6 py-3 text-sm font-medium shadow-lg border border-gray-300">
        Scroll to browse my core capabilities
      </div>
    </div>
  );
};

export default CustomCursor;
