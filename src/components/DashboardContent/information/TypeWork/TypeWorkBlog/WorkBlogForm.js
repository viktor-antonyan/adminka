import React from 'react';
import timer from '../../../../../img/timer.svg';
import {FormControls} from "../../../../../utils/FormControls/FormControls";
import {Link, Redirect} from "react-router-dom";
import {required} from "../../../../../utils/formValidate/formValidate";
import {Field, reduxForm} from "redux-form";


const InputField = FormControls("input");

const WorkBlogForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");

    const cancelButton = () => {
        return <Redirect to={'//Вид-работ'}/>
    }

    const submit = (values) => console.log(values);
    return (
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="user">
                        <div className="user-title">Создать вид работ</div>
                        <div className="user-content">
                            <div className="user-content_tab">
                                <div className="user-data_row">
                                    <div className="user-data_label">Название вида работ</div>
                                    <div className="user-data_input">
                                        <Field
                                            name={'nameWorkblog'}
                                            component={InputField}
                                            validate={[required]}
                                            placeholder="Введите название вида работ"
                                            className="input"/>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label">Группа видов работ</div>
                                    <div className="user-data_input">
                                            <Field
                                                name="workblog"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option></option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                            </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label">Стикеры для файло</div>
                                    <div className="user-data_input">
                                            <Field
                                                name="workblogs"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option></option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label">Срок жизни задания</div>
                                    <div className="user-data_input">
                                            <Field
                                                name={'nameWorkblog3'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите секунды   0.сек"
                                                value="700 000"
                                                className="input"/>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label">Регламентный скро</div>
                                    <div className="user-data_input">
                                            <Field
                                                name={'nameWorkblog2'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите секунды  0.сек"
                                                value="700 000"
                                                className="input"/>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label"></div>
                                    <div className="user-data_input user-data-buttons">
                                        <Link className="blue-outline" to={'/Вид-работ'}>
                                            Отмена
                                        </Link>
                                        <button className="button submit undefined">Сохранить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}

export default reduxForm({
    form: 'editWorkblog'
})(WorkBlogForm)
