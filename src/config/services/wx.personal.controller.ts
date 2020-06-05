import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'personal'
/**
 * API接口配置
 */
export const WxPersonalController: ControllerConfig = {
  // 获取平台联系方式
  getPlatformPhone: {
    service,
    controller,
    action: 'getPlatformPhone',
    type: RequestMethod.Get
  },
  /**
   * 获取账号绑定的公司信息
   */
  getAccountBindSupplierDetails: {
    service,
    controller,
    action: 'getAccountBindSupplierDetails',
    type: RequestMethod.Get
  }
}
