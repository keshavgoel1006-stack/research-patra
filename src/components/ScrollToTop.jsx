import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // This grabs the current URL path
  const { pathname } = useLocation();

  // Every time the pathname changes, this runs and scrolls the window to X:0, Y:0
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // It returns null because it doesn't actually draw anything on the screen
  return null;
};

export default ScrollToTop;