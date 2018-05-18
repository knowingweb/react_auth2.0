import * as AppStorage from "../libs/appStorage"

export const fakeAuth = {
  isAuthenticated(){
    //const authData = sessionStorage.getItem(`${config.PREFIX_SESSION_KEYS}.auth`)
    return AppStorage.loggedIn()
  },
  tokenIsValidDate(){
    return AppStorage.fullLoggedIn()
      /*if(this.isAuthenticated()){
      const authData = sessionStorage.getItem(`${config.PREFIX_SESSION_KEYS}.auth`)
      return true
    }else
      return false*/
  },
  signout(cb) {
    //this.isAuthenticated = false
    //setTimeout(cb, 100)
  }
}

