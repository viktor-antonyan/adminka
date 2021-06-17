import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3000/db.json'
    // baseURL:'https://dev3.im-dispatcher.ru/db.json'
})

export const usersApi = {
    getUsers(){
       return api.get('')
    }
}
