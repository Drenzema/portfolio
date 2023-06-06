import { useEffect, useState } from "react";

const ScrollEffects = () => {
  /* Effect to stop a user from being able to scroll */
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (animationComplete) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  }, [animationComplete]);
};

export default ScrollEffects;
