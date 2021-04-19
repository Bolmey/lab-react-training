import React from 'react';

function BoxColor(props) {

    const RandomColor = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    }

    return (
        <div style={{
            backgroundColor: "rgb",
        }}>
            <div>RGB ({r, g, b})</div>
            <div>RGB ({r, g, b})</div>
        </div>
    );
}

export default BoxColor;