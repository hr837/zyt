import { Observable } from "rxjs"
import { Request, RequestParams } from "@/core/http"
import { WxSupplyDemandController } from "@/config/services/wx.supply-demand.controller"
import { ResponseObj, ResponseList } from "@/config/types/api.type"
import { OrderSimpleType } from "@/config/types/order.type"

/**
 * 微信API服务
 */
export class WxSupplyDemandService {
  /**
   * 获取供需信息列表
   * @param requestParams
   */
  @Request({
    server: WxSupplyDemandController.getSupplyDemandList,
  })
  public getSupplyDemandList(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取需求详情
   */
  @Request({
    server: WxSupplyDemandController.getPurchaseDetails,
  })
  public getPurchaseDetails(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取推荐采购列表
   * @param requestParams
   */
  @Request({
    server: WxSupplyDemandController.getRecommendPurchaseList,
    force: true,
  })
  public getRecommendPurchaseList(requestParams: RequestParams): Observable<ResponseList<OrderSimpleType>> {
    return requestParams.request()
  }

  /**
   * 获取推荐供应列表
   * @param requestParams
   */
  @Request({
    server: WxSupplyDemandController.getRecommendSupplyList,
    force: true,
  })
  public getRecommendSupplyList(requestParams: RequestParams): Observable<ResponseList<OrderSimpleType>> {
    return requestParams.request()
  }

  /**
   * 获取采购列表
   * @param requestParams
   */
  @Request({
    server: WxSupplyDemandController.getPurchaseList,
  })
  public getPurchaseList(requestParams: RequestParams): Observable<ResponseList<OrderSimpleType>> {
    return requestParams.request()
  }

  /**
   * 获取供应列表
   * @param requestParams
   */
  @Request({
    server: WxSupplyDemandController.getSupplyList,
  })
  public getSupplyList(requestParams: RequestParams): Observable<ResponseList<OrderSimpleType>> {
    return requestParams.request()
  }

  /**
   * 获取供应详情
   */
  @Request({
    server: WxSupplyDemandController.getSupplyDetails,
  })
  public getSupplyDetails(requestParams: RequestParams): Observable<ResponseList<OrderSimpleType>> {
    return requestParams.request()
  }
}
