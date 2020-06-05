import { RequestService } from "../../core/http"
import appConfig from "../../config/app.config"
import { TokenService } from "../services/token.service"

export default function() {
  // 配置服务端信息
  RequestService.setConfig({
    server: appConfig.server,
    timeout: appConfig.timeout,
  })

  // 添加状态拦截器
  RequestService.interceptors.status.use((respone) => {
    return true
  })

  // 添加成功拦截器
  RequestService.interceptors.success.use((respone) => {
    return respone.data
  })

  // 添加失败拦截器
  RequestService.interceptors.error.use((respone) => {
    return respone
  })

  // 网络异常处理
  RequestService.requestCatchHandle = (respone) => {
    // const defaultError = '服务通讯连接失败'
    // const message = {
    //   400: '请求参数错误',
    //   405: '请求服务方法错误',
    //   500: '服务器内部错误',
    //   403: '没有权限，请重新登陆'
    // }
    // if (respone) {
    //   const errMsg = (respone.data || {}).message
    //   // Notification.error(errMsg || message[respone.status] || defaultError)
    // } else {
    //   // Notification.error(defaultError)
    // }
  }

  RequestService.installExtendService(new TokenService())
}
