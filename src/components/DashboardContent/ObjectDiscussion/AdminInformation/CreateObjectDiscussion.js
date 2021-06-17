import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import TypeObject from "./TypeObject/TypeObject";
import Atribute from "./Atribute/Atribute";
import Regions from "./Regions/Regions";
import plus from "../../../../img/plus.svg";
import City from "./City/City";
import filter from "../../../../img/filter-icon.svg"


export const CreateObjectDiscussion = () => {
    const [activeMenu, setActiveMenu] = useState('Типы-объектов')
    const dispatch = useDispatch()
    const clickMenu = (menu) => {
        setActiveMenu(menu)
    }
    useEffect(() => {

    }, [])
    return (
        <div className="dashboard-content_tabs">
            <div className="dashboard-content_tabs-content">
                <div className="organization-page">
                    <div className="organization-page_tabs">
                        <div className="user-content_tabs">
                            <div className={`content_tabs-item ${activeMenu === 'Типы-объектов' ? 'tab-active' : ''}`}
                                 onClick={() => clickMenu('Типы-объектов')}>Типы объектов</div>
                            <div className={`content_tabs-item ${activeMenu === 'Атрибуты' ? 'tab-active' : ''}`}
                                 onClick={() => clickMenu('Атрибуты')}>Атрибуты</div>
                            <div className={`content_tabs-item ${activeMenu === 'Округи' ? 'tab-active' : ''}`}
                                 onClick={() => clickMenu('Округи')}>Округив</div>
                            <div className={`content_tabs-item ${activeMenu === 'Районы' ? 'tab-active' : ''}`}
                                 onClick={() => clickMenu('Районы')}>Районы</div>
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
                        activeMenu === 'Типы-объектов' && <TypeObject /> ||
                        activeMenu === 'Атрибуты' && <Atribute /> ||
                        activeMenu === 'Округи' && <Regions /> ||
                        activeMenu === 'Районы' && <City />
                    }
                </div>
            </div>
        </div>
    );
}
