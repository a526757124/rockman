import {post} from '../axios/http.js'
import GLOBAL from '../common/global.js'

export const getUserInfo = (data) => post(`${GLOBAL.HOME}/getUserInfo`, data)
export const login = (data) => post(`${GLOBAL.HOME}/login`, data)
