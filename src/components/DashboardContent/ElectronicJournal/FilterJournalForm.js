import React, {useEffect, useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {Link} from "react-router-dom";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {addUserAction} from "../../../redux/reducers/usersReducer";
import line from '../../../img/Line 73.png';
import {required} from "../../../utils/formValidate/formValidate";
import {setShowJournal} from "../../../redux/reducers/electronicJournalReducer";

const InputField = FormControls("input");

const FilterJournalForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");
    const [showForm, setShowForm] = useState(true)
    const {checked} = useSelector(({dashboardReducer}) => dashboardReducer)

    const dispatch = useDispatch()
    const submit = (value) => {
        console.log(value)
    }
    const closeForm = () => {
        dispatch(setShowJournal(true))
        setShowForm(false)
    }
    return (
        <>
            {showForm &&
            <div className={'filterJournal'} style={{bottom: true ? '459px' : '0'}}>
                <div className={'start'}>
                    <p>Фильтры</p>
                    <span>Выберите параметры фильтрации</span>
                </div>
                <div className="flterBlock">
                    <img src={line} alt="line"/>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className={'first'}>
                            <span>ID</span>
                            <Field
                                name={'typeFilter'}
                                component={InputField}
                                validate={[required]}
                                placeholder='Например 12345'
                                className="input"/>
                        </div>
                        <div className={'first'}>
                            <span>Дата создания</span>
                            <div className={'alll'}>
                                <select
                                    name="typeBirth"
                                    className='selects'
                                    placeholder={'__/__/____'}
                                >
                                    <option style={{color: "gray"}} value="" disabled selected hidden>C __/__/____
                                    </option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select>
                                <select
                                    name="typeBirthday"
                                    className='selects'
                                    placeholder={'__/__/____'}
                                >
                                    <option style={{color: "gray"}} value="" disabled selected hidden>до __/__/____
                                    </option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select>
                            </div>
                        </div>
                        <div className="first">
                            <span>Дата начала выполнения</span>
                            <select
                                name="typeEnd"
                                className={'typeSelect'}
                                placeholder={'__/__/____'}
                            >
                                <option style={{color: "gray", paddingLeft: "15px"}} value="" disabled selected
                                        hidden>__/__/____ __:__
                                </option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>
                        <div className={'first'}>
                            <span>Дата закрытия</span>
                            <div className={'alll'}>
                                <select
                                    name="typeClose"
                                    className='selects'
                                    placeholder={'__/__/____'}
                                >
                                    <option style={{color: "gray"}} value="" disabled selected hidden>C __/__/____
                                    </option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select>
                                <select
                                    name="typeFinish"
                                    className='selects'
                                    placeholder={'__/__/____'}
                                >
                                    <option style={{color: "gray"}} value="" disabled selected hidden>до __/__/____
                                    </option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select>
                            </div>
                        </div>
                        <div className={'first'}>
                            <span>Инициатор</span>
                            <Field
                                name={'typeInitial'}
                                component={InputField}
                                validate={[required]}
                                placeholder='Введите инициатора'
                                className="input"/>
                        </div>
                        <div className={'first'}>
                            <span>Наблюдатель</span>
                            <Field
                                name={'typeAbsense'}
                                component={InputField}
                                validate={[required]}
                                placeholder='Введите наблюдателя'
                                className="input"/>
                        </div>
                        <div className={'first'}>
                            <span>Создатель</span>
                            <Field
                                name={'typeMaker'}
                                component={InputField}
                                validate={[required]}
                                placeholder='Введите создателя'
                                className="input"/>
                        </div>
                        <div className={'first'}>
                            <span>Исполнитель</span>
                            <Field
                                name={'typeUser'}
                                component={InputField}
                                validate={[required]}
                                placeholder='Введите исполнителя'
                                className="input"/>
                        </div>
                        <div className="buttonsBlock">
                            <h3 className={'h3'}>Сбросить все фильтры</h3>
                            <div className="buttonss">
                                <button className='closeButton' onClick={closeForm}>
                                    Закрыть
                                </button>
                                <button className="sendButton" type={'submit'}>Применить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            }
        </>
    );
}

export default reduxForm({
    form: 'filterJournalForm'
})(FilterJournalForm)
