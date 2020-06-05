export type OrderSimpleType = {
  id: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 分类名称
   */
  supplyType: string
  /**
   * 数量
   */
  purchaseNumber: number
  /**
   * 价格
   */
  expectPrice: string
  remark: string
  /**
   * 物资属性
   */
  property: string
  /**
   * 是否置顶
   */
  isTop: string
  /**
   * 是否含税
   */
  isTax: string
  /**
   * 是否核实
   */
  isVerify: string
  /**
   * 采购用途
   */
  isExport: string
  /**
   * 分类标签图标
   */
  url: string
}
