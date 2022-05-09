import axios from 'axios'

const serverUrl = 'https://myfakeapibackend.herokuapp.com'

const myFakeAPI = axios.create({
    baseURL: serverUrl
})

export {myFakeAPI}