import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../../utils/formValidate/formValidate";
import {Link, Redirect} from "react-router-dom";
import {FormControls} from "../../../../../utils/FormControls/FormControls";


const InputField = FormControls("input");

const CityForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");
    const submit = (values) => console.log(values);
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="user">
                        <div className="user-title">Создать район</div>
                        <div className="user-content">
                            <div className="user-content_tab">
                                <div className="user-data_row">
                                    <div className="user-data_label">Название района</div>
                                    <div className="user-data_input">
                                        <Field
                                            name={'typeCity'}
                                            component={InputField}
                                            validate={[required]}
                                            placeholder="Введите название района"
                                            className="input"/>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label">Название округа</div>
                                    <div className="user-data_input">
                                        <Field
                                            name="typeRegion"
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
                                        <Link className="blue-outline" to={'/Справочники'}>
                                            Отмена
                                        </Link>
                                        <button className="button submit undefined" type={'submit'}>Сохранить</button>
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
    form: 'createCity'
})(CityForm)
