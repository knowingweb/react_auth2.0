/**
 * @class ExampleComponent
 */

import * as appStorage from './libs/appStorage'
///import * as history from '../../history/browserHistory'
//import { APP_PREFIX } from '../../services/config'

//eslint-disable-next-line
export default function* onLoginSuccessfull(response, history) {
  appStorage.setSessionInfoData(response.data)
  history.default.push(`/${APP_PREFIX}/app/home`)
}


