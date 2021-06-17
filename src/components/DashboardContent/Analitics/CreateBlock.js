import React from 'react';
import line from '../../../img/Line 73.png';
import cross from '../../../img/CrosVector.png';
import {Link} from "react-router-dom";

const CreateBlock = () =>   {

    return (
        <div className={'createBlock'}>
            <p className="widjet">
                Создание виджета “Блоки”
            </p>
            <div className="quantity">
                <p>Количество блоков</p>
                <select name="" id="" className='quantitySelect'>
                    <option value="" disabled selected
                            hidden>3
                    </option>
                    <option value="Администратор кластера организации">
                        5
                    </option>
                    <option value="Администратор организации">6</option>
                </select>
            </div>
            <div className="quantity">
                <p>Фильтры</p>
                <button className='some'>Фильтр 1 <img src={cross} alt="cross"/></button>
                <button className='some'>Фильтр 2 <img src={cross} alt="cross"/></button>
                <button className='some'>Фильтр 3 <img src={cross} alt="cross"/></button>
                <span className='spans'>+ Добавить фильтр</span>
            </div>
            <img src={line} alt="line" className={'liner'}/>
            <div className={'stolb'}>
                <p className={'same'}>Блок №1</p>
                <div className="mix">
                    <p>Название блока</p>
                    <input type="text" className={'mixInput'} placeholder='Введите название' disabled />
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'} checked/>
                        <p className={"mixCheckP"}>Тип объекта</p>
                    </div>
                    <select name="" id="" className='mixInput'>
                        <option value="" disabled selected
                                hidden>Дворовая территория
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
                        <p className={"mixCheckP"}>Группа видов работ</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>В работе
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
            <div className={'stolb'}>
                <p className={'same'}>Блок №2</p>
                <div className="mix">
                    <p>Название блока</p>
                    <input type="text" className={'mixInput'} placeholder='Введите название' disabled />
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'} checked/>
                        <p className={"mixCheckP"}>Тип объекта</p>
                    </div>
                    <select name="" id="" className='mixInput'>
                        <option value="" disabled selected
                                hidden>Дворовая территория
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
                        <p className={"mixCheckP"}>Группа видов работ</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>В работе
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
            <div className={'stolb'}>
                <p className={'same'}>Блок №3</p>
                <div className="mix">
                    <p>Название блока</p>
                    <input type="text" className={'mixInput'} placeholder='Введите название' disabled />
                </div>
                <div className="mix">
                    <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'} checked/>
                        <p className={"mixCheckP"}>Тип объекта</p>
                    </div>
                    <select name="" id="" className='mixInput'>
                        <option value="" disabled selected
                                hidden>Дворовая территория
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
                        <p className={"mixCheckP"}>Группа видов работ</p>
                    </div>
                    <select name="" id="" className='mixInput' disabled={true}>
                        <option value="" disabled selected
                                hidden>В работе
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

export default CreateBlock;
