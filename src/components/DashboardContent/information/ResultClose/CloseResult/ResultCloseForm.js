import React from 'react';
import arrow from '../../../../../img/Arrow-icon.svg';
import {Link, Redirect} from "react-router-dom";
import {FormControls} from "../../../../../utils/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../../utils/formValidate/formValidate";


const InputField = FormControls("input");


const ResultCloseForm = ({handleSubmit}) =>  {
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
                            <div className="user-title">Создать результат закрытия</div>
                            <div className="user-content">
                                <div className="user-content_tab">
                                    <div className="user-data_row">
                                        <div className="user-data_label">Название результата закрытия</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'nameResultClose'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите название результата закрытия"
                                                className="input"/>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Описание результата закрытия</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="workResultClose"
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
    form: 'editResultCloseForm'
})(ResultCloseForm)
