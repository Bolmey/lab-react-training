import React, { useState } from 'react';


function LikeButton(props) {
    let [counter, setCounter] = useState(0);

    const up = (e) => setCounter(++counter);

    let style = {
        backgroundColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    }



    return (
        <div style={style}>
            <button onClick={up} >{counter} Likes</button>
        </div>
    );
}

export default LikeButton;