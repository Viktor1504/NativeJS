import axios from "axios";

const instance = axios.create({
    baseURL: "https://reqres.in/api/",
});

const api = {
    getUsers() {
        return instance.get()
    }
}

const users = api.getUsers()

console.log(users)