import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'login'

/**
 * API接口配置
 */
export const WxLoginController: ControllerConfig = {
  // // 获取openId
  // getOpenId: {
  //   service,
  //   controller,
  //   action: 'getOpenId',
  //   type: RequestMethod.Get
  // },

  // 登录
  wechatLogin: {
    service,
    controller,
    action: 'wechatLogin',
    type: RequestMethod.Post
  },

  // 更新微信登录的用户手机号
  getPhoneNumber: {
    service,
    controller,
    action: 'getPhoneNumber',
    type: RequestMethod.Get
  }
}
