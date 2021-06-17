import React, {useEffect, useState} from 'react'
import edit from "../../../img/edit.svg";
import deleteI from "../../../img/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {deleteFunc} from "../../../utils/deleteFunc";
import {filtredPriorityUsers} from "../../../redux/reducers/priorityReducer";
import {showPopupAlertAction} from "../../../redux/reducers/dashboardReducer";
import {filtredTaskUsers} from "../../../redux/reducers/typeTaskReducer";
import {PopupAlert} from "../../PopupAlert/PopupAlert";

export const CreatePriority = () => {
    const {priority,filterPriority} = useSelector(({priorityReducer}) => priorityReducer)
    const [activeItem, setActiveItem] = useState(null)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [priorit, setPriority] = useState({})

    const deleteUser = (priority) => {
        setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
        return deleteFunc(priority,'require1',filterPriority,filtredPriorityUsers,dispatch)
    }
    const clickDeleteIcon = (priorit) => {
        setPriority(priorit)
        dispatch(showPopupAlertAction(true))
    }
    useEffect(() => {
        // dispatch(getPriorityData())
        dispatch(showOrgMenu(false))
        setData(filterPriority)
    }, [filterPriority])
    return (
        <>
            <PopupAlert name={priorit.require1} showPopup={() => deleteUser(priorit)}/>
            <div className="table-users_head grid-row-3"><p>ID</p>
                <p>Приоритет</p>
                <p style={{textAlign: 'right'}}>Действия</p>
                <div className="table-line"></div>
            </div>
            <div className="table-users_body">
                {data && data.map(i => (
                    <div
                        className={`table-users_body-item grid-row-3 ${activeItem === i.id ? 'active-item-table' : ''}`}
                        key={i.id} onClick={() => setActiveItem(i.id)}>
                        <p>{i.userId}</p>
                        <p>{i.require1}</p>
                        <div className="table-user_actions"><img src={edit}
                                                                 alt="edit"/><img
                            src={deleteI} alt="deleteI" onClick={() => clickDeleteIcon(i)}/></div>
                        <div className="table-line"></div>
                    </div>
                ))}
            </div>
        </>
    )
}

