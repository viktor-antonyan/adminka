import React, {useEffect, useState} from 'react';
import  {Link} from "react-router-dom";
import plus from "../../../../img/plus.svg";
import filter from "../../../../img/filter-icon.svg";
import {useDispatch} from "react-redux";
import WorkBlog from "./TypeWorkBlog/WorkBlog";
import GroupWorkBlog from "./GroupWorkBlog/GroupWorkBlog";
import WorkSticker from "./Sticker/WorkSticker";
import {showOrgMenu} from "../../../../redux/reducers/organizationReducer";


export const CreateTypeWork = () => {
    const [activeMenu, setActiveMenu] = useState('Вид-работ')
    const dispatch = useDispatch()
    const clickMenu = (menu) => {
        setActiveMenu(menu)
    }
    useEffect(()=>{
        dispatch(showOrgMenu(false))
    },[])
    return (
        <div className="dashboard-content_tabs">
            <div className="dashboard-content_tabs-content">
                <div className="organization-page">
                    <div className="organization-page_tabs">
                        <div className="user-content_tabs">
                            <div className={`content_tabs-item ${activeMenu === 'Вид-работ' ? 'tab-active' : ''}`}
                                 onClick={() => clickMenu('Вид-работ')}>Вид работ</div>
                            <div className={`content_tabs-item ${activeMenu === 'Группа-видов-работ' ? 'tab-active' : ''}`}
                                 onClick={() => clickMenu('Группа-видов-работ')}>Группа видов работ</div>
                            <div className={`content_tabs-item ${activeMenu === 'Стикеры-для-файлов' ? 'tab-active' : ''}`}
                                 onClick={() => clickMenu('Стикеры-для-файлов')}>Стикеры для файлов</div>
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
                        activeMenu === 'Вид-работ' && <WorkBlog /> ||
                        activeMenu === 'Группа-видов-работ' && <GroupWorkBlog /> ||
                        activeMenu === 'Стикеры-для-файлов' && <WorkSticker />
                    }
                </div>

            </div>
        </div>
    );
}
