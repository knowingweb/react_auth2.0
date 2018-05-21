import axios from 'axios'
//import * as apiAuthProvider from './providers/Api/Auth'
import * as appStorage from './libs/appStorage'


const Request = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
})

let isRefreshing = false
let isOlder = false
let refreshSubscribers = []

const headers = appStorage.getHeaders()
//config.headers["Authorization"] = headers["Authorization"]
Request.defaults.headers.common['Authorization'] = headers["Authorization"]

//Request.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getAccessToken

  /*Request.interceptors.request.use(async (config) => {
  if(appStorage.loggedIn()){
    if(!appStorage.fullLoggedIn() && !isOlder){
      isOlder = true
      try{
        const response = await new Promise((resolve, reject) => {
          Request.post("/oauth/token",
            {
              'grant_type': 'refresh_token',
              'refresh_token': appStorage.getRefreshToken(),
              'client_id': process.env.REACT_APP_API_CLIENT_ID,
              'client_secret': process.env.REACT_APP_API_CLIENT_SECRET,
              'scope': process.env.REACT_APP_API_SCOPE
            }
          ).then(res => {
            resolve(res)
          }).error( e => {
            reject(e)
          })
        })
        appStorage.setSessionInfoData(response.data)
      }catch(ex){

      }
    }
  }

  const headers = appStorage.getHeaders()
  config.headers["Authorization"] = headers["Authorization"]
  return config
})*/

Request.interceptors.response.use(response => {
  return response;
}, error => {
  const { config } = error
  const response = error || { response: { status: false } }
  let { status } =response

  //const originalRequest = config;

  if (status === 498) {
    if (!isRefreshing) {
      isRefreshing = true;
      alert("contacta al admistrador el servidor responde 498")
    }
    return retryOrigReq
  } else if(status === 402) {
      return Promise.reject("licencia vencida")
  } else {
    const rs = Object.assign({}, error)
    if(typeof rs.response === 'undefined'){
      return Promise.reject({status: false, message: 'Not internet connection...'})
    }else{
      return Promise.reject(error);
    }
  }
});




export default Request



