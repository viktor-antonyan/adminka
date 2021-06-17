import React, {useEffect, useState} from 'react'
import edit from "../../../img/edit.svg";
import deleteI from "../../../img/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {DashboardHeader} from "../DashboardHeader";
import {getOrganizationData, getUsersData} from "../../../redux/thunk/thunkCreator";
import {addOrganization, filtredOrganization, showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {filtredUsers} from "../../../redux/reducers/usersReducer";
import {showPopupAlertAction} from "../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../PopupAlert/PopupAlert";

export const DashboardOrganization = () => {
    const {organizationUsers,filterOrganizationUsers} = useSelector(({organizationReducer}) => organizationReducer)
    const [activeItem, setActiveItem] = useState(null)
    const dispatch = useDispatch()
    const [data,setData] = useState([])
    const [user, setUser] = useState({})

    const deleteUser = (user) => {
        setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
        const fUsers = filterOrganizationUsers.filter(i => i.organization !== user.organization)
        dispatch(filtredOrganization(fUsers))
    }
    const clickDeleteIcon = (user) => {
        setUser(user)
        dispatch(showPopupAlertAction(true))
    }

    // useEffect(() => {
    //     // dispatch(getOrganizationData())
    //     dispatch(showOrgMenu(true))
    // }, [])
    useEffect(()=>{
        setData(filterOrganizationUsers)
        dispatch(showOrgMenu(true))
    },[filterOrganizationUsers])
    return (
        <>
            <PopupAlert name={user.organization} showPopup={() => deleteUser(user)}/>
            <div className="table-users_head grid-row-5"><p>ID</p>
                <p>Организация</p>
                <p>Кластер организации</p>
                <p>Родительская организация</p>
                <p style={{textAlign: 'right'}}>Действия</p>
                <div className="table-line"></div>
            </div>
            <div className="table-users_body">
                {data && data.map(i => (
                    <div
                        className={`table-users_body-item grid-row-5 ${activeItem === i.id ? 'active-item-table' : ''}`}
                        key={i.id} onClick={() => setActiveItem(i.id)}>
                        <p>{i.userId}</p>
                        <p>{i.organization}</p>
                        <p>{i.clasterOrg}</p>
                        <p>{i.ParentOrganization}</p>
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
