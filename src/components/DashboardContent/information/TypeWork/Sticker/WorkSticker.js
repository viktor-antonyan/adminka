import React, {useEffect, useState} from 'react';
import plus from '../../../../../img/plus.svg';
import filter from '../../../../../img/filter-icon.svg';
import edit from '../../../../../img/edit.svg';
import deleted from '../../../../../img/delete.svg';
import {useDispatch, useSelector} from "react-redux";
import {getGroupData, getStickerData} from "../../../../../redux/thunk/thunkCreator";
import _ from 'lodash';
import {deleteFunc} from "../../../../../utils/deleteFunc";
import {filtredTaskUsers} from "../../../../../redux/reducers/typeTaskReducer";
import {filtredSticker} from "../../../../../redux/reducers/stickerReducer";
import {filtredWorks} from "../../../../../redux/reducers/typeWorkReducer";
import {showPopupAlertAction} from "../../../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../../../PopupAlert/PopupAlert";


const WorkSticker = () => {
    const {sticker, filterSticker} = useSelector(({typeStickerReducer}) => typeStickerReducer)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [stic, setStic] = useState({})

    const deleteUser = (stic) => {
        return deleteFunc(stic, 'sticker', filterSticker, filtredSticker, dispatch)
    }
    const clickDeleteIcon = (stic) => {
        setStic(stic)
        dispatch(showPopupAlertAction(true))
    }

    useEffect(() => {
        // dispatch(getStickerData())
        setData(filterSticker)
    }, [filterSticker])
    return (
        <>
            <PopupAlert name={stic.sticker} showPopup={() => deleteUser(stic)}/>
            <div className="table-users">
                <div className="table-users_head grid-row-3">
                    <p>ID</p>
                    <p>Стикер для файлов</p>
                    <p style={{"text-align": "right"}}>Действия</p>
                    <div className="table-line"></div>
                </div>
                <div className="table-users_body">
                    {
                        data && data.map(i => (
                            <div className="table-users_body-item grid-row-3" key={_.uniqueId()}>
                                <p>{i.userId}</p>
                                <p>{i.sticker}</p>
                                <div className="table-user_actions"><img src={edit}
                                                                         alt="edit"/><img
                                    src={deleted} alt="deleted" onClick={() => clickDeleteIcon(i)}/></div>
                                <div className="table-line"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default WorkSticker;
