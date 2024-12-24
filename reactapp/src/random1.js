import React, { useState } from "react";

const RandomCircles = () => {
  const [clickCount, setClickCount] = useState(0);
  const [circles, setCircles] = useState([]);

  const generateRandomPosition = (size) => {
    const x = Math.floor(Math.random() * 90) + 2; 
    const y = Math.floor(Math.random() * 90) + 5; 
    const color = `#${Math.floor(Math.random() * 10000)}`; 
    return { x, y, color, size };
  };

  const handleClick = () => {
    setClickCount((prev) => prev + 1);

    if (clickCount === 0) {
      setCircles([generateRandomPosition(10)]);
    } else if (clickCount === 1) {
      setCircles([generateRandomPosition(10), generateRandomPosition(30)]);
    } else if (clickCount === 2) {
      setCircles([]);
      setClickCount(0); 
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f0f0f0",
        overflow: "hidden",
        textAlign:"center",
      }}
      onClick={handleClick}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            top: `${circle.y}%`,
            left: `${circle.x}%`,
            width: `${circle.size}vh`,
            height: `${circle.size}vh`,
            backgroundColor: circle.color,
            borderRadius: "50%",
           
          }}
        ></div>
      ))}
    </div>
  );
};

export default RandomCircles;
