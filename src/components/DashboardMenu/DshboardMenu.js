import React from "react"
import house from "../../img/dashboard-nav/house-icon.svg";
import textIcon from "../../img/dashboard-nav/text-icon.svg";
import {Menu} from "./menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {getJournal} from "../../redux/thunk/thunkCreator";

export const DashboardMenu = () => {
    const {showMainMenu} = useSelector(({dashboardReducer}) => dashboardReducer)
    const dispatch = useDispatch()
    const clickTitle = () => {
        dispatch(getJournal())
    }
    return (
        <div className="dashboard-menu">
            <div className="dashboard-menu_header" style={{position: "fixed"}}><img src={house} alt="hou"/><img
                src={textIcon} alt="textIcon"/>
                <div className="text-menu" style={{top: "55px", position: "absolute", cursor: 'pointer'}}
                     onClick={clickTitle}>{showMainMenu ? 'MENU' : 'ЗАДАНИЯ'}</div>
            </div>
            <Menu/>
        </div>
    )
}
