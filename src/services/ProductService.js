import { myFakeAPI } from './config/config'

export const getProducts = async () => {
    try {
        const res = await myFakeAPI.get('/api/products/')
        return res
    } catch (error) {
        console.log(error.response)
    }
}