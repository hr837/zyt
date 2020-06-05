import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'supplydemand'

/**
 * API接口配置
 */
export const WxSupplyDemandController: ControllerConfig = {
  // 获取供需信息列表
  getSupplyDemandList: {
    service,
    controller,
    action: 'getSupplyDemandList',
    type: RequestMethod.Get
  },
  // 获取采购列表
  getPurchaseList: {
    service,
    controller,
    action: 'getPurchaseList',
    type: RequestMethod.Get
  },
  // 获取推荐采购列表
  getRecommendPurchaseList: {
    service,
    controller,
    action: 'getRecommendPurchaseList',
    type: RequestMethod.Get
  },
  // 获取推荐供应列表
  getRecommendSupplyList: {
    service,
    controller,
    action: 'getRecommendSupplyList',
    type: RequestMethod.Get
  },
  // 获取供应商列表
  getSupplyList: {
    service,
    controller,
    action: 'getSupplyList',
    type: RequestMethod.Get
  },
  // 获取需求详情
  getPurchaseDetails: {
    service,
    controller,
    action: 'getPurchaseDetails',
    type: RequestMethod.Get
  },
  // 获取供应详情
  getSupplyDetails: {
    service,
    controller,
    action: 'getSupplyDetails',
    type: RequestMethod.Get
  }
}
