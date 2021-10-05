import { getAxiosInstance } from "./api";


export const getAllTweets = (callback) =>{
getAxiosInstance().get("/tweets").then((response)=> {
    const data = response.data
    callback(true,data)
}).catch((error) => {
    console.log(error);
    callback(false,error)
})
}

export const getUser = (callback) => {
getAxiosInstance().get("/user").then((response)=> {
    const data = response.data
    callback(true,data)
}).catch((error) => {
    console.log(error);
    callback(false,error)
})
}

export const getHashTags = (callback) => {
    getAxiosInstance().get("/hashTags").then((response)=> {
        const data = response.data
        callback(true,data)
    }).catch((error) => {
        console.log(error);
        callback(false,error)
    })
    }

    export const newTweetReqest = (data,callback) => {
        getAxiosInstance().post("/tweets",data).then((response)=> {
            callback(true)
        }).catch((error) => {
            console.log(error);
            callback(false)
        })
        }