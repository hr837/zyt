import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'supplierQualification'

/**
 * 企业经营信息
 */
export const WxSupplierQualificationContorller: ControllerConfig = {
  // 资质验证结果
  getSupplierQualificationResults: {
    service,
    controller,
    action: 'getSupplierQualificationResults',
    type: RequestMethod.Get
  },
  // 获取营业执照详情
  getBusinessLicense: {
    service,
    controller,
    action: 'getBusinessLicense',
    type: RequestMethod.Get
  },
  // 获取营业状态
  getOperatingStatus: {
    service,
    controller,
    action: 'getOperatingStatus',
    type: RequestMethod.Get
  },
  // 获取营业执照有效期
  getExpirationDate: {
    service,
    controller,
    action: 'getExpirationDate',
    type: RequestMethod.Get
  },
  // 获取国产医疗器械产品注册证
  getDomesticRegistrationCertificate: {
    service,
    controller,
    action: 'getDomesticRegistrationCertificate',
    type: RequestMethod.Get
  },
  // 获取进口医疗器械产品注册证
  getImportedRegistrationCertificate: {
    service,
    controller,
    action: 'getImportedRegistrationCertificate',
    type: RequestMethod.Get
  },
  // 获取医疗器械经营许可
  getManageLicense: {
    service,
    controller,
    action: 'getManageLicense',
    type: RequestMethod.Get
  },
  // 获取医疗器械生产许可
  getProductionLicense: {
    service,
    controller,
    action: 'getProductionLicense',
    type: RequestMethod.Get
  },
  // 获取企业认证标准
  getCertificationStandard: {
    service,
    controller,
    action: 'getCertificationStandard',
    type: RequestMethod.Get
  },
  // 获取进出口权
  getImportExport: {
    service,
    controller,
    action: 'getImportExport',
    type: RequestMethod.Get
  }
}
