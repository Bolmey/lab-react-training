import React, { useState } from 'react';

function Dice(props) {
    let arr = ["img/dice-empty.png", "img/dice1.png", "img/dice2.png",
        "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png"];

    let [counter, setCounter] = useState(0)
    const changeSrc = (e) => setCounter(~~(Math.random() * 6 + 1))


    return (
        <div>
            <img onClick={changeSrc} src={arr[counter]} alt="Jespers cool" />
        </div >
    );
}

export default Dice;