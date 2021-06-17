import React, {useEffect, useState} from 'react';
import edit from '../../../../../img/edit.svg'
import {useDispatch, useSelector} from "react-redux";
import {getGroupData} from "../../../../../redux/thunk/thunkCreator";
import deleteI from "../../../../../img/delete.svg";
import _ from 'lodash';
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredTaskUsers} from "../../../../../redux/reducers/typeTaskReducer";
import {filtredGroups} from "../../../../../redux/reducers/groupReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";

const GroupWorkBlog = () => {
    const {groups, filterGroups} = useSelector(({typeGroupReducer}) => typeGroupReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [work, setWork] = useState({})

    const deleteUser = (work) => {
        return deleteFunc(work, 'groupWork', filterGroups, filtredGroups, dispatch)
    }
    const clickDeleteIcon = (work) => {
        setWork(work)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getGroupData())
        setData(filterGroups)
    }, [filterGroups])
    return (
        <>
            <PopupAlert name={work.groupWork} showPopup={() => deleteUser(work)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-4"><p>ID</p>
                    <p>Группа видов работ</p>
                    <p>Родительская группа видов работ</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {data && data.map(i => (
                        <div
                            className={`table-users_body-item grid-row-4 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.groupWork}</p>
                            <p>{i.parentWork}</p>
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

export default GroupWorkBlog;
