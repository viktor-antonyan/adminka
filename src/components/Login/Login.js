import React from 'react';
import logo from '../../img/infocity-icon.svg';
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import {email, maxLength, minLength, required} from "../../utils/formValidate/formValidate";
import {FormControls} from "../../utils/FormControls/FormControls";

const InputField = FormControls("input");
const maxPasswordLength = maxLength(10)
const maxLoginLength = maxLength(12)
const minLoginLength = minLength(5)

const Login = ({handleSubmit, history}) => {
    const submit = (values) => {
        console.log(values)
        history.push('/')
    };
    return (
        <div>
            <div className="auth-container">
                <div className="navAuth"><img src={logo} alt="logo"/></div>
                <div className="auth-content">
                    <div className="auth-signin"><h3 style={{marginBottom: "50px"}}>Вход</h3>
                        <form onSubmit={handleSubmit(submit)} className={'form'}>
                            <div className="auth-signin_group"><span>Login</span>
                                <Field
                                    name={'login'}
                                    type='ext'
                                    component={InputField}
                                    validate={[required,minLoginLength]}
                                    placeholder="login"
                                    className="input"/>
                            </div>
                            <div className="auth-signin_group groups"><span>Password</span>
                                <Field
                                    name={'loginPassword'}
                                    component={InputField}
                                    validate={[required, maxPasswordLength]}
                                    placeholder="password"
                                    type={'password'}
                                    className="input input2"/>
                            </div>
                            <div className={'loginButtonBlock'}>
                                <Link className="cancel" to={'/register'}>
                                    Отмена
                                </Link>
                                <button className="send" type={"submit"}>Войти</button>
                            </div>
                            <p className={'p p2'} style={{marginTop: "45px",fontSize:"15px"}}>Еще не зарегистрированы? <Link to={'/register'}
                                                                                                                             style={{color: '#058ed9'}}>&nbsp; Регистрация</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default reduxForm({
    form: 'login'
})(withRouter(Login))
