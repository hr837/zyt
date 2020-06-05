import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'mblogin'

/**
 * API接口配置
 */
export const WxMbLoginController: ControllerConfig = {
  // 获取验证码
  getVerCode: {
    service,
    controller,
    action: 'getVerCode',
    type: RequestMethod.Get
  },

  // 手机号登录
  wechatMbLogin: {
    service,
    controller,
    action: 'wechatMbLogin',
    type: RequestMethod.Post
  },

  // 获取验证码图片
  randomImage: {
    service,
    controller,
    action: 'randomImage',
    type: RequestMethod.Get
  }
}
