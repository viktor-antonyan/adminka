import React, {useEffect, useRef, useState} from 'react'
import edit from "../../../img/edit.svg";
import deleteI from "../../../img/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {filtredUsers} from "../../../redux/reducers/usersReducer";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {getNote} from "../../../redux/thunk/thunkCreator";
import {filtredNote} from "../../../redux/reducers/noteTaskReducer";
import {useHistory} from "react-router-dom";
import {showPopupAlertAction} from "../../../redux/reducers/dashboardReducer";
import {PopupAlert} from "../../PopupAlert/PopupAlert";


export const NoteTask = () => {
    const {note, filternote} = useSelector(({noteReducer}) => noteReducer)
    const [activeItem, setActiveItem] = useState(null)
    const [data, setData] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const [user, setUser] = useState({})

    const deleteUser = (user) => {
        setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
        const fUsers = filternote.filter(i => i.id !== user.id)
        dispatch(filtredNote(fUsers))
    }
    const clickDeleteIcon = (user) => {
        setUser(user)
        dispatch(showPopupAlertAction(true))
    }

    const clickHandler = (i) => {
        setActiveItem(i.id)
        history.push(`/Создать/${i.type}`)
    }
    useEffect(() => {
        setData(filternote)
        dispatch(showOrgMenu(false))
    },[filternote])
    return (
        <>
            <PopupAlert name={user.type} showPopup={() => deleteUser(user)}/>
            <div className="table-users_head grid-row-5">
                <p>ID</p>
                <p>Название </p>
                <p>Описание</p>
                <p style={{marginLeft:"30px"}}>Тип</p>
                <p style={{textAlign: 'right'}}>Действия</p>
                <div className="table-line"></div>
            </div>
            <div className="table-users_body">
                {filternote && filternote.map(i => (
                    <div
                        className={`table-users_body-item grid-row-5 ${activeItem === i.id ? 'active-item-table' : ''}`}
                        key={i.id}>
                        <p onClick={()=>clickHandler(i)}>{i.userId}</p>
                        <p onClick={()=>clickHandler(i)}>{i.name}</p>
                        <p onClick={()=>clickHandler(i)}>{i.description}</p>
                        <p style={{marginLeft:"30px"}} onClick={()=>clickHandler(i)}>{i.type}</p>
                        <div className="table-user_actions">
                            <img src={edit} alt="edit"/>
                            <img src={deleteI} alt="deleteI" onClick={() => clickDeleteIcon(i)}/>
                        </div>
                        <div className="table-line"></div>
                    </div>
                ))}
            </div>
        </>
    )
}
