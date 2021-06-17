import React from "react"
import arrow from "./../../../img/selector/arrow.svg"
import {Link} from "react-router-dom";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import {CreateUsersForm} from "./CreateUsersForm";

const CreateRuleForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");

    const submit = (values) => console.log(values);
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="user-content_tab">
                <div className="user-data_row">
                    <div className="user-data_label">Право 1</div>
                    <div className="user-data_input">
                        <Field
                            name="rule1"
                            component={SelectField}
                            className={'select'}
                        >
                            <option></option>
                            <option value="Пункт 1">Пункт 1</option>
                            <option value="Пункт 2">Пункт 2</option>
                            <option value="Пункт 3">Пункт 3</option>
                        </Field>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Право 2</div>
                    <div className="user-data_input">
                        <Field
                            name="rule2"
                            component={SelectField}
                            className={'select'}
                        >
                            <option></option>
                            <option value="Пункт 1">Пункт 1</option>
                            <option value="Пункт 2">Пункт 2</option>
                            <option value="Пункт 3">Пункт 3</option>
                        </Field>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Право 3</div>
                    <div className="user-data_input">
                        <div className="user-data_input_group">
                            <div className="checkbox">
                                <input type="checkbox" id="cb1"/><label htmlFor="cb1">У
                                него есть такое-то право</label></div>
                        </div>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Право 4</div>
                    <div className="user-data_input">
                        <div className="user-data_input_group">
                            <div className="switcher-container">
                                <div className="switcher active-switch">
                                    <div className="switcher-thumb"></div>
                                </div>
                                <p>У него есть такое-то право</p></div>
                        </div>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label"></div>
                    <div className="user-data_input user-data-buttons">
                        <Link className="blue-outline" to={'/Пользователи'}>
                            Отмена
                        </Link>
                        <button className="button submit undefined">Сохранить</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'createRuleForm'
})(CreateRuleForm)