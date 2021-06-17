import React, {useEffect, useState} from 'react';
import edit from '../../../../../img/edit.svg';
import {useDispatch, useSelector} from "react-redux";
import deleteI from "../../../../../img/delete.svg";
import {getWorksData} from "../../../../../redux/thunk/thunkCreator";
import _ from 'lodash';
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredTaskUsers} from "../../../../../redux/reducers/typeTaskReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";

const WorkBlog = () => {
    const {works, filterWorks} = useSelector(({typeWorkReducer}) => typeWorkReducer)
    const [activeItem, setActiveItem] = useState(null)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [work, setWork] = useState({})

    const deleteUser = (work) => {
        return deleteFunc(work, 'typeWork', filterWorks, filtredWorks, dispatch)
    }
    const clickDeleteIcon = (work) => {
        setWork(work)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getWorksData())
        setData(filterWorks)
    }, [filterWorks])
    return (
        <>
            <PopupAlert name={work.typeWork} showPopup={() => deleteUser(work)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-6"><p>ID</p>
                    <p>Вид работ</p>
                    <p>Группа видов работ</p>
                    <p>Регламетный срок</p>
                    <p>Срок жизни задания</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {data && data.map(i => (
                        <div
                            className={`table-users_body-item grid-row-6 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.typeWork}</p>
                            <p>{i.groupWork}</p>
                            <p>{i.advertising}</p>
                            <p>{i.expireTime}</p>
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

export default WorkBlog;
