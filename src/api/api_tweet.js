import { getAxiosInstanceApi } from "./api";

export const getAllTweets = (callback) =>{
getAxiosInstanceApi().post("getAllTweet").then((response)=> {
    const data = response.data
    callback(true,data)
}).catch((error) => {
    console.log(error);
    callback(false,error)
})
}


export const getTweetsByHashtagReqest = (hashTags,callback) =>{
    console.log({hashTags},"test");
    
    getAxiosInstanceApi().post("getAllTweet",{"hashTag":hashTags}).then((response)=> {
        const data = response.data
        callback(true,data)
    }).catch((error) => {
        console.log(error);
        callback(false,error)
    })
    }

    export const getTweetsByUserReqest = (user,callback) =>{
        getAxiosInstanceApi().post("getAllTweet",{user})
        .then((response)=> {
            const data = response.data
            callback(true,data)
        }).catch((error) => {
            console.log(error);
            callback(false,error)
        })
        }

export const getUser = (callback) => {
getAxiosInstanceApi().get("getAllUser").then((response)=> {
    const data = response.data
    callback(true,data)
}).catch((error) => {
    console.log(error);
    callback(false,error)
})
}

export const getHashTags = (callback) => {
    getAxiosInstanceApi().get("getAllHashTags").then((response)=> {
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

    export const likedTweet = (id,callback) => {
        getAxiosInstanceApi().get("likeTweet/"+id).then((response)=> {
            const data = response.data
            callback(true,data)
        }).catch((error) => {
            console.log(error);
            callback(false,error)
        })
        }