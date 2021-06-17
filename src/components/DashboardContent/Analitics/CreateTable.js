import React from 'react';
import line from '../../../img/Line 73.png'
import {Link} from "react-router-dom";

const CreateTable = () =>   {
        return (
            <div className={'createBlock'}>
               <p className="widjet">
                   Создание виджета “Таблицы”
               </p>
                <div className="quantity">
                    <p>Количество столбцов</p>
                    <select name="" id="" className='quantitySelect'>
                        <option value="" disabled selected
                                hidden>4
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <div className="quantity">
                    <p>Строки</p>
                    <select name="" id="" className='quantitySelectExpire'>
                        <option value="" disabled selected
                                hidden>Организация-исполнитель
                        </option>
                        <option value="Администратор кластера организации">
                            5
                        </option>
                        <option value="Администратор организации">6</option>
                    </select>
                </div>
                <img src={line} alt="line" className={'liner'}/>
                <div className={'stolb'}>
                    <p className={'same'}>Столбец №1</p>
                    <div className="mix">
                            <p className={"tableP"}>Название</p>
                        <input type="text" className={'mixInput'} placeholder='Введите название'/>
                    </div>
                    <div className="mix">
                        <div className={"checkP"}>
                        <input type="checkbox" className={'checkbox'} checked/>
                        <p className={"mixCheckP"}>Этап выполнения</p>
                        </div>
                        <select name="" id="" className='mixInput'>
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
                            <input type="checkbox" className={'checkbox'}/>
                            <p className={"mixCheckP"}>Резултат закытия</p>
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
                    <img src={line} alt="line" className={'liner'}/>
                </div>
                <div className={'stolb'}>
                    <p className={'same'}>Столбец №2</p>
                    <div className="mix">
                        <p className={"tableP"}>Название</p>
                        <input type="text" className={'mixInput'} placeholder='Введите название'/>
                    </div>
                    <div className="mix">
                        <div className={"checkP"}>
                            <input type="checkbox" className={'checkbox'} checked/>
                            <p className={"mixCheckP"}>Этап выполнения</p>
                        </div>
                        <select name="" id="" className='mixInput'>
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
                            <input type="checkbox" className={'checkbox'} checked={true}/>
                            <p className={"mixCheckP"}>Резултат закытия</p>
                        </div>
                        <select name="" id="" className='mixInput' disabled={true}>
                            <option value="" disabled selected
                                    hidden>Задание не выполнено
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
                    <p className={'same'}>Столбец №3</p>
                    <div className="mix">
                        <p className={"tableP"}>Название</p>
                        <input type="text" className={'mixInput'} placeholder='Введите название'/>
                    </div>
                    <div className="mix">
                        <div className={"checkP"}>
                            <input type="checkbox" className={'checkbox'} checked/>
                            <p className={"mixCheckP"}>Этап выполнения</p>
                        </div>
                        <select name="" id="" className='mixInput'>
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
                            <input type="checkbox" className={'checkbox'}/>
                            <p className={"mixCheckP"}>Резултат закытия</p>
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
                    <p className={'same'}>Столбец №4</p>
                    <div className="mix">
                        <p className={"tableP"}>Название</p>
                        <input type="text" className={'mixInput'} placeholder='Введите название'/>
                    </div>
                    <div className="mix">
                        <div className={"checkP"}>
                            <input type="checkbox" className={'checkbox'} checked/>
                            <p className={"mixCheckP"}>Этап выполнения</p>
                        </div>
                        <select name="" id="" className='mixInput'>
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
                            <input type="checkbox" className={'checkbox'}/>
                            <p className={"mixCheckP"}>Резултат закытия</p>
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

export default CreateTable;
