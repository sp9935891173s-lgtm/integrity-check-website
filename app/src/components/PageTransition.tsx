import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router';

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('page-enter');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('page-exit');
    }
  }, [children, displayChildren]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'page-exit') {
          setDisplayChildren(children);
          setTransitionStage('page-enter');
        }
      }}
    >
      {displayChildren}
    </div>
  );
}
