import React, {useEffect, useState} from 'react'
import burger from "../../img/burger.svg";
import searchInput from "../../img/search-input.svg";
import Avatar from "../../img/Avatar.png";
import logoutIcon from "../../img/logout-icon.svg";
import plus from "../../img/plus.svg";
import filterIcon from "../../img/filter-icon.svg";
import {useDispatch, useSelector} from "react-redux";
import {DashboardContent} from "./DashboardUsers/DashboardContent";
import {DashboardOrganization} from "./Organization/DashboardOrganization";
import {Link, Route, Switch, useHistory} from "react-router-dom";
import {getOrganizationClusterData} from "../../redux/thunk/thunkCreator";
import {DashboardOrgCluster} from "./Organization/DashboardOrgCluster";
import {DashboardRequirement} from "./Requirement/DshboardRequirement";
import RoleForm from "./Role/RoleForm";
import Loader from "../Loader/Loader";
import {filtredUsers} from "../../redux/reducers/usersReducer";
import OrganizationFormEdit from "./Organization/OrganizationFormEdit";
import OrganizationClusterForm from "./Organization/OrganizationClusterForm";
import emtyDashboard from "./../../img/emtyDashboard.jpg"
import {RoleRequirement} from "./Role/RoleRequirement";
import {filtredOrganization} from "../../redux/reducers/organizationReducer";
import {filtredRequirements, showMainMenu, showMainMenuAction} from "../../redux/reducers/dashboardReducer";
import {filtredRole} from "../../redux/reducers/roleReducer";
import RequirementForm from "./Requirement/RequirementForm";
import {DashboardCreateUsers} from "./DashboardUsers/DashboardCreateUsers";
import {TypeTask} from "./information/TypeTask";
import {CreatePriority} from "./information/CreatePriority";
import CreateTask from "./information/CreateTask";
import CreatePriorityForm from "./information/CreatePriorityForm";
import WorkBlogForm from "./information/TypeWork/TypeWorkBlog/WorkBlogForm";
import {CreateTypeWork} from "./information/TypeWork/CreateTypeWork";
import ResultClosing from "./information/ResultClose/ResultClosing";
import GroupWorkBlogForm from "./information/TypeWork/GroupWorkBlog/GroupWorkBlogForm";
import WorkStickerForm from "./information/TypeWork/Sticker/WorkStickerForm";
import ResultCloseForm from "./information/ResultClose/CloseResult/ResultCloseForm";
import ExplainCloseForm from "./information/ResultClose/ExplainCloseResult/ExplainCloseForm";
import {CreateObjectDiscussion} from "./ObjectDiscussion/AdminInformation/CreateObjectDiscussion";
import RegionsForm from "./ObjectDiscussion/AdminInformation/Regions/RegionsForm";
import TypeObjectForm from "./ObjectDiscussion/AdminInformation/TypeObject/TypeObjectForm";
import AtributeForm from "./ObjectDiscussion/AdminInformation/Atribute/AtributeForm";
import CityForm from "./ObjectDiscussion/AdminInformation/City/CityForm";
import {Map} from "./ObjectDiscussion/Generator/Map";
import ObjectList from "./ObjectDiscussion/TransferObject/ObjectList";
import {ElectronicJournal} from "./ElectronicJournal/ElectronicJournal";
import arrowIcon from "../../img/arrowRotate.png";
import CreateJournalForm from "./ElectronicJournal/CreateJournalForm";
import Dashboard from "./Analitics/Dashboard";
import CreateTable from "./Analitics/CreateTable";
import CreateBlock from "./Analitics/CreateBlock";
import CreateCard from "./Analitics/CreateCard";
import CreateGistogram from "./Analitics/CreateGistogram";
import {NoteTask} from "./Analitics/NoteTask";
import NoteTaskForm from "./Analitics/NoteTaskForm";
import {PopupAlert} from "../PopupAlert/PopupAlert";


// const burgerMenu = document.querySelector('.burgerMenu')
// const popupHeader = document.querySelector('.dashboard-menu')
//
//
//
// burgerMenu.addEventListener('click',()=>{
//     if(popupHeader.className === 'dashboard-menu'){
//         popupHeader.className += " responsive"
//     }else{
//         popupHeader.className = "dashboard-menu"
//     }
// })


export const DashboardHeader = () => {
    const {users, filterUsers} = useSelector(({usersReducer}) => usersReducer)
    const {organizationUsers, filterOrganizationUsers} = useSelector(({organizationReducer}) => organizationReducer)
    const {requiremets, filterRequiremets} = useSelector(({dashboardReducer}) => dashboardReducer)
    const {role, filterRole} = useSelector(({roleReducer}) => roleReducer)
    const {showUsers, isLoading, showMainMenu} = useSelector(({dashboardReducer}) => dashboardReducer)
    const {showOrgMenu} = useSelector(({organizationReducer}) => organizationReducer)
    const {show} = useSelector(({electronicJournalReducer}) => electronicJournalReducer)
    const [activeOrgMenu, setActiveOrgMenu] = useState('Организации')
    const [showBack, setShowBack] = useState(true)
    const [value, setValue] = useState('')
    const [showExport, setShowExport] = useState(true)
    const [addClass, setAddClass] = useState(false)
    const dispatch = useDispatch()

    const clickOrgMenu = (name) => {
        setActiveOrgMenu(name)
        if (name === 'Кластеры') {
            dispatch(getOrganizationClusterData())
        }
    }

    const history = useHistory()
    const pathName = history.location.pathname

    useEffect(() => {
        if (!show) {
            setShowBack(false)
        }
        if (pathName.includes('/Создать') || pathName === "/" ||
            pathName.includes('/Вид-работ') ||
            pathName.includes('/Результат-закрытия') ||
            pathName.includes('/Справочники') ||
            pathName.includes('/Георедактор') ||
            pathName.includes('/Перечень-объектов') ||
            pathName.includes('/Электронный-журнал') ||
            pathName.includes('/Dashboard')
        ) {
            setShowBack(false)
            setAddClass(true)
        } else {
            setShowBack(true)
        }
        if (pathName === '/Кластеры' || pathName === '/Должности' || pathName === '/Роли') {
            setShowExport(false)
        } else {
            setShowExport(true)
        }
        if (pathName === '/Организации') {
            setActiveOrgMenu('Организации')
        }

    })
    const filtredData = (data, filterEL) => {
        return data.filter(i => i[filterEL].toLowerCase().includes(value.trim().toLowerCase())
        )
    }
    // const filtredData = users.filter(i => (
    //         i.personality.toLowerCase().includes(value.toLowerCase())
    //     ),
    // )
    const changeInputValue = (e) => {
        setValue(e.target.value)
        if (pathName === "/Пользователи") {
            dispatch(filtredUsers(filtredData(users, 'personality')))
        } else if (pathName === "/Организации") {
            dispatch(filtredOrganization(filtredData(organizationUsers, 'organization')))
        } else if (pathName === "/Должности") {
            dispatch(filtredRequirements(filtredData(requiremets, 'require')))
        } else if (pathName === "/Роли") {
            dispatch(filtredRole(filtredData(role, 'require')))
        }

        if (e.target.value === '') {
            if (pathName === "/Пользователи") {
                dispatch(filtredUsers(users))
            } else if (pathName === "/Организации") {
                dispatch(filtredOrganization(organizationUsers))
            } else if (pathName === "/Должности") {
                dispatch(filtredRequirements(filtredData(requiremets, 'require')))
            } else if (pathName === "/Роли") {
                dispatch(filtredRole(role))
            }
        }

    }
    const submitForm = (e) => {
        e.preventDefault()
        if (e.type === "submit") {
            if (pathName === "/Пользователи") {
                dispatch(filtredUsers(filtredData(users, 'personality')))
                setValue('')
            } else if (pathName === "/Организации") {
                dispatch(filtredOrganization(filtredData(organizationUsers, 'organization')))
                setValue('')
            } else if (pathName === "/Должности") {
                dispatch(filtredRequirements(filtredData(requiremets, 'require')))
                setValue('')
            } else if (pathName === "/Роли") {
                dispatch(filtredRole(filtredData(role, 'require')))
                setValue('')
            }
        }
        if (e.target.value === '') {
            if (pathName === "/Пользователи") {
                dispatch(filtredUsers(users))
            } else if (pathName === "/Организации") {
                dispatch(filtredOrganization(organizationUsers))
            } else if (pathName === "/Должности") {
                dispatch(filtredOrganization(requiremets))
            } else if (pathName === "/Роли") {
                dispatch(filtredRole(role))
            }
        }
    }
    const clickCreateButton = () => {
        setShowBack(false)
    }
    const clickBurgerMenu = () => {
        // console.log(history.location.pathname)
        // dispatch(showMainMenuAction(false))
    }
    const clickArrowButton = () => {
        dispatch(showMainMenuAction(true))
    }

    return (
        <div className="dashboard-content">
            <div className="user-block" style={{position: "fixed"}}>
                <div className="user-block_search">
                    {
                        showMainMenu ?
                            // <Link to={history.location.pathname !== '/Эл-журнал' && '/Электронный-журнал'}>
                            <img
                                src={burger} alt="burger" style={{cursor: 'pointer'}}
                                className={'burgerMenu'}
                                onClick={clickBurgerMenu}/>
                            // </Link>
                            :
                            <div className={"journalCloseDiv"} onClick={clickArrowButton}><img src={arrowIcon}
                                                                                               alt="arrowIcon"/></div>
                    }
                    {showMainMenu ? <form>
                        <div className="search-input"><img src={searchInput}
                                                           alt="searchInput"/><input
                            placeholder="Поиск по ID" value=""/></div>
                    </form> : <p className={"journalTitle"}>Электронный журнал</p>}
                </div>
                <div className="user-block_person">
                    <div className="person-name"><img src={Avatar} alt="Avatar"
                                                      className="avatar"/>
                        <p>Иван Иванов</p></div>
                    <Link to={'/login'}><img src={logoutIcon} alt="logoutIcon" className="logout-icon"/></Link></div>
            </div>
            {showOrgMenu &&
            <div className="organization-page" style={{paddingTop: "40px"}}>
                <div className="organization-page_tabs">
                    <div className="user-content_tabs">
                        <div
                            className={`content_tabs-item ${activeOrgMenu === 'Организации' ? 'tab-active' : ''}`}
                            onClick={() => clickOrgMenu('Организации')}><Link to={'/Организации'}>Организации</Link>
                        </div>
                        <div
                            className={`content_tabs-item ${activeOrgMenu === 'Кластеры' ? 'tab-active' : ''}`}
                            onClick={() => clickOrgMenu('Кластеры')}><Link to={'/Кластеры'}>Кластеры организаций</Link>
                        </div>
                    </div>
                </div>
            </div>
            }
            {showUsers ?
                <div className={`dashboard-content_tabs ${!showOrgMenu ? '' : ''}`}
                     style={{
                         padding:
                             pathName === '/Пользователи'
                             || pathName === '/Должности'
                             || pathName === '/Роли'
                             || pathName === '/Тип-задания'
                             || pathName === '/Приоритет'
                             || pathName === '/Список-отчетов'
                                 ? '90px 30px'
                                 : '57px 30px'}}>
                    <div className="dashboard-content_tabs-content">
                        {showBack && !show ? <div className="actions-panel">
                            <form onSubmit={submitForm}><input placeholder="Поиск" className="input" value={value}
                                                               onChange={changeInputValue}/></form>
                            <div className="actions-panel_button">
                                <Link to={`/Создать${history.location.pathname}`}>
                                    <button className="button submit undefined" onClick={clickCreateButton}><img
                                        src={plus}
                                        alt="plus"/>Создать
                                    </button>
                                </Link>
                                {showExport && <button className="button white green-outline">Экспорт</button>}
                                <div className="filter-button"><img src={filterIcon} alt="filterIcon"/>
                                    <p>Фильтры</p></div>
                            </div>
                        </div> : ''}
                        {isLoading ? <Loader/> :
                            <div className="table-users">
                                {!show &&
                                <Switch>
                                    <Route path='/Пользователи'><DashboardContent/></Route>
                                    <Route path='/Организации'><DashboardOrganization/></Route>
                                    <Route path='/Кластеры'><DashboardOrgCluster/></Route>
                                    <Route path='/Должности'><DashboardRequirement/></Route>
                                    <Route path='/Роли'><RoleRequirement/></Route>
                                    <Route path='/Тип-задания'><TypeTask/></Route>
                                    <Route path='/Приоритет'><CreatePriority/></Route>
                                    <Route path='/Список-отчетов'><NoteTask/></Route>
                                </Switch>
                                }
                            </div>
                        }
                    </div>
                    {!show &&
                    <Switch>
                        <Route path='/Создать/Роли'><RoleForm/></Route>
                        <Route path='/Создать/Должности'><RequirementForm/></Route>
                        <Route path='/Создать/Организации'><OrganizationFormEdit/></Route>
                        //
                        {/*<Route path="/Создать/задание"><CreateJournalForm/></Route>*/}
                        //
                        <Route path='/Создать/Кластеры'><OrganizationClusterForm/></Route>
                        <Route path='/Создать/Пользователи'><DashboardCreateUsers/></Route>
                        <Route path='/Создать/Тип-задания'><CreateTask/></Route>
                        <Route path='/Создать/Приоритет'><CreatePriorityForm/></Route>
                        <Route path='/Создать/Вид-работ'><WorkBlogForm/></Route>
                        <Route path='/Создать/Группа-видов-работ'><GroupWorkBlogForm/></Route>
                        <Route path='/Создать/Стикеры-для-файлов'><WorkStickerForm/></Route>
                        <Route path='/Создать/Результаты-закрытия'><ResultCloseForm/></Route>
                        <Route path='/Создать/Описание-закрытия'><ExplainCloseForm/></Route>
                        <Route path='/Создать/Типы-объектов'><TypeObjectForm/></Route>
                        <Route path='/Создать/Атрибуты'><AtributeForm/></Route>
                        <Route path='/Создать/Округи'><RegionsForm/></Route>
                        <Route path='/Создать/Районы'><CityForm/></Route>
                        <Route path='/Вид-работ'><CreateTypeWork/></Route>
                        <Route path='/Результат-закрытия'><ResultClosing/></Route>
                        <Route path='/Справочники'><CreateObjectDiscussion/></Route>
                        <Route path='/Георедактор'><Map/></Route>
                        <Route path='/Перечень-объектов'><ObjectList/></Route>

                        <Route path='/Dashboard'><Dashboard/></Route>
                        <Route path='/Создать/Список-отчетов'><NoteTaskForm/></Route>

                        <Route path='/Создать/Таблицы'><CreateTable/></Route>
                        <Route path='/Создать/Блоки'><CreateBlock/></Route>
                        <Route path='/Создать/Карта'><CreateCard/></Route>
                        <Route path='/Создать/Гистограмма'><CreateGistogram/></Route>
                        {/*<Route path='/menu'><ElectronicJournal/></Route>*/}
                        {/*{show && <ElectronicJournal/>}*/}
                        {/*<Route path='/'><img src={emtyDashboard} alt={"exitDash"}/></Route>*/}
                    </Switch>
                    }
                    {show && <ElectronicJournal/>}
                    {pathName === "/Электронный-журнал" && <ElectronicJournal/>}
                </div>
                : ''
            }
        </div>
    )
}
