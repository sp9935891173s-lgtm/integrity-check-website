import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit'>('enter');
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPathRef.current) {
      // Route changed — start exit animation
      setTransitionStage('exit');
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'exit') {
      // Exit done → swap content and play enter
      setDisplayChildren(children);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTransitionStage('enter');
    }
  };

  // Also update children if they change without route change
  useEffect(() => {
    if (transitionStage === 'enter') {
      setDisplayChildren(children);
    }
  }, [children, transitionStage]);

  return (
    <div
      className={`page-transition ${transitionStage === 'exit' ? 'page-exit' : 'page-enter'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {displayChildren}
    </div>
  );
}
