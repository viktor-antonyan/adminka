import React from 'react';
import {FormControls} from "../../../utils/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/formValidate/formValidate";
import {Link} from "react-router-dom";


const InputField = FormControls("input");

const CreatePriorityForm = ({handleSubmit}) =>  {
    const submit = (values) => console.log(values);
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="user">
                        <div className="user-title">Создать приоритет</div>
                        <div className="user-content">
                            <div className="user-content_tab">
                                <div className="user-data_row">
                                    <div className="user-data_label">Название приоритета</div>
                                    <div className="user-data_input">
                                        <Field
                                            name={'priority'}
                                            component={InputField}
                                            validate={[required]}
                                            placeholder="Введите название приоритета"
                                            className="input"/>
                                    </div>
                                </div>
                                <div className="user-data_row">
                                    <div className="user-data_label"></div>
                                    <div className="user-data_input user-data-buttons">
                                        <Link className="blue-outline" to={'/Приоритет'}>
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
    form: 'createPriorityForm'
})(CreatePriorityForm)
