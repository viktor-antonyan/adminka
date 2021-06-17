import React, {useEffect, useState} from 'react';
import line from "../../../img/Line 73.png";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {useDispatch} from "react-redux";
import {Field, reduxForm} from "redux-form";
import vector from '../../../img/deleteVector.png'
import {Link} from "react-router-dom";
import {setShowJournal} from "../../../redux/reducers/electronicJournalReducer";
import {ElectronicJournal} from "./ElectronicJournal";
import {required} from "../../../utils/formValidate/formValidate";

const InputField = FormControls("input");
const TextInput = FormControls("textarea");

const CreateJournalForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");
    const dispatch = useDispatch()
    const [dis1,setDis1] = useState(true)
    const [dis2,setDis2] = useState(true)
    const [dis3,setDis3] = useState(true)
    const [dis4,setDis4] = useState(true)
    const [dis5,setDis5] = useState(true)
    const [dis6,setDis6] = useState(true)
    const [dis7,setDis7] = useState(true)
    const [dis8,setDis8] = useState(true)
    const [dis9,setDis9] = useState(true)
    const [dis10,setDis10] = useState(true)
    const submit = (value) => {
        console.log(value)
    }
    const clickClose = () => {
        dispatch(setShowJournal(true))
    }
    return (
        <>
            <div className={'start'}>
                <p>Новое задание</p>
                <span>Создать новое задание</span>
            </div>
            <div className={'newTask'}>
                <div className={'inputBlock'}>
                    <img src={line} alt="line"/>
                    <div className={'object'}>
                        <span>Объект обслуживания</span>
                        <p className={'p'}>+ Добавить объекты обслуживания</p>
                    </div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className={'object'}>
                            <span>Вид работ</span>
                            <Field
                                name="typeBirth"
                                className='selects'
                                component={SelectField}
                                validate={[required]}
                                placeholder={'//____'}
                                onChange={()=>setDis1(false)}
                            >
                                <option value="" disabled selected hidden>Выбрать</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className={'object'}>
                            <span>Организация-исполнитель</span>
                            <Field
                                name="typeOrgUser"
                                className='selects'
                                component={SelectField}
                                validate={[required]}
                                placeholder={'//____'}
                                disabled={dis1}
                                onChange={()=>setDis2(false)}
                            >
                                <option value="" disabled selected hidden>Введите
                                    организацию-исполнителя
                                </option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className={'object'}>
                            <span>Пользователь-исполнитель</span>
                            <Field
                                name="typeOrgDoer"
                                className='selects'
                                component={SelectField}
                                validate={[required]}
                                placeholder={'//____'}
                                disabled={dis2}
                                onChange={()=>setDis3(false)}
                            >
                                <option value="" disabled selected hidden>Введите
                                    пользователя-исполнителя
                                </option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className="object">
                            <span>Описание задания</span>
                            <Field name="textarea" placeholder='Введите описание задания'
                                      component={TextInput}
                                   validate={[required]} disabled={dis3} onChange={()=>setDis4(false)}
                            />
                        </div>
                        <div className="object">
                            <span>Срок выполнения</span>
                            <div className={'all'}>
                                <Field
                                    name="typeExpireEndTime"
                                    className='selects'
                                    component={SelectField}
                                    validate={[required]}
                                    placeholder={'//____'}
                                    disabled={dis4}
                                    onChange={()=>setDis5(false)}
                                    style={{width: '210px'}}
                                >
                                    <option value="" disabled selected hidden>дата //____</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                                <Field
                                    name="typeExpireFinish"
                                    className='selects'
                                    component={SelectField}
                                    validate={[required]}
                                    placeholder={'//____'}
                                    disabled={dis5}
                                    onChange={()=>setDis6(false)}
                                    style={{width: '210px', marginLeft: '15px'}}
                                >
                                    <option value="" disabled selected hidden>время //____</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                            </div>
                        </div>
                        <div className="object">
                            <span>Срок жизни задания</span>
                            <div className={'all'}>
                                <Field
                                    name="typeExpire"
                                    className='selects'
                                    component={SelectField}
                                    validate={[required]}
                                    placeholder={'//____'}
                                    disabled={dis6}
                                    onChange={()=>setDis7(false)}
                                    style={{width: '210px'}}
                                >
                                    <option value="" disabled selected hidden>дата //____</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                                <Field
                                    name="typeExpireTime"
                                    className='selects'
                                    component={SelectField}
                                    validate={[required]}
                                    placeholder={'//____'}
                                    disabled={dis7}
                                    onChange={()=>setDis8(false)}
                                    style={{width: '210px', marginLeft: '15px'}}
                                >
                                    <option style={{color: "gray"}} value="" disabled selected hidden>время //____
                                    </option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                            </div>
                        </div>
                        <div className={'object'}>
                            <span>Приоритет</span>
                            <Field
                                name="typePriority"
                                className='selects'
                                component={SelectField}
                                validate={[required]}
                                placeholder={'//____'}
                                disabled={dis8}
                                onChange={()=>setDis9(false)}
                            >
                                <option value="" disabled selected hidden>Выбрать</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className={'object'}>
                            <span>Тип задания</span>
                            <Field
                                name="typeTask"
                                className='selects'
                                component={SelectField}
                                validate={[required]}
                                placeholder={'//____'}
                                disabled={dis9}
                                onChange={()=>setDis10(false)}
                            >
                                <option value="" disabled selected hidden>Выбрать</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className={'object'}>
                            <span>Наблюдатель</span>
                            <Field
                                name="typeDeserve"
                                className='selects'
                                component={SelectField}
                                placeholder={'//____'}
                                disabled={dis10}
                            >
                                <option value="" disabled selected hidden>Выбрать</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className="buttonss">
                            <Link to={'/Электронный-журнал'}>
                                <button className='closeButton' onClick={clickClose} type={"submit"}>
                                    Закрыть
                                </button>
                            </Link>
                            <button className="sendButton" type='submit'>Сохранить</button>
                        </div>
                    </form>
                </div>
                <div className={"rightBlock"}>
                    <div className="right">
                        <p>Добавить фото</p>
                        <div className={'flex'}>
                            <div className="fileUpload">
                                <input type="file" className="upload"/>
                                <span>Выбрать фото</span>
                            </div>
                            <div className={"deleteBlock"}>
                                <span>Загружено 123 файла</span>
                                <img src={vector} alt="vector"/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p>Добавить файлы</p>
                        <div className={'flex'}>
                            <div className="fileUpload">
                                <input type="file" className="upload"/>
                                <span>Выбрать файл</span>
                            </div>
                            <div className={"deleteBlock"}>
                                <span>Загружено 123 файла</span>
                                <img src={vector} alt="vector"/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p>Добавить аудио</p>
                        <div className={'flex'}>
                            <div className="fileUpload">
                                <input type="file" className="upload"/>
                                <span>Выбрать аудио</span>
                            </div>
                            <div className={"deleteBlock"}>
                                <span>Загружено 123 файла</span>
                                <img src={vector} alt="vector"/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p>Добавить видео</p>
                        <div className={'flex'}>
                            <div className="fileUpload">
                                <input type="file" className="upload"/>
                                <span>Выбрать видео</span>
                            </div>
                            <div className={"deleteBlock"}>
                                <span>Загружено 123 файла</span>
                                <img src={vector} alt="vector"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default reduxForm({
    form: 'createElectronicJournal'
})(CreateJournalForm)
