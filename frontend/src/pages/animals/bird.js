import React from "react";

const birdFlying = require("../media/lorikeetFlying.gif");
const birdPerched = require("../media/lorikeetPerched.png");
const birdReal = require("../media/lorikeetReal.png");

// Format for each item: [Text, Image, Alt Text]
const dialogue = [
  [""],
  ["Hi! I'm a lorikeet. I eat nectar and fruits."],
  ["This is what I look like in real life: ", birdReal, "lorikeet"],
  ["Fun fact: I can fly more than 60 km/h!"]
];

function Bird() {
  const [index, setIndex] = React.useState(0);
  const [animationFinished, setAnimationFinished] = React.useState(false);
  return (
    <div>
      <img
        className="bird"
        src={animationFinished ? birdPerched : birdFlying}
        alt="bird"
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

export default Bird;
