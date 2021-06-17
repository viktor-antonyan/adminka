import React, {useEffect} from 'react';
import {FormControls} from "../../../utils/FormControls/FormControls";
import {useDispatch} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {setShowJournal} from "../../../redux/reducers/electronicJournalReducer";
import {required} from "../../../utils/formValidate/formValidate";


const InputField = FormControls("input");
const TextField = FormControls("textarea");

export const NoteTaskForm = ({handleSubmit}) => {

    const SelectField = FormControls("select");
    const dispatch = useDispatch()
    const submit = (value) => {
        console.log(value)
    }
    const clickClose = () => {
        dispatch(setShowJournal(true))
    }
    return (
        <>
            <div className="widget">
                <p className={'p'}>Создать виджет</p>
                <div className={'block'}>
                    <p>Название отчета</p>
                    <Field
                        name={'typeAnswer'}
                        component={InputField}
                        validate={[required]}
                        placeholder='Введите название виджета'
                        className="input"/>
                </div>
                <div className={'block'}>
                    <p>Описание отчета</p>
                    <Field
                        name={'typeDescribe'}
                        component={TextField}
                        validate={[required]}
                        placeholder='Введите описание'
                        className="input"/>
                </div>
                <div className={'block'}>
                    <p>Собственник отчета</p>
                    <select name="3" placeholder='Выбрать'>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            Администратор кластера организации
                        </option>
                        <option value="Администратор организации">Администратор организации</option>
                        <option value="Пользователь организации">Пользователь организации</option>
                    </select>
                </div>
                <div className={'block'}>
                    <p>Тип виджета</p>
                    <select name="3" placeholder='Выбрать'>
                        <option value="" disabled selected
                                hidden>Выбрать
                        </option>
                        <option value="Администратор кластера организации">
                            Администратор кластера организации
                        </option>
                        <option value="Администратор организации">Администратор организации</option>
                        <option value="Пользователь организации">Пользователь организации</option>
                    </select>
                </div>
                <div className={"bt"}>
                    <button className='t' type={'submit'}>Далее</button>
                </div>
            </div>

        </>
    )
}

export default reduxForm({
    form: 'createNoteTaskForm'
})(NoteTaskForm)
