'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] bg-gradient-to-br from-pink-500 to-purple-500 mix-blend-difference shadow-lg transition-transform duration-75"
    ></div>
  );
}
