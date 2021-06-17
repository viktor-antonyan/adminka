import React, {useEffect, useState} from 'react';
import edit from '../../../../../img/edit.svg'
import {useDispatch, useSelector} from "react-redux";
import {getAtribute, getGroupData, getRegionsData, getTypeObject} from "../../../../../redux/thunk/thunkCreator";
import deleteI from "../../../../../img/delete.svg";
import _ from 'lodash';
import {showOrgMenu} from "../../../../../redux/reducers/organizationReducer";
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredTaskUsers} from "../../../../../redux/reducers/typeTaskReducer";
import {filtredRegions} from "../../../../../redux/reducers/regionsReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";

const Regions = () => {
    const {regions, filterRegions} = useSelector(({regionsReducer}) => regionsReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [reg, setReg] = useState({})

    const deleteUser = (reg) => {
        return deleteFunc(reg, 'region', filterRegions, filtredRegions, dispatch)
    }
    const clickDeleteIcon = (reg) => {
        setReg(reg)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getRegionsData())
        dispatch(showOrgMenu(false))
        setData(filterRegions)
    }, [filterRegions])
    return (
        <>
            <PopupAlert name={reg.region} showPopup={() => deleteUser(reg)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-3"><p>ID</p>
                    <p>Округ</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {data && data.map(i => (
                        <div
                            className={`table-users_body-item grid-row-3 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.region}</p>
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

export default Regions;
