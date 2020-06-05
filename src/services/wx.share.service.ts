import { Observable } from "rxjs"
import { Request, RequestParams } from "../core/http"
import { WxShareController } from "../config/services/wx.share.controller"

/**
 * 微信API服务
 */
export class WxShareService {
  /**
   * 获取物资行情
   * @param requestParams
   */
  @Request({
    server: WxShareController.getShareInfo,
    force: true,
  })
  public getShareInfo(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }
}
