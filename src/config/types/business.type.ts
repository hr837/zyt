/**
 * banner list
 */
export type BannerProps = {
  /**
   * 图片相对位置
   */
  picturePath: string
  /**
   * 要打开的页面
   */
  linkAddress: string
  /**
   * 优先级
   */
  priority: number
  id: string
  src?: string
}

/**
 * 数据字典Type
 */
export type DictType = {
  /**
   * 字典值
   */
  value: string
  /**
   * 字典文字
   */
  text: string
  /**
   * 字典标题
   */
  title?: string
}

/**
 * 系统物资属性类型
 */
export type SysCategoryType = {
  /**
   * 编码
   */
  code: string
  id: string
  /**
   * 标题
   */
  title: string
}

/**
 * 商品属性
 */
export type GoodAttrType = {
  /**
   * 0 多选
   * 1 单选
   */
  flag: string
  /**
   * 属性分类名称
   */
  name: string
  /**
   * 属性ID
   */
  id: string
  /**
   * 属性名称
   */
  value: string
}

/**
 * 商品类型组
 */
export type GoodCategoryGroup = {
  /**
   * 类型名称
   */
  nameKey: string

  nameValue: Array<CategoryType>
}

/**
 * 商品类型
 */
export type CategoryType = {
  /**
   * 分类ID
   */
  id: string
  /**
   * 分类名称
   */
  title: string
}

/**
 * 系统点击量
 */
export type SysCount = {
  /**
   * 总访问量
   */
  totalVisits: number
  /**
   * 供应商量
   */
  totalHighSupply: number
  /**
   * 需求量
   */
  totalDemands: number
}

/**
 * 成交播报
 */
export type DealReport = {
  id: string
  /**
   * 标题
   */
  title: string
  content: string
  /**
   * 成交区域
   */
  area: string
  status: string
  /**
   * 公布时间
   */
  reportDate: string
}

/**
 * 成交播报历史
 */
export type HistoryDealReport = {
  [key: string]: Array<DealReport>
}
