import React, {useEffect, useState} from "react"
import adminIcon from "../../../img/dashboard-nav/admin-icon.svg";
import arrowIcon from "../../../img/Arrow-icon.svg";
import spravochnik from "../../../img/dashboard-nav/spravochnik.svg";
import obje from "../../../img/dashboard-nav/obje.svg";
import magazine from "../../../img/dashboard-nav/magazine.svg";
import analitik from "../../../img/dashboard-nav/analitik.svg";
import {
    getOrganizationData,
    getPriorityData,
    getRequirementData,
    getTaskData,
    getUsersData
} from "../../../redux/thunk/thunkCreator";
import {useDispatch, useSelector} from "react-redux";
import {showMainMenuAction, showUsers} from "../../../redux/reducers/dashboardReducer";
import {Link, useHistory} from "react-router-dom";
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {filterJournalAction, setShowJournal} from "../../../redux/reducers/electronicJournalReducer";
import {logicalExpression} from "@babel/types";

export const Menu = () => {
    const [open, setOpen] = useState(false)
    const [menuId, setMenuId] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)
    const [parentMenu, setParentMenu] = useState(null)
    const {activeButton} = useSelector(({usersReducer}) => usersReducer)
    const {show} = useSelector(({electronicJournalReducer}) => electronicJournalReducer)
    const {showMainMenu} = useSelector(({dashboardReducer}) => dashboardReducer)
    const {journal} = useSelector(({electronicJournalReducer}) => electronicJournalReducer)
    const [activeJournal,setActiveJournal] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const menus = [
        {
            id: 1,
            img: adminIcon,
            alt: 'adminIcon',
            title: 'Администрирование',
            arrowIcon,
            dropMenu: ['Пользователи', 'Организации', 'Должности', 'Роли']
        },
        {
            id: 2,
            img: spravochnik,
            alt: 'spravochnik',
            title: 'Справочник',
            arrowIcon,
            dropMenu: ['Тип-задания', 'Приоритет', 'Вид-работ', 'Результат-закрытия']
        },
        {
            id: 3,
            img: obje,
            alt: 'obje',
            title: 'Объекты обслуживания',
            arrowIcon,
            dropMenu: ['Справочники', 'Перечень-объектов', 'Георедактор']
        },
        {
            id: 4,
            img: magazine,
            alt: 'magazine',
            title: 'Электронный журнал',
            arrowIcon,
            dropMenu: []
        },
        {
            id: 5,
            img: analitik,
            alt: 'analitik',
            title: 'Аналитика и отчетность',
            arrowIcon,
            dropMenu: ['Список-отчетов','Dashboard']
        },
    ]
    const journalForm = [
        {id: 1, color: '#058ED9', title: 'Новое', value: 12, style: {}},
        {id: 2, color: '#F7B801', title: 'Назначено', value: 12345, style: {padding: "3px 1px"}},
        {id: 3, color: '#36B927', title: 'Прочитано', value: 45, style: {}},
        {id: 4, color: '#8371DE', title: 'В работе', value: 45, style: {}},
        {id: 5, color: '#C8CC1C', title: 'В ожидании', value: 67, style: {}},
        {id: 6, color: '#61C7CD', title: 'На доработке', value: 345, style: {}},
        {id: 7, color: '#E85F5C', title: 'Отклонено', value: 897, style: {}},
        {id: 8, color: '#C486F4', title: 'Закрыто', value: 123, style: {}},
    ]
    const toggleClick = (i) => {
        setOpen(true)
        setMenuId(i.id)
        setParentMenu(i.title)
        if (i.id === menuId) {
            setOpen(!open)
        }
        if (i.title === 'Электронный журнал') {
            dispatch(setShowJournal(true))
            dispatch(showMainMenuAction(false))
            // if(history.location.pathname !== "/Создать/задание"){
            //     history.push('/Электронный-журнал')
            history.push('/Эл-журнал')
            // }
        }
    }

    const clickDropMenu = (item, index) => {
        dispatch(setShowJournal(false))
        setActiveMenu(index)
        if (item === 'Пользователи') {
            // dispatch(getUsersData())
            dispatch(showOrgMenu(false))
        } else if (item === 'Организации') {
            // dispatch(getOrganizationData())
            dispatch(showOrgMenu(true))
        } else if (item === 'Должности') {
            // dispatch(getRequirementData())
            dispatch(showOrgMenu(false))
        } else if (item === 'Тип-задания') {
            dispatch(getTaskData())
            dispatch(showOrgMenu(false))
        } else if (item === 'Приоритет') {
            dispatch(getPriorityData())
            dispatch(showOrgMenu(false))
        }

    }
    const clickJournalMenu = (i) => {
        const filterJounal = journal.filter(j=>j.step.title.includes(i.title))
        dispatch(filterJournalAction(filterJounal))
        setActiveJournal(i.id)
        ///
        document.querySelector('.text-menu').addEventListener('click',()=>setActiveJournal(null))
    }
    return (
        <div className="dashboard-menu_points"
             style={{position: "fixed", marginTop: "203px"}}>
            {showMainMenu ?
                menus.map((i,index) => (
                    <div className="dashboard-menu_dropdown" key={index}>
                        <div className="dashboard-menu_dropdown-header">
                            <div className="dropdown-header_name">
                                <img src={i.img} alt={i.alt}/>
                                <h4 onClick={() => toggleClick(i)}>{i.title}</h4></div>
                            <img src={i.arrowIcon} alt="arrowIcon"
                                 className={`arrow-dashboard ${open && menuId === i.id ? 'false' : 'rotate'}`}
                                 onClick={() => toggleClick(i)} style={{marginLeft: "18px"}}/>
                        </div>
                        {
                            open && i.id === menuId ?
                                <div className="dashboard-menu_dropdown-content">
                                    {i.dropMenu.map((item, index) => (
                                        <Link to={`/${item}`}><p key={index} onClick={() => clickDropMenu(item, index)}
                                                                 className={activeMenu === index ? 'active-menu' : ''}>{item}</p>
                                        </Link>
                                    ))}
                                </div> : null
                        }

                    </div>
                )) : <div>
                    {journalForm.map(i => (
                        <div className={"journalBlock"} onClick={()=>clickJournalMenu(i)} key={i.id}>
                            <div className={"colorDiv"} style={{background: i.color}}></div>
                            <div className={'jBlockTextCount'}>
                                <span style={{color: i.id === activeJournal ? i.color : '#FFFFFF'}}>{i.title}</span>
                                <div style={i.style}>
                                    <p>{i.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>}
        </div>
    )
}
