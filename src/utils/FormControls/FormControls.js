import React from "react"
import "./../../index.css"
import style from "./formControls.module.css"


export const FormControls = (TagName) => (props) => {
   const { touched, error } = props.meta
    return (
        <div className={style.formValidate}>
        <TagName {...props} {...props.input} className={`input ${error && touched ? style.error : ''}`}/>
            {error && touched && <h6>{error}</h6>}
        </div>
    )
}