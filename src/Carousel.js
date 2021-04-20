import React, { useState } from 'react';

function Carousel(props) {
    let [counter, setCounter] = useState(0);
    let arr = ["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg",]

    const left = (e) => {
        if (counter === 0) {
            setCounter(counter = 3)
        } else {
            setCounter(--counter);
        }
    }
    const right = (e) => {
        if (counter === 3) {
            setCounter(counter = 0)
        } else {
            setCounter(++counter);
        }

    }

    return (
        <div>
            <button onClick={left} >Left</button>
            <img src={arr[counter]} alt="Jesper is cool" />
            <button onClick={right} >Right</button>
        </div >
    );
}

export default Carousel;