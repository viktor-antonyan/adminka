import React, {useEffect, useState} from 'react';
import edit from '../../../../../img/edit.svg'
import {useDispatch, useSelector} from "react-redux";
import deleteI from "../../../../../img/delete.svg";
import _ from 'lodash';
import {showOrgMenu} from "../../../../../redux/reducers/organizationReducer";
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredAtribute} from "../../../../../redux/reducers/atributeReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";

const Atribute = () => {
    const {atribute, filterAtribute} = useSelector(({atributeReducer}) => atributeReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [atr, setAtr] = useState({})

    const deleteUser = (atr) => {
        return deleteFunc(atr, 'atribute', filterAtribute, filtredAtribute, dispatch)
    }
    const clickDeleteIcon = (atr) => {
        setAtr(atr)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getAtribute())
        dispatch(showOrgMenu(false))
        setData(filterAtribute)
    }, [filterAtribute])
    return (
        <>
            <PopupAlert name={atr.atribute} showPopup={() => deleteUser(atr)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-3"><p>ID</p>
                    <p>Атрибут</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {data && data.map(i => (
                        <div
                            className={`table-users_body-item grid-row-3 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.atribute}</p>
                            <div className="table-user_actions"><img src={edit}
                                                                     alt="edit"/><img
                                src={deleteI} alt="deleteI" onClick={() => clickDeleteIcon(i)}/></div>
                            <div className="table-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Atribute;
