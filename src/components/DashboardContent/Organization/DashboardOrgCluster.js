import React, {useEffect, useState} from 'react'
import edit from "../../../img/edit.svg";
import deleteI from "../../../img/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {getOrganizationClusterData} from "../../../redux/thunk/thunkCreator";
import {filtredOrganizationCluster, showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {filtredUsers} from "../../../redux/reducers/usersReducer";
import {showPopupAlertAction} from "../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../PopupAlert/PopupAlert";

export const DashboardOrgCluster = () => {
    const {orgCluster,filterOrgCluster} = useSelector(({organizationReducer}) => organizationReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [user, setUser] = useState({})

    const deleteUser = (user) => {
        setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
        const fCluster = filterOrgCluster.filter(i => i.id !== user.id)
        dispatch(filtredOrganizationCluster(fCluster))
    }
    const clickDeleteIcon = (user) => {
        setUser(user)
        dispatch(showPopupAlertAction(true))
    }

    // useEffect(() => {
    //     //     dispatch(getOrganizationClusterData())
    //     //     dispatch(showOrgMenu(true))
    //     // }, [])

    useEffect(()=>{
        setData(filterOrgCluster)
        // dispatch(showOrgMenu(true))
    },[filterOrgCluster])
    return (
        <>
            <PopupAlert name={user.clusterOrganization} showPopup={() => deleteUser(user)}/>
            <div className="table-users_head grid-row-3"><p>ID</p>
                <p>Кластер организации</p>
                <p style={{textAlign: 'right'}}>Действия</p>
                <div className="table-line"></div>
            </div>
            <div className="table-users_body">
                {data && data.map(i => (
                    <div
                        className={`table-users_body-item grid-row-3 ${activeItem === i.id ? 'active-item-table' : ''}`}
                        key={i.id} onClick={() => setActiveItem(i.id)}>
                        <p>{i.userId}</p>
                        <p>{i.clusterOrganization}</p>
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
