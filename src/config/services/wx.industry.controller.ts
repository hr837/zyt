import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'industrytrend'

/**
 * API接口配置
 */
export const WxIndustryController: ControllerConfig = {
  // 获取行业动态列表
  getIndustryTrendList: {
    service,
    controller,
    action: 'getIndustryTrendList',
    type: RequestMethod.Get
  },
  // 获取防疫百科列表
  getProtectionWikiList: {
    service,
    controller,
    action: 'getProtectionWikiList',
    type: RequestMethod.Get
  },
  // 获取防疫百科分类
  getProtectionWikiClass: {
    service,
    controller,
    action: 'getProtectionWikiClass',
    type: RequestMethod.Get
  },
  // 获取行业动态分类
  getIndustryTrendClass: {
    service,
    controller,
    action: 'getIndustryTrendClass',
    type: RequestMethod.Get
  },
  // 获取列表详情
  getDetails: {
    service,
    controller,
    action: 'getDetails',
    type: RequestMethod.Get
  }
}
