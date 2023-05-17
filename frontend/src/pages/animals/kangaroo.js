import React from "react";

const kangarooHopping = require("../media/kangarooJumping.gif");
const kangarooIdle = require("../media/kangarooIdle.png");
const kangarooReal = require("../media/kangarooReal.jpg");

// Format for each item: [Text, Image, Alt Text]
const dialogue = [
  [""],
  ["Hi! I'm a kangaroo. I eat grass, leaves and fruits."],
  ["This is what I look like in real life: ", kangarooReal, "kangaroo"],
  ["Did you know kangaroos can't move backwards? Our tails and feet are too big."]
];

function Kangaroo() {
  const [index, setIndex] = React.useState(0);
  const [animationFinished, setAnimationFinished] = React.useState(false);
  return (
    <div>
      <img
        className="kangaroo"
        src={animationFinished ? kangarooIdle : kangarooHopping}
        alt="kangaroo"
        onClick={(event) => setIndex((index + 1) % dialogue.length)}
        onAnimationEnd={() => setAnimationFinished(true)}
      />
      {index !== 0 ? (
        <div className="animalDialogue">
          <h1>{dialogue[index][0]}</h1>
          <img src={dialogue[index][1]} alt={dialogue[index][2]}></img>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Kangaroo;
