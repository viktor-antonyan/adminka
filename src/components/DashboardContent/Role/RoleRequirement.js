import React, {useEffect, useState} from 'react'
import edit from "../../../img/edit.svg";
import deleteI from "../../../img/delete.svg";
import {useDispatch, useSelector} from "react-redux";
// import {showOrgMenu} from "../../redux/reducers/organizationReducer";
import {filtredRole} from "../../../redux/reducers/roleReducer";
import {getRoleData} from "../../../redux/thunk/thunkCreator";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {showPopupAlertAction} from "../../../redux/reducers/dashboardReducer";
import {filtredUsers} from "../../../redux/reducers/usersReducer";
import {PopupAlert} from "../../PopupAlert/PopupAlert";

export const RoleRequirement = () => {
    const {role, filterRole} = useSelector(({roleReducer}) => roleReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [user, setUser] = useState({})

    const deleteUser = (user) => {
        setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
        const fUsers = filterRole.filter(i => i.require !== user.require)
        dispatch(filtredRole(fUsers))
    }
    const clickDeleteIcon = (user) => {
        setUser(user)
        dispatch(showPopupAlertAction(true))
    }

    // useEffect(() => {
    //     dispatch(getRoleData())
    //     // dispatch(showOrgMenu(false))
    // }, [])

    useEffect(()=>{
        setData(filterRole)
        dispatch(showOrgMenu(false))
    },[filterRole])

    return (
        <>
            <PopupAlert name={user.require} showPopup={() => deleteUser(user)}/>
            <div className="table-users_head grid-row-3"><p>ID</p>
                <p>Название Роли</p>
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
