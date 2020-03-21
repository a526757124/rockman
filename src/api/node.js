import {get, post} from '../axios/http.js'
import GLOBAL from '../common/global.js'

export const getNodeList = (data) => post(`${GLOBAL.HOME}/node/list`, data)

export const getNodeOnce = () => get(`${GLOBAL.HOME}/node/once`)
