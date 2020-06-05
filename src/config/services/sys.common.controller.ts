import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'sys'
// 控制器名称
const controller = 'common'
/**
 * API接口配置
 */
export const SysCommonController: ControllerConfig = {
  // 获取行业动态列表
  wxUpload: {
    service,
    controller,
    action: 'wxUpload',
    type: RequestMethod.Post
  }
}
