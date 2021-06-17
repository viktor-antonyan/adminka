import React, {useEffect, useState} from 'react';
import filter from '../../../../../img/filter-icon.svg';
import edit from '../../../../../img/edit.svg';
import deleted from '../../../../../img/delete.svg';
import {useDispatch, useSelector} from "react-redux";
import {getExplainCloseData, getPriorityData} from "../../../../../redux/thunk/thunkCreator";
import _ from 'lodash'
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredTaskUsers} from "../../../../../redux/reducers/typeTaskReducer";
import {filtredCloseData} from "../../../../../redux/reducers/explainReducer";
import {filtredResult} from "../../../../../redux/reducers/resultpageReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";


const ExplainClose = () => {
    const {explainClose, filterExplain} = useSelector(({typeExplainReducer}) => typeExplainReducer)
    const dispatch = useDispatch()
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const [result, setResult] = useState({})

    const deleteUser = (result) => {
        return deleteFunc(result, 'explain', filterExplain, filtredCloseData, dispatch)
    }
    const clickDeleteIcon = (result) => {
        setResult(result)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getExplainCloseData())
        setData(filterExplain)
    }, [filterExplain])
    return (
        <>
            <PopupAlert name={result.explain} showPopup={() => deleteUser(result)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-3"><p>ID</p>
                    <p>Описание результата закрытия</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {data && data.map(i => (
                        <div
                            className={`table-users_body-item grid-row-3 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.explain}</p>
                            <div className="table-user_actions"><img src={edit}
                                                                     alt="edit"/><img
                                src={deleted} alt="deleted" onClick={() => clickDeleteIcon(i)}/></div>
                            <div className="table-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExplainClose;
