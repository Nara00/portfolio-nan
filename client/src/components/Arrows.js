import React from 'react'


const Arrows = (props) => {
    return (
        <div style={{ bottom: "0", position: "absolute", right: "0" }} >
            <a href={props.to}>
                <img src="assets/img/Vector.svg" style={{ paddingBottom: " 8vh", paddingRight: "3.5vw"}} />
            </a>
        </div>
    );

}

export default Arrows;