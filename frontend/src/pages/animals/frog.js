/*

this code is nonfunctional 

import React from 'react'

const birdReal = require("../media/lorikeetReal.png")

// Format for each item: [Text, Image, Alt Text]
const dialogue = [
    ["Hi! The weather today is cloudy"],
    ["Hi! I'm a growling grass frog."],
    ["This is what I look like in real life: ", frogReal, "lorikeet"]
]

function Frog(){

    const [index, setIndex] = React.useState(0);
    return (
        <div id="frogBox">
            {index !== 0 
                ?   <div className="frogDialogue">
                        <h1>{dialogue[index][0]}</h1>
                        <img src={dialogue[index][1]} alt={dialogue[index][2]}></img>
                    </div>
                :   <div />
            }
            
        </div>
    );
}

export default Frog;

*/