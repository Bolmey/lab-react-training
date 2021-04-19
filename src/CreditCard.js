import React from 'react';

function CreditCard(props) {
    let cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
        margin: "10px",
        padding: "20px",
        width: "300px",
        borderRadius: "10px",
        display: "inline-block"
    }

    if (props.type == "Master Card") {

    }


    return (
        <div style={cardStyle}>
            <div>{props.type}</div>
            <div>{props.number}</div>
            <div>{props.expirationMonth}/{props.expirationYear}     {props.bank}</div>
            <div>{props.owner}</div>
            <div>{props.bgBolor}</div>
            <div>{props.color}</div>
        </div>
    );
}

export default CreditCard;