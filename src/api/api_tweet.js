import { getAxiosInstanceApi, getAxiosInstanceJsonServer } from "./api";


export const getAllTweets = (callback) =>{
getAxiosInstanceApi().post("getAllTweet").then((response)=> {
    const data = response.data
    callback(true,data)
}).catch((error) => {
    console.log(error);
    callback(false,error)
})
}

export const getUser = (callback) => {
getAxiosInstanceJsonServer().get("/user").then((response)=> {
    const data = response.data
    callback(true,data)
}).catch((error) => {
    console.log(error);
    callback(false,error)
})
}

export const getHashTags = (callback) => {
    getAxiosInstanceJsonServer().get("/hashTags").then((response)=> {
        const data = response.data
        callback(true,data)
    }).catch((error) => {
        console.log(error);
        callback(false,error)
    })
    }

    export const newTweetReqest = (data,callback) => {
        getAxiosInstanceApi().post("newTweet",data).then((response)=> {
            const data = response.data
        callback(true,data)
    }).catch((error) => {
        console.log(error);
        callback(false,error)
    })
        }