import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'supplierRisk'
/**
 * API接口配置
 */
export const WxSupplierRiskController: ControllerConfig = {
  // 获取海关失信
  getSupplierCustoms: {
    service,
    controller,
    action: 'getSupplierCustoms',
    type: RequestMethod.Get
  },
  // 获取非法集资
  getSupplierCollectMoney: {
    service,
    controller,
    action: 'getSupplierCollectMoney',
    type: RequestMethod.Get
  },
  // 获取政府采购严重违法失信行为
  getSupplierDishonesty: {
    service,
    controller,
    action: 'getSupplierDishonesty',
    type: RequestMethod.Get
  },
  // 获取恶意逃税债借款人
  getSupplierLoan: {
    service,
    controller,
    action: 'getSupplierLoan',
    type: RequestMethod.Get
  },
  // 获取其他严重违法
  getSupplierOther: {
    service,
    controller,
    action: 'getSupplierOther',
    type: RequestMethod.Get
  },
  // 获取PEVC企业违法
  getSupplierPevc: {
    service,
    controller,
    action: 'getSupplierPevc',
    type: RequestMethod.Get
  },
  // 获取安全生产领域失信
  getSupplierSecurity: {
    service,
    controller,
    action: 'getSupplierSecurity',
    type: RequestMethod.Get
  },
  // 获取统计领域严重失信企业
  getSupplierSerious: {
    service,
    controller,
    action: 'getSupplierSerious',
    type: RequestMethod.Get
  },
  // 获取严重失信
  getSupplierSeriousDishonesty: {
    service,
    controller,
    action: 'getSupplierSeriousDishonesty',
    type: RequestMethod.Get
  },
  // 获取重大税收违法案件
  getSupplierTax: {
    service,
    controller,
    action: 'getSupplierTax',
    type: RequestMethod.Get
  },
  // 获取严重拖欠农民工工资失信主体
  getSupplierWage: {
    service,
    controller,
    action: 'getSupplierWage',
    type: RequestMethod.Get
  }
}
