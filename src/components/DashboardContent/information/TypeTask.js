import React, {useEffect, useState} from 'react'
import edit from "../../../img/edit.svg";
import deleteI from "../../../img/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {filtredTaskUsers} from "../../../redux/reducers/typeTaskReducer";
import {deleteFunc} from "../../../utils/deleteFunc";
import {showPopupAlertAction} from "../../../redux/reducers/dashboardReducer";
import {filtredUsers} from "../../../redux/reducers/usersReducer";
import {PopupAlert} from "../../PopupAlert/PopupAlert";

export const TypeTask = () => {
    const {typeTask,filterTypeTasks} = useSelector(({typeTaskReducer}) => typeTaskReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [task, setTask] = useState({})

    const deleteUser = (task) => {
        setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
        return deleteFunc(task,'require',filterTypeTasks,filtredTaskUsers,dispatch)
    }
    const clickDeleteIcon = (task) => {
        setTask(task)
        dispatch(showPopupAlertAction(true))
    }


    useEffect(() => {
        // dispatch(getTaskData())
        dispatch(showOrgMenu(false))
        setData(filterTypeTasks)
    }, [filterTypeTasks])
    return (
        <>
            <PopupAlert name={task.require} showPopup={() => deleteUser(task)}/>
            <div className="table-users_head grid-row-3"><p>ID</p>
                <p>Тип заданий</p>
                <p style={{textAlign: 'right'}}>Действия</p>
                <div className="table-line"></div>
            </div>
            <div className="table-users_body">
                {data && data.map(i => (
                    <div
                        className={`table-users_body-item grid-row-3 ${activeItem === i.id ? 'active-item-table' : ''}`}
                        key={i.id} onClick={() => setActiveItem(i.id)}>
                        <p>{i.userId}</p>
                        <p>{i.require}</p>
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

