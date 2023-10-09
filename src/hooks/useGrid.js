/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export const useGrid = (GRID_CONFIG) => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);

  if (!GRID_CONFIG) {
    throw new Error('GRID_CONFIG is required');
  }

  let resizeTimeout;
  const handleResize = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
      const { count, increment } = getGridConfig(GRID_CONFIG);
      setCount(count);
      setIncrement(increment);
    }, 300);
  };

  const hadnleAddMore = () => {
    setCount(count + increment);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return {
    count,
    hadnleAddMore,
  };
};

function getGridConfig(GRID_CONFIG) {
  const screenWidth = window.innerWidth;
  let selectedConfig = null;

  for (const key in GRID_CONFIG) {
    if (screenWidth >= parseInt(key)) {
      selectedConfig = GRID_CONFIG[key];
    } else {
      break;
    }
  }

  if (!selectedConfig) {
    return Object.values(GRID_CONFIG)[0];
  }

  return { ...selectedConfig };
}
