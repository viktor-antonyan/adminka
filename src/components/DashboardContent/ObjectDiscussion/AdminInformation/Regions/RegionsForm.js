import React from "react"
import {FormControls} from "../../../../../utils/FormControls/FormControls";
import {required} from "../../../../../utils/formValidate/formValidate";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";

const InputField = FormControls("input");

const RegionsForm = ({handleSubmit}) => {
    const submit = (values) => console.log(values);
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="dashboard-content_tabs">
                <div className="dashboard-content_tabs-content">
                    <div className="user">
                        <div className="user-title">Создать округ</div>
                        <div className="user-content">
                            <div className="user-content_tab">
                                <div className="user-data_row">
                                    <div className="user-data_label">Название округа</div>
                                    <div className="user-data_input">
                                        <Field
                                            name={'nameRegion'}
                                            component={InputField}
                                            validate={[required]}
                                            placeholder="Введите название округа"
                                            className="input"/>
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
    )
}
export default reduxForm({
    form: 'editRegionsForm'
})(RegionsForm)
