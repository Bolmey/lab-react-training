import React from 'react';

function NumberTable(props) {

    let container = {
        height: '300px',
        width: '500px',
        border: '1px solid black',
        display: 'flex',
        flexWrap: 'wrap',
    }

    let square = {
        width: "96px",
        height: "96px",
        border: "2px solid black",
        fontSize: "32px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    let red = {
        width: "96px",
        height: "96px",
        border: "2px solid black",
        backgroundColor: "red",
        fontSize: "32px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    let squares = [];

    for (let i = 1; i < props.limit + 1; i++) {
        if (i % 2 === 0) {
            squares.push(<div style={red}>{i}</div>)
        } else {
            squares.push(<div style={square}>{i}</div>)

        }

    }

    return (
        <div style={container}>
            {squares}
        </div>
    );
}

export default NumberTable;