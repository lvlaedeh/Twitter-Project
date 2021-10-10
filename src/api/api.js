import axios from "axios";

export const getAxiosInstanceJsonServer = () => {
   return( axios.create({
        baseURL: "http://localhost:3000",
        headers: {
                API_KEYS : "mainHeader"
        }
    })
   )} 

   export const getAxiosInstanceAuth = () => {
    return axios.create({
      baseURL: "https://twitterapi.liara.run/api/",
      headers: {
        // API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
      }
    });
  };

   export const getAxiosInstanceApi = () => {
    return( axios.create({
         baseURL: "https://twitterapi.liara.run/api/",
         headers: {
            'Content-Type' : 'hhhhhhhh',
            'x-auth-token' : localStorage.getItem("x-auth-token")
         }
     })
    )} 