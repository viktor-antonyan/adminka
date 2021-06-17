import React, {useEffect, useState} from 'react';
import edit from '../../../../../img/edit.svg';
import deleted from '../../../../../img/delete.svg';
import {useDispatch, useSelector} from "react-redux";
import {getPriorityData, getResultCloseData} from "../../../../../redux/thunk/thunkCreator";
import _ from 'lodash';
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredTaskUsers} from "../../../../../redux/reducers/typeTaskReducer";
import {filtredResult} from "../../../../../redux/reducers/resultpageReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";


const ResultClosePage = () => {
    const {resultPage, filterResultPage} = useSelector(({typeResultReducer}) => typeResultReducer)
    const [activeItem, setActiveItem] = useState(null)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [result, setResult] = useState({})

    const deleteUser = (result) => {
        return deleteFunc(result, 'result', filterResultPage, filtredResult, dispatch)
    }
    const clickDeleteIcon = (result) => {
        setResult(result)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getResultCloseData())
        setData(filterResultPage)
    }, [filterResultPage])
    return (
        <>
            <PopupAlert name={result.result} showPopup={() => deleteUser(result)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-3"><p>ID</p>
                    <p>Результат закрытия</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {data && data.map(i => (
                        <div
                            className={`table-users_body-item grid-row-3 ${activeItem === i.id ? 'active-item-table' : ''}`}
                            key={_.uniqueId()} onClick={() => setActiveItem(i.id)}>
                            <p>{i.userId}</p>
                            <p>{i.result}</p>
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

export default ResultClosePage;
