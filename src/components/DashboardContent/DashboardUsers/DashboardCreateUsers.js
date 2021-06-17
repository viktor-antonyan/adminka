import React, {useState} from 'react';
import arrow from '../../../img/selector/arrow.svg'
import {Link} from "react-router-dom";
import CreateUsersForm from "./CreateUsersForm";
import CreateRuleForm from "./CreateRuleForm";

export const DashboardCreateUsers = () => {
    const [activeMenu, setActiveMenu] = useState('Данные-пользователя')
    const clickMenu = (menu) => {
        setActiveMenu(menu)
    }
    return (
        <div>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="user">
                        <div className="user-title">Создать пользователя</div>
                        <div className="user-content">
                            <div className="user-content_tabs">
                                <div
                                    className={`content_tabs-item ${activeMenu === 'Данные-пользователя' ? 'tab-active' : ''}`}
                                    onClick={() => clickMenu('Данные-пользователя')}>Данные пользователя
                                </div>
                                <div
                                    className={`content_tabs-item ${activeMenu === 'Права-доступа' ? 'tab-active' : ''}`}
                                    onClick={() => clickMenu('Права-доступа')}>Права доступа
                                </div>
                            </div>
                            {
                                activeMenu === 'Данные-пользователя' ? <CreateUsersForm /> : <CreateRuleForm/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}