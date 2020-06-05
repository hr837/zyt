import { ExtendService, RequestParams } from "../../core/http"
import appConfig from "../../config/app.config"
import { Observable, Subscriber } from "rxjs"

export class LoadingService extends ExtendService {
  public status: Observable<boolean>

  public timeout: number | null = null

  public subscriber!: Subscriber<boolean>

  constructor() {
    super()
    this.status = new Observable((subscriber: any) => (this.subscriber = subscriber))
  }

  /**
   * 请求前置操作
   */
  public before = () => {
    this.subscriber.next(true)

    // 清除超时操作
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    // 超时重置状态
    this.timeout = setTimeout(() => {
      this.subscriber.next(true)
    }, appConfig.timeout)
  }

  /**
   * 请求后置操作
   */
  public after = () => {
    this.subscriber.next(false)

    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
}
