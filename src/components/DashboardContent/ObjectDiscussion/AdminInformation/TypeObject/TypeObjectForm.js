import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../../utils/formValidate/formValidate";
import {Link, Redirect} from "react-router-dom";
import {FormControls} from "../../../../../utils/FormControls/FormControls";


const InputField = FormControls("input");

const TypeObjectForm = ({handleSubmit}) =>  {

    const SelectField = FormControls("select");

    const cancelButton = () => {
        return <Redirect to={'//Вид-работ'}/>
    }
    const submit = (values) => console.log(values);
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="dashboard-content_tabs">
                    <div className="dashboard-content_tabs-content">
                        <div className="user">
                            <div className="user-title">Создать тип объекта</div>
                            <div className="user-content">
                                <div className="user-content_tab">
                                    <div className="user-data_row">
                                        <div className="user-data_label">Название типа объекта</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'nameTypeObject'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите название типа объекта"
                                                className="input"/>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Родительский тип объекта</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="parentTypeObject"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option value="" disabled selected hidden>Red</option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Вид работы</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="typeGeometer"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option value="" disabled selected hidden>Red</option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Тип геометрии</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="typeGeometer"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option value="" disabled selected hidden>Red</option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Атрибуты</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="typeAtribute"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option value="" disabled selected hidden>Red</option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label"></div>
                                        <div className="user-data_input user-data-buttons">
                                            <Link className="blue-outline" to={'/Справочники'}>
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
            </form>
        </div>
    );
}

export default reduxForm({
    form: 'createTypeObject'
})(TypeObjectForm)
