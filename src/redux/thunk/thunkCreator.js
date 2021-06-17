import {usersApi} from "./Api";
import {filtredUsers, getUsersAction} from "../reducers/usersReducer";
import {filtredRequirements, isLoadingAction, setRequirementAction, showUsers} from "../reducers/dashboardReducer";
import {
    filtredOrganization,
    filtredOrganizationCluster,
    getOrganizationUsers,
    getOrgCluster
} from "../reducers/organizationReducer";
import {filtredRole, setRole} from "../reducers/roleReducer";
import {filtredTaskUsers, getUsersTaskAction} from "../reducers/typeTaskReducer";
import {filtredPriorityUsers, getUsersPriorityAction} from "../reducers/priorityReducer";
import {filtredWorks, getWorksAction} from "../reducers/typeWorkReducer";
import {filtredGroups, getGroupAction} from "../reducers/groupReducer";
import {filtredSticker, getStickerAction} from "../reducers/stickerReducer";
import {filtredCloseData, getExplainCloseAction} from "../reducers/explainReducer";
import {filtredResult, getResultAction} from "../reducers/resultpageReducer";
import {filtredTypeObject, getTypeObjectAction} from "../reducers/typeObjectReducer";
import {filtredAtribute, getAtributeAction} from "../reducers/atributeReducer";
import {filtredRegions, getRegions} from "../reducers/regionsReducer";
import {filtredCity, getCityAction} from "../reducers/cityReducer";
import {filterJournalAction, getJournalAction} from "../reducers/electronicJournalReducer";
import {filtredfinishDashboard, finishDashboardAction} from "../reducers/finishDashboardReducer";
import {filtredNote, getNoteAction} from "../reducers/noteTaskReducer";


export const getUsersData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getUsersAction(data.data.users))
    dispatch(filtredUsers(data.data.users))
    dispatch(showUsers(true))
}
export const getOrganizationData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getOrganizationUsers(data.data.organizationUsers))
    dispatch(filtredOrganization(data.data.organizationUsers))
    dispatch(showUsers(true))
}
export const getOrganizationClusterData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getOrgCluster(data.data.organizationCluster))
    dispatch(filtredOrganizationCluster(data.data.organizationCluster))
    dispatch(showUsers(true))
}
export const getRequirementData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(setRequirementAction(data.data.requirement))
    dispatch(filtredRequirements(data.data.requirement))
    dispatch(showUsers(true))
}
export const getRoleData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(setRole(data.data.role))
    dispatch(filtredRole(data.data.role))
    dispatch(showUsers(true))
}

export const getTaskData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getUsersTaskAction(data.data.typeTask))
    dispatch(filtredTaskUsers(data.data.typeTask))
    dispatch(showUsers(true))
}

export const getPriorityData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getUsersPriorityAction(data.data.priority))
    dispatch(filtredPriorityUsers(data.data.priority))
    dispatch(showUsers(true))
}

export const getWorksData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getWorksAction(data.data.typeWork))
    dispatch(filtredWorks(data.data.typeWork))
    dispatch(showUsers(true))
}

export const getGroupData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getGroupAction(data.data.typeGroupWork))
    dispatch(filtredGroups(data.data.typeGroupWork))
    dispatch(showUsers(true))
}

export const getStickerData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getStickerAction(data.data.sticker))
    dispatch(filtredSticker(data.data.sticker))
    dispatch(showUsers(true))
}

export const getExplainCloseData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getExplainCloseAction(data.data.explainClose))
    dispatch(filtredCloseData(data.data.explainClose))
    dispatch(showUsers(true))
}

export const getResultCloseData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getResultAction(data.data.resultClose))
    dispatch(filtredResult(data.data.resultClose))
    dispatch(showUsers(true))
}
export const getTypeObject = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getTypeObjectAction(data.data.typeObject))
    dispatch(filtredTypeObject(data.data.typeObject))
    dispatch(showUsers(true))
}
export const getAtribute = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getAtributeAction(data.data.atributes))
    dispatch(filtredAtribute(data.data.atributes))
    dispatch(showUsers(true))
}
export const getRegionsData = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
        if(data){
            dispatch(isLoadingAction(false))
        }
    dispatch(getRegions(data.data.regions))
    dispatch(filtredRegions(data.data.regions))
    dispatch(showUsers(true))
}
export const getCity = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
    if(data){
        dispatch(isLoadingAction(false))
    }
    dispatch(getCityAction(data.data.city))
    dispatch(filtredCity(data.data.city))
    dispatch(showUsers(true))
}
export const getJournal = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
    if(data){
        dispatch(isLoadingAction(false))
    }
    dispatch(getJournalAction(data.data.journal))
    dispatch(filterJournalAction(data.data.journal))
}
export const getFinishDashboard = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
    if(data){
        dispatch(isLoadingAction(false))
    }
    dispatch(finishDashboardAction(data.data.number))
    dispatch(filtredfinishDashboard(data.data.number))
    dispatch(showUsers(true))
}
export const getNote = () =>  async (dispatch) => {
    const data = await usersApi.getUsers()
    if(data){
        dispatch(isLoadingAction(false))
    }
    dispatch(getNoteAction(data.data.noteTask))
    dispatch(filtredNote(data.data.noteTask))
    dispatch(showUsers(true))
}
