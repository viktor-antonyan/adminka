import React from 'react';
import CheckBox from "../checkbox";
import selector from '../../../src/img/selector/arrow.svg';

const Select = ({value, isOpen}) => {
    return (
        <div className="select">
            <img src={selector} alt="selector" className="select-arrow" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
            <p>{value}</p>

            {isOpen && <div className="select_drop">
                <div className="select_drop-item">
                    <CheckBox label={'Пункт 1'}/>
                </div>

                <div className="select_drop-item">
                    <CheckBox label={'Пункт 2'}/>
                </div>

                <div className="select_drop-item">
                    <CheckBox label={'Пункт 3'}/>
                </div>
            </div>}
        </div>
    );
}

export default Select;
