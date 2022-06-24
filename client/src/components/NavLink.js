import React from 'react';

const eq = ["#", "#skills", "#sobre-mi", "#proyectos", "#footer"]

const NavLink = (props) => {
    for (var i = 0; i < a.length; i++) {
        if(eq[i] == props.to){
            var className = 'nav-link active'
        }
        else{
            var className = 'nav-link'
        }
    }
    return(
        <a href={props.to} className={className} >
            {props.children}
        </a>
    );
}


export default NavLink;