export type MarketType = {
  id: string
  /**
   * 物资分类
   */
  tag: string
}

/**
 * 行情信息
 */
export type MarketInfo = {
  /**
   * 子类类型
   */
  supplyType: string

  /**
   * 子类名称
   */
  supplyTypeText: string
  /**
   * 价格信息
   */
  priceModels: MarketPrice[]
}

/**
 * 子类价格
 */
export type MarketPrice = {
  /**
   * 子类类型
   */
  supplyType: string
  /**
   * 单价
   */
  price: string | number
  /**
   * 日期
   */
  nowDate: string
}
