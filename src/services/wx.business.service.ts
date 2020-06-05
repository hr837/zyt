import { Observable } from "rxjs"
import {
  BannerProps,
  GoodAttrType,
  SysCount,
  GoodCategoryGroup,
  DictType,
  DealReport,
  HistoryDealReport,
} from "@/config/types/business.type"
import { ResponseList, ResponseObj } from "@/config/types/api.type"
import { Request, RequestParams } from "../core/http"
import { WxBusinessController } from "../config/services/wx.business.controller"

/**
 * 微信API服务
 */
export class WxBusinessService {
  /**
   * 获取商品类型
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getSysCategory,
    force: true,
  })
  public getSysCategory(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }
  /**
   * 获取商品属性
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getSysAttribute,
  })
  public getSysAttribute(requestParams: RequestParams): Observable<Array<GoodAttrType>> {
    return requestParams.request()
  }
  /**
   * 发布需求信息
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.savePurchaseOrder,
  })
  public savePurchaseOrder(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取我的发布信息
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getMyPurchaseOrderList,
  })
  public getMyPurchaseOrderList(requestParams: RequestParams): Observable<{ data: any[] }> {
    return requestParams.request()
  }

  /**
   * 获取我的发布详情
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getPurchaseOrderInfo,
  })
  public getPurchaseOrderInfo(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取我的订单列表
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getMyConsumerOrderList,
  })
  public getMyConsumerOrderList(requestParams: RequestParams): Observable<{ data: any[] }> {
    return requestParams.request()
  }

  /**
   * 获取已经匹配的商户
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.queryPageListById,
  })
  public queryPageListById(requestParams: RequestParams): Observable<{ result: any; success: boolean }> {
    return requestParams.request()
  }

  /**
   *
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getAttributeByCode,
  })
  public getSystemTitle(
    requestParams: RequestParams
  ): Observable<{
    result: Array<{ value: string; text: string; title: string }>
  }> {
    return requestParams.request()
  }

  /**
   *更新绑定信息
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.updateUserInfo,
  })
  public updateUserInfo(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }
  /**
   *获取所有商品分类
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getAllSysCategory,
  })
  public getAllSysCategory(requestParams: RequestParams): Observable<Array<GoodCategoryGroup>> {
    return requestParams.request()
  }
  /**
   *获取主页物资行情
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getHomeAdCurve,
  })
  public getHomeAdCurve(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取主页banner列表
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getHomeBannerList,
  })
  public getHomeBannerList(requestParams: RequestParams): Observable<ResponseList<BannerProps>> {
    return requestParams.request()
  }

  /**
   * 首页系统点击率统计
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getHomeStatistics,
  })
  public getHomeStatistics(requestParams: RequestParams): Observable<SysCount> {
    return requestParams.request()
  }

  /**
   * 获取用户信息
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getMyInfos,
  })
  public getMyInfos(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取我的发布列表
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getMyOrderReleases,
    force: true,
  })
  public getMyOrderReleases(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }

  /**
   * 账户类型列表
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.getCustomerTypeDown,
  })
  public getCustomerTypeDown(requestParams: RequestParams): Observable<ResponseList<DictType>> {
    return requestParams.request()
  }

  /**
   * 首页成交播报
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.homeDealReport,
  })
  public getHomeDealReport(requestParams: RequestParams): Observable<ResponseList<DealReport>> {
    return requestParams.request()
  }

  /**
   * 历史成交播报
   * @param requestParams
   */
  @Request({
    server: WxBusinessController.homeDealReportHistory,
  })
  public homeDealReportHistory(requestParams: RequestParams): Observable<ResponseObj<HistoryDealReport>> {
    return requestParams.request()
  }
}
