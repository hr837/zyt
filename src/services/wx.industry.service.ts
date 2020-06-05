import { Observable } from "rxjs"
import { ResponseList, ResponsePage, ResponseObj } from "@/config/types/api.type"
import { Request, RequestParams } from "../core/http"
import { WxIndustryController } from "../config/services/wx.industry.controller"

/**
 * 微信API服务--行业动态
 */
export class WxIndustryService {
  /**
   * 获取行业动态列表
   * @param requestParams
   */
  @Request({
    server: WxIndustryController.getIndustryTrendList,
    force: true,
  })
  public getIndustryTrendList(requestParams: RequestParams): Observable<ResponsePage<any>> {
    return requestParams.request()
  }
  /**
   * 获取防疫百科列表
   * @param requestParams
   */
  @Request({
    server: WxIndustryController.getProtectionWikiList,
    force: true,
  })
  public getProtectionWikiList(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取行业动态分类
   * @param requestParams
   */
  @Request({
    server: WxIndustryController.getProtectionWikiClass,
  })
  public getProtectionWikiClass(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取行业动态分类
   * @param requestParams
   */
  @Request({
    server: WxIndustryController.getIndustryTrendClass,
  })
  public getIndustryTrendClass(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }

  /**
   * 获取列表详情
   * @param requestParams
   */
  @Request({
    server: WxIndustryController.getDetails,
  })
  public getDetails(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }
}
