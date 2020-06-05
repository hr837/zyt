import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'user'

/**
 * API接口配置
 */
export const WxBusinessController: ControllerConfig = {
  // 获取商品类型
  getSysCategory: {
    service,
    controller,
    action: 'getSysCategory',
    type: RequestMethod.Get
  },
  // 获取商品属性
  getSysAttribute: {
    service,
    controller,
    action: 'getSysAttribute',
    type: RequestMethod.Get
  },
  // 发布需求信息
  savePurchaseOrder: {
    service,
    controller,
    action: 'savePurchaseOrder',
    type: RequestMethod.Put
  },
  // 获取我的发布信息
  getMyPurchaseOrderList: {
    service,
    controller,
    action: 'getMyPurchaseOrderList',
    type: RequestMethod.Get
  },
  // 获取我的发布详情
  getPurchaseOrderInfo: {
    service,
    controller,
    action: 'getPurchaseOrderInfo',
    type: RequestMethod.Get
  },
  // 获取我的订单列表
  getMyConsumerOrderList: {
    service,
    controller,
    action: 'getMyConsumerOrderList',
    type: RequestMethod.Get
  },
  // 获取已经匹配的商户
  queryPageListById: {
    service,
    controller,
    action: 'queryPageListById',
    type: RequestMethod.Get
  },
  // 获取系统标题 (后期将放开做数据字典)
  getAttributeByCode: {
    service,
    controller,
    action: 'getAttributeByCode',
    type: RequestMethod.Get
  },
  // 更新绑定信息
  updateUserInfo: {
    service,
    controller,
    action: 'updateUserInfo',
    type: RequestMethod.Get
  },
  // 获取所有商品分类
  getAllSysCategory: {
    service,
    controller,
    action: 'getAllSysCategory',
    type: RequestMethod.Get
  },
  // 获取首页物资行情
  getHomeAdCurve: {
    service,
    controller,
    action: 'getHomeAdCurve',
    type: RequestMethod.Get
  },
  // 获取系统banner
  getHomeBannerList: {
    service,
    controller,
    action: 'getHomeBannerList',
    type: RequestMethod.Get
  },
  // 首页系统点击率统计
  getHomeStatistics: {
    service,
    controller,
    action: 'getHomeStatistics',
    type: RequestMethod.Get
  },
  // 获取我的信息
  getMyInfos: {
    service,
    controller,
    action: 'getMyInfos',
    type: RequestMethod.Get
  },
  // 获取我的发布列表
  getMyOrderReleases: {
    service,
    controller,
    action: 'getMyOrderReleases',
    type: RequestMethod.Get
  },
  // 账号类型
  getCustomerTypeDown: {
    service,
    controller,
    action: 'getCustomerTypeDown',
    type: RequestMethod.Get
  },
  // 首页成交播报
  homeDealReport: {
    service,
    controller,
    action: 'homeDealReport',
    type: RequestMethod.Get
  },
  // 成交播报历史
  homeDealReportHistory: {
    service,
    controller,
    action: 'homeDealReportHistory',
    type: RequestMethod.Get
  }
}
