import React, {useEffect, useState} from 'react';
import edit from '../../../../../img/edit.svg'
import {useDispatch, useSelector} from "react-redux";
import {getGroupData, getTypeObject} from "../../../../../redux/thunk/thunkCreator";
import deleteI from "../../../../../img/delete.svg";
import _ from 'lodash';
import {showOrgMenu} from "../../../../../redux/reducers/organizationReducer";
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredTaskUsers} from "../../../../../redux/reducers/typeTaskReducer";
import {filtredTypeObject} from "../../../../../redux/reducers/typeObjectReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";

const TypeObject = () => {
    const {typeObject, filterTypeObject} = useSelector(({typeObjectReducer}) => typeObjectReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [typeObj, setTypeObject] = useState({})

    const deleteUser = (typeObj) => {
        return deleteFunc(typeObj, 'typeobject', filterTypeObject, filtredTypeObject, dispatch)
    }
    const clickDeleteIcon = (typeObj) => {
        setTypeObject(typeObj)
        dispatch(showPopupAlertAction(true))
    }


    useEffect(() => {
        // dispatch(getTypeObject())
        dispatch(showOrgMenu(false))
        setData(filterTypeObject)
    }, [filterTypeObject])
    return (
        <>
            <PopupAlert name={typeObj.typeobject} showPopup={() => deleteUser(typeObj)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-4"><p>ID</p>
                    <p>Тип объектат</p>
                    <p>Родительская тип объектат</p>
                    <p style={{textAlign: "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {filterTypeObject && filterTypeObject.map(i => (
                        <div
                            className={`table-users_body-item grid-row-4 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.typeobject}</p>
                            <p>{i.parentTypeObject}</p>
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

export default TypeObject;
