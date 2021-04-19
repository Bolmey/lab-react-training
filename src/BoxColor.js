import React from 'react';

function BoxColor(props) {

    let style = {
        border: '1px solid black',
        marginTop: "10px",
        textAlign: 'center',
        backgroundColor: "rgb(" + props.r + "," + props.g + "," + props.b + ")",
        height: "4rem",
        padding: "5px",
    }

    return (
        <div style={style}>
            rgb({props.r}, {props.g}, {props.b})
        </div>
    );
}

export default BoxColor;