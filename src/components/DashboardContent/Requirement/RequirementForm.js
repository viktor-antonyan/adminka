import React, {useEffect} from 'react';
import arrow from "./../../../img/selector/arrow.svg"
import {showOrgMenu} from "../../../redux/reducers/organizationReducer";
import {useDispatch} from "react-redux";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {Link, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/formValidate/formValidate";
import _ from "lodash"
import {addRequirements} from "../../../redux/reducers/dashboardReducer";

const InputField = FormControls("input");

const RequirementForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showOrgMenu(false))
    }, [])


    const submit = (values) => {
        const requirement = {
            id: _.uniqueId(),
            userId: "№ 123456789",
            require: values.requirementSelectValue
        }
        dispatch(addRequirements(requirement))
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="user">
                        <div className="user-title">Создать должность</div>
                        <div className="user-content">
                            <div className="user-content_tab">
                                <div className="user-data_row">
                                    <div className="user-data_label">Наименование должности</div>
                                    <div className="user-data_input">
                                        <Field
                                            name={'nameRequirement'}
                                            component={InputField}
                                            validate={[required]}
                                            placeholder="Введите название должности"
                                            className="input"/>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label">Виды работ</div>
                                    <div className="user-data_input">
                                        <Field
                                            name="requirementSelectValue"
                                            component={SelectField}
                                            className={'select'}
                                        >
                                            <option></option>
                                            <option value="Вид 1">Вид 1</option>
                                            <option value="Вид 2">Вид 2</option>
                                            <option value="Вид 3">Вид 3</option>
                                            <option value="Вид 4">Вид 4</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label"></div>
                                    <div className="user-data_input user-data-buttons">
                                        <Link className="blue-outline" to={'/Должности'}>
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
    form: 'requirementForm'
})(RequirementForm)
