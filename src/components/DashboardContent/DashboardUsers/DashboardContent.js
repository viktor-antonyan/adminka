import React, {useEffect, useState} from 'react'
import edit from "../../../img/edit.svg";
import deleteI from "../../../img/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {filtredUsers} from "../../../redux/reducers/usersReducer";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {PopupAlert} from "../../PopupAlert/PopupAlert";
import {
    isDeletedAction,
    showPopupAlertAction,
    showPopupAndChangeDeleteAction
} from "../../../redux/reducers/dashboardReducer";


export const DashboardContent = () => {
    const {users, filterUsers} = useSelector(({usersReducer}) => usersReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [user, setUser] = useState({})

    const deleteUser = (user) => {
        setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
        const fUsers = filterUsers.filter(i => i.id !== user.id)
        dispatch(filtredUsers(fUsers))
    }
    const clickDeleteIcon = (user) => {
        setUser(user)
        dispatch(showPopupAlertAction(true))
    }
    useEffect(() => {
        setData(filterUsers)
        dispatch(showOrgMenu(false))
    }, [filterUsers])

    return (
        <>
            <PopupAlert name={user.level} showPopup={() => deleteUser(user)}/>
            <div className="table-users_head grid-row-6"><p>ФИО</p>
                <p>Кластер организации</p>
                <p>Организация</p>
                <p>Должность</p>
                <p>Роль</p>
                <p style={{textAlign: 'right'}}>Действия</p>
                <div className="table-line"></div>
            </div>
            <div className="table-users_body">
                {data && data.map(i => (
                    <div
                        className={`table-users_body-item grid-row-6 ${activeItem === i.id ? 'active-item-table' : ''}`}
                        key={i.id} onClick={() => setActiveItem(i.id)}>
                        <p>{i.personality}</p>
                        <p>{i.clasterOrg}</p>
                        <p>{i.organization}</p>
                        <p>{i.level}</p>
                        <p>{i.rol}</p>
                        <div className="table-user_actions">
                            <img src={edit} alt="edit"/>
                            <img src={deleteI} alt="deleteI" onClick={() => clickDeleteIcon(i)}/>
                        </div>
                        <div className="table-line"></div>
                    </div>
                ))}
            </div>
        </>
    )
}
