import React from 'react';

function Random(props) {


    return (
        <div style={{
            border: '2px solid black',
            marginTop: "5px",
            textAlign: "left",
            paddingLeft: "5px"
        }}>
            <div>Radnom value between {props.min} and {props.max} => {Math.floor(Math.random() * props.max) + props.min}</div>
        </div >
    );
}

export default Random;