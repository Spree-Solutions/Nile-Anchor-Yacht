import { useEffect, useState } from "react";

function useMediaQuery() {
  const [screenSize, setScreenSize] = useState(() => {
    const cachedScreenSize = sessionStorage.getItem("screenSize");
    return cachedScreenSize
      ? JSON.parse(cachedScreenSize)
      : {
          isSmall: false,
          isMedium: false,
          isLarge: false,
          isXLarge: false,
          is2XLarge: false,
        };
  });

  useEffect(() => {
    const mediaQueries = {
      isSmall: window.matchMedia("(max-width: 640px)"),
      isMedium: window.matchMedia("(max-width: 768px)"),
      isLarge: window.matchMedia("(min-width: 769px) and (max-width: 1279px)"),
      isXLarge: window.matchMedia("(min-width: 1280px) and (max-width: 1535px)"),
      is2XLarge: window.matchMedia("(min-width: 1536px)"),
    };

    const updateScreenSize = () => {
      const newScreenSize = {
        isSmall: mediaQueries.isSmall.matches,
        isMedium: mediaQueries.isMedium.matches,
        isLarge: mediaQueries.isLarge.matches,
        isXLarge: mediaQueries.isXLarge.matches,
        is2XLarge: mediaQueries.is2XLarge.matches,
      };

      if (JSON.stringify(newScreenSize) !== JSON.stringify(screenSize)) {
        setScreenSize(newScreenSize);
        sessionStorage.setItem("screenSize", JSON.stringify(newScreenSize));
      }
    };

    Object.values(mediaQueries).forEach((mq) => mq.addEventListener("change", updateScreenSize));
    updateScreenSize();

    return () => {
      Object.values(mediaQueries).forEach((mq) => mq.removeEventListener("change", updateScreenSize));
    };
  }, [screenSize]);

  return screenSize;
}

export default useMediaQuery;
