import React, {useEffect, useState} from 'react';
import edit from '../../../../../img/edit.svg'
import {useDispatch, useSelector} from "react-redux";
import deleteI from "../../../../../img/delete.svg";
import _ from 'lodash';
import {showOrgMenu} from "../../../../../redux/reducers/organizationReducer";
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredCity} from "../../../../../redux/reducers/cityReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";


const City = () => {
    const {city, filterCity} = useSelector(({cityReducer}) => cityReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [cit, setCit] = useState({})

    const deleteUser = (cit) => {
        return deleteFunc(cit, 'region', filterCity, filtredCity, dispatch)
    }
    const clickDeleteIcon = (cit) => {
        setCit(cit)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getCity())
        dispatch(showOrgMenu(false))
        setData(filterCity)
    }, [filterCity])
    return (
        <>
            <PopupAlert name={cit.region} showPopup={() => deleteUser(cit)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-4">
                    <p>ID</p>
                    <p>Район</p>
                    <p>Округ</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {filterCity && filterCity.map(i => (
                        <div
                            className={`table-users_body-item grid-row-4 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.region}</p>
                            <p>{i.city}</p>
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

export default City;
