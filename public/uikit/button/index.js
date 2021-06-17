import React from 'react';
import "./_styles.scss"


const Button = (props) => {
    return (
        <button className={`button ${props.color} ${props.outline}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
