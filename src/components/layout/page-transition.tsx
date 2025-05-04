
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("animate-fade-in");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("animate-fade-out");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "animate-fade-out") {
      setTransitionStage("animate-fade-in");
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`w-full ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}
