import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {
    isDeletedAction,
    showPopupAlertAction,
    showPopupAndChangeDeleteAction
} from "../../redux/reducers/dashboardReducer";
import {filtredUsers} from "../../redux/reducers/usersReducer";

export const PopupAlert = (props) => {
    const dispatch = useDispatch()
    const {showPopupAlert} = useSelector(({dashboardReducer}) => dashboardReducer)
    const closePopup = () => {
        dispatch(showPopupAlertAction(false))
    }

    return (
        showPopupAlert &&
        <div className={"popupAlert"}>
            <p onClick={closePopup}>&#x2715;</p>
            <span>is delete ({props.name}) ?</span>
            <div>
                <button onClick={closePopup}>close</button>
                <button onClick={props.showPopup}>ok</button>
            </div>
        </div>
    )
}
