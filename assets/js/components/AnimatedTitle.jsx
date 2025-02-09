import React, { useState, useEffect } from "react";

const AnimatedTitle = () => {
  const titles = ["Government AI", "Education AI", "Productivity AI"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="gradient-text fade-text">
      {titles[currentIndex]}
    </span>
  );
};

export default AnimatedTitle; 