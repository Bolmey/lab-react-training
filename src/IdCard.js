import React from 'react';

function IdCard(props) {
    return (
        <div style={{
            display: "flex",
            border: "2px black solid",
            marginTop: "5px",

        }}>
            <div><img src={props.picture} alt="IdPicture" /> </div>
            <div>
                <ul style={{
                    listStyle: "none",
                    textAlign: "left",
                    paddingLeft: "4px",
                    marginTop: "2px"
                }}>
                    <li><b>First name:</b> {props.firstName}</li>
                    <li><b>Last name:</b> {props.lastName}</li>
                    <li><b>Gender:</b> {props.gender}</li>
                    <li><b>Height:</b> {props.height}</li>
                    <li><b>Birth:</b> {props.birth}</li>
                </ul>
            </div>
        </div>
    );
}

export default IdCard;

