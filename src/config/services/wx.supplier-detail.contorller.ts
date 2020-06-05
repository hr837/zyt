import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'supplierDetail'

/**
 * 企业经营信息
 */
export const WxSupplierDetailContorller: ControllerConfig = {
  // 企业财务信息
  getSupplierFinanceMsg: {
    service,
    controller,
    action: 'getSupplierFinanceMsg',
    type: RequestMethod.Get
  },
  // 健康度
  getSupplierHealthyMsg: {
    service,
    controller,
    action: 'getSupplierHealthyMsg',
    type: RequestMethod.Get
  },
  // 工商信息
  getSupplierBusinessMsg: {
    service,
    controller,
    action: 'getSupplierBusinessMsg',
    type: RequestMethod.Get
  },
  // 采购信息
  getSupplierPurchaseMsg: {
    service,
    controller,
    action: 'getSupplierPurchaseMsg',
    type: RequestMethod.Get
  },
  // 供应商主营
  getSupplierSalesMsg: {
    service,
    controller,
    action: 'getSupplierSalesMsg',
    type: RequestMethod.Get
  },
  // 供应商企业详情页
  getSupplierDetails: {
    service,
    controller,
    action: 'getSupplierDetails',
    type: RequestMethod.Get
  },
  // 优质供应商详情
  getHotSupplierDetails: {
    service,
    controller,
    action: 'getHotSupplierDetails',
    type: RequestMethod.Get
  }
}
