import React, { useState } from "react";
const Task = () => {
  const [randomText, setRandomText] = useState([]);

  const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "An investment in knowledge pays the best interest.",
    "Life is what happens when you're busy making other plans.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Dont be afraid to give up the good to go for the great.",
    "Your time is limited, so dont waste it living someone elses life.",
    "If life were predictable, it would cease to be life, and be without flavor.",
    "The only limit to our realization of tomorrow is our doubts of today.",
  ];

  const Texts1 = [
    "super.... ",
    "good....",
    "very good...",
    "well performing...",
    "exclent boy....",
    "good boy....",
  ];

  const ganereText = () => {
    const random = Math.floor(Math.random() * texts.length);
    let random1 = Math.floor(Math.random() * Texts1.length);
    while (random1 === random) {
      random1 = Math.floor(Math.random() * Texts1.length);
    }
    setRandomText([texts[random], Texts1[random1]]);
  };
  return (
    <div
      style={{
        marginLeft: "30vh",
        border: "2px solid black",
        width: "100vh",
        textAlign: "center",
        backgroundColor: "silver",
      }}
    >
      <h1>Random text generator</h1>
      {randomText.length > 0 && <p>{randomText[0]}</p>}
      <button
        onClick={ganereText}
        style={{ cursor: "pointer", backgroundColor: "green", height: "5vh" }}
      >
        ganerat Text
      </button>
      {randomText.length > 0 && <p>{randomText[1]}</p>}
    </div>
  );
};

export default Task;
