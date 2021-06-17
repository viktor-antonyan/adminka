import React from 'react';
import line from '../../../img/Line 73.png';
import cross from '../../../img/CrosVector.png';
import {Link} from "react-router-dom";

const CreateGistogram = () =>   {
    return (
        <div className={'createBlock'}>
            <p className="widjet">
                Создание виджета “Гистограммы”
            </p>
            <img src={line} alt="line" className={'liner'}/>
            <div className="mix">
                <p className={'gistP'}>Название гистограммы</p>
                <input type="text" className={'mixInput'} placeholder='Введите название' disabled />
            </div>
            <div className={'stolb'}>
                <p className={'same'}>Фильтры</p>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'} checked/>
                        <p className={"mixCheckP"}>Группа видов работ</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'} checked/>
                        <p className={"mixCheckP"}>Вид работ</p>
                    </div>
                    <select name="" id="" className='mixInput'>
                        <option value="" disabled selected
                                hidden>Уборка мусора
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'}/>
                        <p className={"mixCheckP"}>Этап выполнения</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'}/>
                        <p className={"mixCheckP"}>Результат закрытия</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'}/>
                        <p className={"mixCheckP"}>Описание результата закрытия</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'}/>
                        <p className={"mixCheckP"}>Организация-исполнитель</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'}/>
                        <p className={"mixCheckP"}>Кластер организаций-исполнителей</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <img src={line} alt="line" className={'liner'}/>
            </div>
            <Link to={"/Список-отчетов"}><button className='uno' onClick={()=> window.scrollTo(0,0)}>Отмена</button></Link>
            <button className='dos'>Сохранить</button>
        </div>
    );
}

export default CreateGistogram;
