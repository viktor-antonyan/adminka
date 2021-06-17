import React, {useEffect, useState} from 'react';
import plus from '../../../../img/plus.svg'
import filter from '../../../../img/filter-icon.svg';
import WorkBlog from "../TypeWork/TypeWorkBlog/WorkBlog";
import GroupWorkBlog from "../TypeWork/GroupWorkBlog/GroupWorkBlog";
import ResultClosePage from "./CloseResult/ResultClosePage";
import ExplainClose from "./ExplainCloseResult/ExplainClose";
import {Link} from "react-router-dom";
import {showOrgMenu} from "../../../../redux/reducers/organizationReducer";
import {useDispatch} from "react-redux";



const ResultClosing = () => {
    const [activeMenu, setActiveMenu] = useState('Результаты-закрытия')
    const dispatch = useDispatch()
    const clickMenu = (menu) => {
        setActiveMenu(menu)
    }
    useEffect(()=>{
        dispatch(showOrgMenu(false))
    },[])
    return (
        <div>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="organization-page">
                        <div className="organization-page_tabs">
                            <div className="user-content_tabs">
                                <div className={`content_tabs-item ${activeMenu === 'Результаты-закрытия' ? 'tab-active' : ''}`}
                                     onClick={() => clickMenu('Результаты-закрытия')}>Результаты закрытия</div>
                                <div className={`content_tabs-item ${activeMenu === 'Описание-закрытия' ? 'tab-active' : ''}`}
                                     onClick={() => clickMenu('Описание-закрытия')}>Описание результата закрытия</div>
                            </div>
                        </div>
                        <div className="actions-panel">
                            <form><input placeholder="Поиск" className="input" value=""/></form>
                            <div className="actions-panel_button">
                                <Link to={`/Создать/${activeMenu}`} style={{color:"white"}}>
                                    <button className="button submit undefined"><img src={plus}
                                                                                     alt="plus"/>Создать
                                    </button>
                                </Link>
                                <div className="filter-button"><img src={filter} alt="filter"/>
                                    <p>Фильтры</p></div>
                            </div>
                        </div>

                        {
                            activeMenu === 'Результаты-закрытия' && <ResultClosePage /> ||
                           activeMenu === 'Описание-закрытия' && <ExplainClose />
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultClosing;
