import React from 'react';
import timer from '../../../src/img/timer.svg'
import input from '../../../src/img/search-input.svg'

const Input = (props) => {
    const { placeholder, value, isSearch } = props;

    if (props.type === 'timer') {
        return <div className="timer-input">
            <img src={timer} alt="timer"/>
            <input type={'text'} placeholder={placeholder} value={value} onChange={(e) => console.log(e)}/>
            <span>сек.</span>
        </div>
    }

    if (isSearch) {
        return <div className="search-input">
            <img src={input} alt="input"/>
            <input type={props.type} placeholder={placeholder} value={value} onChange={(e) => console.log(e)}/>
        </div>
    }

    return (
        <input placeholder={placeholder} value={value} className="input" type={props.type} />
    );
}

export default Input;
