import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {email, phoneNumber, required} from "../../../utils/formValidate/formValidate";
import {Link, Redirect} from "react-router-dom";
import _ from "lodash"
import {addOrganization} from "../../../redux/reducers/organizationReducer";
import {useDispatch} from "react-redux";

const InputField = FormControls("input");

const OrganizationFormEdit = ({handleSubmit}) => {
    const SelectField = FormControls("select");
    const dispatch = useDispatch()

    const cancelButton = () => {
        return <Redirect to={'/Организации'}/>
    }

    const submit = (values) => {
        const organization = {
            id: _.uniqueId(),
            userId: "№ 12345678",
            organization: values.nameOrganization,
            clasterOrg: values.INNOrganization,
            ParentOrganization: values.parentOrganization
        }
        dispatch(addOrganization(organization))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <div className="dashboard-content_tabs">
                    <div className="dashboard-content_tabs-content">
                        <div className="user">
                            <div className="user-title">Создать организацию</div>
                            <div className="user-content">
                                <div className="user-content_tab">
                                    <div className="user-data_row">
                                        <div className="user-data_label">Название организации</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'nameOrganization'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите название организации"
                                                className="input"/></div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">ИНН организации</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'INNOrganization'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите ИНН организации"
                                                className="input"/></div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Кластер организации</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="clusterOrganization"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option></option>
                                                <option value="ООО “Рога и копыта 1">ООО “Рога и копыта 1</option>
                                                <option value="ООО “Рога и копыта 2">ООО “Рога и копыта 2</option>
                                                <option value="ООО “Рога и копыта 3">ООО “Рога и копыта 3</option>
                                            </Field>

                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Родительская организация</div>
                                        <div className="user-data_input">
                                            <Field
                                                name="parentOrganization"
                                                component={SelectField}
                                                className={'select'}
                                            >
                                                <option></option>
                                                <option value="Старший дворник">Старший дворник</option>
                                                <option value="Дворник">Дворник</option>
                                                <option value="Уборщик">Уборщик</option>
                                                <option value="Маляр">Маляр</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Юридический адресс</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'address'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите юридический адрес"
                                                className="input"/></div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Номер телефона</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'phone'}
                                                component={InputField}
                                                validate={[required,phoneNumber]}
                                                placeholder="+7 (---) --- -- --"
                                                className="input"/></div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Email</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'email'}
                                                component={InputField}
                                                validate={[required, email]}
                                                placeholder="Введите Email"
                                                className="input"/></div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label">Объекты обслуживания</div>
                                        <div className="user-data_input"><p>+ Добавит объекты обслуживания</p></div>
                                    </div>
                                    <div className="user-data_row">
                                        <div className="user-data_label"></div>
                                        <div className="user-data_input user-data-buttons">
                                            <Link className="blue-outline" to={'/Организации'}>
                                                Отмена
                                            </Link>
                                            <button className="button submit undefined" type={'submit'}>Сохранить
                                            </button>
                                        </div>
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
    form: 'editOrganization'
})(OrganizationFormEdit)

