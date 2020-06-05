/**
 * 接口返回--列表
 */
export type ResponseList<T> = {
  success: boolean
  message: string
  code: string
  result: Array<T>
  timestamp: Date
}

/**
 * 查询接口返回
 */
export type ResponseObj<T> = {
  success: boolean
  message: string
  code: string | number
  result: T
  timestamp: Date
}

/**
 * 接口返回--分页
 */
export type ResponsePage<T> = {
  success: boolean
  message: string
  code: string
  result: PageInfo<T>
  timestamp: Date
}

/**
 * 分页对象
 */
export type PageInfo<T> = {
  /**
   * 当前页
   */
  current: number
  /**
   * 排序
   */
  orders: string[]
  /**
   * 总页数
   */
  pages: number
  /**
   * 当前页记录
   */
  records: Array<T>
  /**
   * 每页大小
   */
  size: number
  /**
   * 总数据量
   */
  total: number
}
