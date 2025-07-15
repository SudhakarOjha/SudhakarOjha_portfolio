import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-950 via-purple-950 to-black">
      <span
        className={`block text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-700 ease-out ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'}`}
      >
        Sudhakar Ojha's Portfolio
      </span>
    </div>
  );
};

export default Loader; 