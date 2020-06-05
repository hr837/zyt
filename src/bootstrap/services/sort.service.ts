import { ExtendService } from "../../core/http"

/**
 * 排序方式
 */
export const SortType = {
  ascending: "asc",
  descending: "desc",
}

export class SortService extends ExtendService {
  private sort: any = {}

  constructor(data?: any) {
    super()

    if (data) this.sort = data
  }

  /**
   * 更新排序
   * @param key 排序关键字
   * @param value 排序方式
   */
  public update(key: string, value: keyof typeof SortType) {
    if (key && value) {
      this.sort[key] = SortType[value] || value
    }
  }

  /**
   * 移除排序项
   * @param key 排序关键字
   */
  public remove(key: string) {
    // 过滤
    const items: any[] = Object.entries(this.sort).filter(([k, v]) => k !== key) as any[]

    this.sort = {}

    // 判断排序项是否存在
    if (items) {
      items.forEach(([k, v]) => {
        this.sort[k] = v
      })
    }
  }

  public before = (params: { data: any }) => {
    params.data = {
      ...params.data,
      sort: this.stringify(this.sort),
    }
  }

  public after = (_data: any, _params: any) => {
    //
  }

  /**
   * 重置分页数据
   */
  public reset() {
    this.sort = {}
  }

  /**
   * 转换排序对象为字符串
   */
  private stringify(value: any): string[] {
    if (typeof value !== "object") {
      return []
    }

    if (value instanceof SortService) {
      value = value.sort
    }

    return Object.entries(value).map(([k, v]) => `${k},${v}`)
  }
}
