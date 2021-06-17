import React from 'react';
import logo from '../../img/infocity-icon.svg';
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {FormControls} from "../../utils/FormControls/FormControls";
import {email, required} from "../../utils/formValidate/formValidate";
import { withRouter } from 'react-router-dom'
import {Redirect} from "react-router-dom";

const InputField = FormControls("input");

const Register = ({handleSubmit,history}) => {
    const submit = (values) => {
        console.log(values)
        if (values.registerEmail !== '') {
            history.push('/login')
        }
    };

    return (
        <div>
            <div className="auth-container">
                <div className="navAuth"><img src={logo} alt="logo"/></div>
                <div className="auth-content">
                    <div className="auth-signin"><h3>Регистрация</h3>
                        <form onSubmit={handleSubmit(submit)} className={'form'}>
                            <div className="auth-signin_group"><span className={'span'}>Ваш Email</span>
                                <Field
                                    name={'registerEmail'}
                                    type='email'
                                    component={InputField}
                                    validate={[required, email]}
                                    placeholder="Введите Email"
                                    className="input"/>
                            </div>
                            <button className="button submit undefined" type={"submit"}>Зарегистрироваться</button>
                            <p className={'p'} style={{fontSize:"15px"}}>Вы уже зарегистрированы?
                                <Link to={'/login'}>&nbsp; <span>Войдите</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default reduxForm({
    form: 'register'
})(withRouter(Register))


