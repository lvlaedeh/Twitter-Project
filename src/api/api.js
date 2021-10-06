import axios from "axios";

export const getAxiosInstance = () => {
   return( axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            all: {
                API_KEYS : "mainHeader"
            }
        }
    })
   )} 

   export const getAxiosInstanceAuth = () => {
       return(axios.create({
           baseURL : "https://twitterapi.liara.run/api/",
       }))
   }