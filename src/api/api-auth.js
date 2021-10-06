import { getAxiosInstanceAuth } from "./api";


export const loginApi = (data,callback) =>{
getAxiosInstanceAuth().post("login",data).then((response)=> {
    const data = response.data
    callback(true,data)
}).catch((error) => {
    console.log(error);
    callback(false,error.response.data.message)
})
}

export const registerApi = (user,callback) =>{
    getAxiosInstanceAuth().post("register",user).then((response)=> {
        const data = response.data
        callback(true,data)
    }).catch((error) => {
        console.log(error);
        callback(false,error.response.data.message)
    })
    }