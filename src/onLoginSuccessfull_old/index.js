import * as appStorage from './appStorage'
import * as history from '../../history/browserHistory'
import { APP_PREFIX } from '../../services/config'

//eslint-disable-next-line
export function* onLoginSuccessfull(response) {
  appStorage.setSessionInfoData(response.data)
  history.default.push(`/${APP_PREFIX}/app/home`)
}
