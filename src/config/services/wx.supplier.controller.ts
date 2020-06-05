import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'supplier'

/**
 * 企业快查
 */
export const WxSupplierController: ControllerConfig = {
  // 获取企业查询参数
  getIndustryTrendList: {
    service,
    controller,
    action: 'getIndustryTrendList',
    type: RequestMethod.Get
  },
  /**
   * 企业查询列表
   */
  getSupplierQuickList: {
    service,
    controller,
    action: 'getSupplierQuickList',
    type: RequestMethod.Get
  },
  /**
   * 企业详情
   */
  getSupplierQuickInfo: {
    service,
    controller,
    action: 'getSupplierQuickInfo',
    type: RequestMethod.Get
  },
  // 获取热门供货方推荐
  getHighSupplyRecommend: {
    service,
    controller,
    action: 'getHighSupplyRecommend',
    type: RequestMethod.Get
  },

  // 录入认证
  authenticateSupplier: {
    service,
    controller,
    action: 'authenticateSupplier',
    type: RequestMethod.Post
  },
  // 查看认证详情
  getAuthenticateDetails: {
    service,
    controller,
    action: 'getAuthenticateDetails',
    type: RequestMethod.Get
  },
  // 获取企业下拉框
  getSupplierDown: {
    service,
    controller,
    action: 'getSupplierDown',
    type: RequestMethod.Get
  },
  // 获取用户查看次数
  checkCustomerLimits: {
    service,
    controller,
    action: 'checkCustomerLimits',
    type: RequestMethod.Get
  }
}
