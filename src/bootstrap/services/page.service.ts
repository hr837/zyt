import { ExtendService } from "../../core/http"

export class PageService extends ExtendService {
  public default = {
    pageSize: 10,
    pageIndex: 1,
    total: 0,
    pageSizeOpts: [20, 50, 100, 200],
  }
  public pageSize: number
  public pageIndex: number
  public total: number
  public pageSizeOpts: number[]
  /**
   * 加载状态
   */
  public moreStatus: LoadingStatus = "loading"

  constructor(data?: any) {
    super()

    if (data) this.default = { ...this.default, ...data }

    this.pageSize = this.default.pageSize
    this.pageIndex = this.default.pageIndex || 1
    this.total = this.default.total
    this.pageSizeOpts = this.default.pageSizeOpts
  }

  public before = (params: { data: any }) => {
    params.data = {
      ...params.data,
      pageSize: this.pageSize,
      pageNo: this.pageIndex,
    }
    this.moreStatus = "loading"
  }

  public after = (response: any) => {
    const { total, current } = response.data.result
    this.total = total
    this.moreStatus = current * this.pageSize < total ? "more" : "noMore"
  }

  public reset() {
    this.pageIndex = this.default.pageIndex
    this.pageSize = this.default.pageSize
  }
}
