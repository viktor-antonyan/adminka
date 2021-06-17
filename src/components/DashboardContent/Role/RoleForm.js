import React, {useEffect} from 'react';
import arrow from "./../../../img/selector/arrow.svg"
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {useDispatch} from "react-redux";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {Link, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/formValidate/formValidate";
import _ from "lodash"
import {addRole} from "../../../redux/reducers/roleReducer";

const InputField = FormControls("input");

const RoleForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showOrgMenu(false))
    }, [])


    const submit = (values) => {
        const role = {
                id: _.uniqueId(),
                userId: "№ 123456789",
                require: values.roleSelectValue
            }
        dispatch(addRole(role));
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="user">
                        <div className="user-title">Создать роль</div>
                        <div className="user-content">
                            <div className="user-content_tab">
                                <div className="user-data_row">
                                    <div className="user-data_label">Название роли</div>
                                    <div className="user-data_input">
                                        <Field
                                            name={'nameRole'}
                                            component={InputField}
                                            validate={[required]}
                                            placeholder="Введите название роли"
                                            className="input"/>
                                       </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label">Функции</div>
                                    <div className="user-data_input">
                                        <Field
                                            name="roleSelectValue"
                                            component={SelectField}
                                            className={'select'}
                                        >
                                            <option></option>
                                            <option value="Функция 1">Функция 1</option>
                                            <option value="Функция 2">Функция 2</option>
                                            <option value="Функция 3">Функция 3</option>
                                            <option value="Функция 4">Функция 4</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label"></div>
                                    <div className="user-data_input user-data-buttons">
                                        <Link className="blue-outline" to={'/Роли'}>
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
    )
}

export default reduxForm({
    form: 'roleForm'
})(RoleForm)
