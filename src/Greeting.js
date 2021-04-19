import React from 'react';

function Greeting(props) {
    let greeting = '';
    if (props.lang == "de") {
        greeting = "Hallo"
    } else if (props.lang == "fr") {
        greeting = "Bonjour"
    } else {
        greeting = "Hello"
    }


    return (
        <div style={{
            border: "black 2px solid",
            marginTop: "10px",
            textAlign: "left",
            paddingLeft: "5px"
        }}>
            {greeting} {props.children}
        </div>
    );
}

export default Greeting;