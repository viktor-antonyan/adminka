export const required = (value) => {
    if (!value) return "field is required"
}

export const maxLength = (strLength) => (value) =>{
    if(value.length > strLength) return `max length is ${strLength}`
}
export const minLength = (strLength) => (value) =>{
    if(value.length < strLength) return `min length is ${strLength}`
}
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
export const phoneNumber = value =>
    value && !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm.test(value)
        ? 'Invalid phone number'
        : undefined
