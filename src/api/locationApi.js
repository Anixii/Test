import { instance } from "./instance"

export const locationApi ={ 
    getAllCharackter(params){ 
        return instance.get(`character`,{params})
    },
}