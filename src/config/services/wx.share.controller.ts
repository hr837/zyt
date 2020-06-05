import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = ''

/**
 * API接口配置
 */
export const WxShareController: ControllerConfig = {
  // 获取供物资行情
  getShareInfo: {
    service,
    controller,
    action: 'user/getWxConfigParams',
    type: RequestMethod.Get
  },

}
