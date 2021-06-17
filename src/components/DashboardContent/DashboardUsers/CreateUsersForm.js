import React from 'react';
import arrow from '../../../img/selector/arrow.svg'
import {Field, reduxForm} from "redux-form";
import {email, phoneNumber, required} from "../../../utils/formValidate/formValidate";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {Link} from "react-router-dom";
import _ from "lodash"
import {useDispatch} from "react-redux";
import {addUserAction} from "../../../redux/reducers/usersReducer";
import {getUsersData} from "../../../redux/thunk/thunkCreator";

const InputField = FormControls("input");

export const CreateUsersForm = ({handleSubmit}) => {
    const SelectField = FormControls("select");
    const dispatch = useDispatch()

    const submit = (values) => {
        const user = {
            id: _.uniqueId(),
            personality: values.fio,
            clasterOrg: "ООО “Рога и копыта”",
            organization: values.organization,
            level: values.requirements,
            rol: values.rol
        }
        dispatch(addUserAction(user));
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="user-content_tab">
                <div className="user-data_row">
                    <div className="user-data_label">ФИО</div>
                    <div className="user-data_input">
                        <Field
                            name={'fio'}
                            component={InputField}
                            validate={[required]}
                            placeholder="ФИО"
                            className="input"/>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Логин</div>
                    <div className="user-data_input">
                        <Field
                            name={'login'}
                            component={InputField}
                            validate={[required]}
                            placeholder="Введите логин"
                            className="input"/>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Пароль</div>
                    <div className="user-data_input">
                        <Field
                            name={'password'}
                            component={InputField}
                            validate={[required]}
                            placeholder="Введите пароль"
                            className="input"/>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Роль</div>
                    <div className="user-data_input">
                        <Field
                            name="rol"
                            component={SelectField}
                            className={'select'}
                        >
                            <option></option>
                            <option value="Администратор кластера организации">
                                Администратор кластера организации
                            </option>
                            <option value="Администратор организации">Администратор организации</option>
                            <option value="Пользователь организации">Пользователь организации</option>
                        </Field>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Организация</div>
                    <div className="user-data_input">
                        <Field
                            name="organization"
                            component={SelectField}
                            className={'select'}
                        >
                            <option></option>
                            <option value="Участок № 1">Участок № 1</option>
                            <option value="Участок № 2">Участок № 2</option>
                            <option value="Участок № 3">Участок № 3</option>
                        </Field>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Должность</div>
                    <div className="user-data_input">
                        <Field
                            name="requirements"
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
                    <div className="user-data_label">Номер телефона</div>
                    <div className="user-data_input">
                        <Field
                            name={'phone'}
                            component={InputField}
                            validate={[required, phoneNumber]}
                            placeholder="Введите номер телефона"
                            className="input"/>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Email</div>
                    <div className="user-data_input">
                        <Field
                            name={'email'}
                            component={InputField}
                            validate={[required, email]}
                            placeholder="Введите email"
                            className="input"/>
                    </div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label">Объекты обслуживания</div>
                    <div className="user-data_input"><p>+ Добавит объекты обслуживания</p></div>
                </div>
                <div className="user-data_row">
                    <div className="user-data_label"></div>
                    <div className="user-data_input user-data-buttons">
                        <Link className="blue-outline" to={'/Пользователи'}>
                            Отмена
                        </Link>
                        <button className="button submit undefined" type={"submit"}>Сохранить</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'createUsersForm'
})(CreateUsersForm)