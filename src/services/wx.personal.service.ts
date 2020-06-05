import { Observable } from "rxjs"
import { ResponseObj } from "@/config/types/api.type"
import { WxPersonalController } from "@/config/services/wx.personal.controller"
import { Request, RequestParams } from "../core/http"

/**
 * 微信API服务
 */
export class WxPersonalService {
  /**
   * 获取平台联系方式
   */
  @Request({
    server: WxPersonalController.getPlatformPhone,
  })
  public getPlatformPhone(requestParams: RequestParams): Observable<ResponseObj<string>> {
    return requestParams.request()
  }

  /**
   * 获取账号绑定的公司信息
   */
  @Request({
    server: WxPersonalController.getAccountBindSupplierDetails,
  })
  public getAccountBindSupplierDetails(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }
}
