import React, { useState } from 'react';

function ClickablePicture(props) {

    let [toggle, setToggle] = useState(false);



    return (
        <div>
            <img onClick={() => setToggle(!toggle)} src={toggle ? "img/persons/maxence-glasses.png" : "/img/persons/maxence.png"} />
        </div>
    );
}

export default ClickablePicture;