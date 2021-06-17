import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/formValidate/formValidate";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {Link} from "react-router-dom";
import _ from "lodash"
import {useDispatch} from "react-redux";
import {addOrganizationCluster} from "../../../redux/reducers/organizationReducer";

const InputField = FormControls("input");

const OrganizationClusterForm = ({handleSubmit}) => {
    const dispatch = useDispatch()

    const submit = (values) => {
        const cluster = {
                id: _.uniqueId(),
                userId: "№ 123456789",
                clusterOrganization: values.nameClusterOrganization
            }
            dispatch(addOrganizationCluster(cluster))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <div className="dashboard-content_tabs">
                    <div className="dashboard-content_tabs-content">
                        <div className="user">
                            <div className="user-title">Создать кластер организации</div>
                            <div className="user-content">
                                <div className="user-content_tab">
                                    <div className="user-data_row">
                                        <div className="user-data_label">Название кластера организации</div>
                                        <div className="user-data_input">
                                            <Field
                                                name={'nameClusterOrganization'}
                                                component={InputField}
                                                validate={[required]}
                                                placeholder="Введите кластера название организации"
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
                                            <Link className="blue-outline" to={'/Кластеры'}>
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
    form: 'editClusterForm'
})(OrganizationClusterForm)