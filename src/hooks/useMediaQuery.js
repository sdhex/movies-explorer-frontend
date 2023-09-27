import { useEffect, useState } from 'react';

export const useMediaQuery = (maxWidth) => {
  const [isMedia, setIsMedia] = useState(false);

  const handleResize = () => {
    setIsMedia(window.innerWidth <= maxWidth);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth]);

  return isMedia;
};
