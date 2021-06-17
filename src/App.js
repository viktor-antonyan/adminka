import React, {useEffect} from "react";
import "./index.css"
import "./fonts.css"
import {DashboardMenu} from "./components/DashboardMenu/DshboardMenu";
import {DashboardHeader} from "./components/DashboardContent/DashboardHeader";
import {
    getAtribute, getCity,
    getExplainCloseData,
    getGroupData, getJournal, getNote,
    getOrganizationClusterData,
    getOrganizationData, getPriorityData, getRegionsData,
    getRequirementData, getResultCloseData,
    getRoleData, getStickerData, getTaskData, getTypeObject,
    getUsersData, getWorksData
} from "./redux/thunk/thunkCreator";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {withRouter} from 'react-router-dom'
import {setShowJournal} from "./redux/reducers/electronicJournalReducer";
import {PopupAlert} from "./components/PopupAlert/PopupAlert";

function App({history}) {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(({authReducer})=>authReducer)
    useEffect(() => {
        dispatch(getUsersData())
        //
        dispatch(getOrganizationData())
        dispatch(getRequirementData())
        dispatch(getRoleData())
        dispatch(getOrganizationClusterData())
        dispatch(getTaskData())
        dispatch(getPriorityData())
        dispatch(getWorksData())
        dispatch(getGroupData())
        dispatch(getStickerData())
        dispatch(getResultCloseData())
        dispatch(getExplainCloseData())
        dispatch(getTypeObject())
        dispatch(getAtribute())
        dispatch(getRegionsData())
        dispatch(getCity())
        dispatch(getJournal())
        dispatch(getNote())

        //
        if(!isAuth){
            history.push('/register')
        }
    }, [])

    return (
        <div className="container">
            <Switch>
                {<Route path='/register'><Register/></Route>}
                <Route path='/login'><Login/></Route>
                <Route path={'/'}>
                    <div className="ui-container ui-container-2">
                        <DashboardMenu/>
                        <DashboardHeader/>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default withRouter(App);
