import {showPopupAlertAction} from "../redux/reducers/dashboardReducer";

export const deleteFunc = (el, elVal, arr, dispatchFunc, dispatch) => {
    setTimeout(() => dispatch(showPopupAlertAction(false)), 0)
    const result = arr.filter(i => i.id !== el.id)
    dispatch(dispatchFunc(result))
}
