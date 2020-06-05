import { DictType, SysCategoryType } from './business.type'

/**
 * 企业查询参数
 */
export type CompanyQueryParam = {
  /**
   * 商品分类
   */
  sysCategory: Array<SysCategoryType>
  /**
   * 药监局注册备案
   */
  isRecord: Array<DictType>
  /**
   * 企业性质
   */
  companyProperty: Array<DictType>
  /**
   * 企业类型
   */
  managementType: Array<DictType>
}

/**
 * 财务信息
 */
export type FincalInfo = {
  /**
   * 所得税
   */
  incomeTax: string
  /**
   * 净利润
   */
  netProfit: string
  /**
   * 营业收入
   */
  operatingIncome: string
  /**
   * 资产总额
   */
  totalAssets: string
  /**
   * 利润总额
   */
  totalProfit: string
  /**
   * 增值税
   */
  valueAddedTax: string
}

/**
 * 公司健康指标
 */
export type CompanyHealth = {
  /**
   * 公司实力
   */
  companySize: number
  /**
   * 关联关系
   */
  connectionRelation: number
  /**
   * 经营能力
   */
  managementCapacity: number
  /**
   * 行业状况
   */
  stability: number
  /**
   * 企业信用
   */
  history: number
  /**
   * 健康度得分
   */
  score: number
}

/**
 * 优质供应商
 */
export type HightQualitySupplyLogo = {
  /**
   * 供应商ID
   */
  supplierId: string
  /**
   * 供应商名称
   */
  name: string
  /**
   * 供应商Logo相对路径
   */
  url: string
}

/**
 * 搜索结果的公司信息
 */
export type SearchCompanyInfo = {
  /**
   * 对应 supplierId
   */
  id: string
  /**
   * 企业名称
   */
  name: string
}
/**

 * 企业信息资质验证

 */
