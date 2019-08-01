import { wxRequest } from '@/utils/wxRequest'

const baseURL = process.env.API_BASE_URL

// 微信的code换取sessionKey
const wxappSessions = (params) => wxRequest(params, baseURL + '/api/v2.0/wxapp/sessions')

// 获取用户信息
const wxappCheckUser = (params) => wxRequest(params, baseURL + '/api/v2.0/wxapp/check-user')

export default {
  wxappSessions,
  wxappCheckUser
}
