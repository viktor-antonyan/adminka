import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {FormControls} from "../../../../../utils/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../../utils/formValidate/formValidate";


const InputField = FormControls("input");


const ExplainCloseForm = ({handleSubmit}) =>  {

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
                            <div className="user-title">Создать описание результата закрытия</div>
                            <div className="user-content">
                                <div className="user-content_tab">
                                    <div className="user-data_row">
                                        <div className="user-data_label">Название описания результата закрытия</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'nameCloseResult'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите название описания результата закрытия"
                                                className="input"/>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Результат закрытия</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="closeResult"
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
                                        <div className="user-data_label"></div>
                                        <div className="user-data_input user-data-buttons">
                                            <Link className="blue-outline" to={'/Результат-закрытия'}>
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
    form: 'editExplainCloseForm'
})(ExplainCloseForm)
