import React, { useState } from "react";

const RandomCircles = () => {
  const [clickCount, setClickCount] = useState(0);
  const [circles, setCircles] = useState([]);

  const color = ["#e05510", "#cce911", "#11e933", "#1120e9", "#14e10f"];

  const getcolor = () => {
    const random = Math.floor(Math.random() * color.length);
    return color[random];
  };

  const generateRandomPosition = (size, x, y) => {
    const color = getcolor();
    return { x, y, color, size };
  };

  const handleClick = (e) => {
    setClickCount((prev) => prev + 1);
    if (clickCount < 2) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      const xPercent = (mouseX / containerWidth) * 100;
      const yPercent = (mouseY / containerHeight) * 100;

      const circleSize = Math.floor(Math.random() * 30) + 20; 

      const newCircle = generateRandomPosition(circleSize, xPercent, yPercent);

      setCircles((prevCircles) => [...prevCircles, newCircle]);
    }

    if (clickCount === 2) {
      setClickCount(0);
      setCircles([]); 
    }
  };

  return (
    <div
      style={{
        width: "100vw", 
        height: "100vh", 
        background: "#f0f0f0",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${circle.y}%`,
            left: `${circle.x}%`,
            width: `${circle.size}vh`, 
            height: `${circle.size}vh`,
            backgroundColor: circle.color,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)", 
          }}
        ></div>
      ))}
    </div>
  );
};

export default RandomCircles;
