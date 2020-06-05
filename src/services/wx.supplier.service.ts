import { Observable } from "rxjs"
import { Request, RequestParams } from "@/core/http"
import { WxSupplierController } from "@/config/services/wx.supplier.controller"
import { ResponseObj, ResponsePage, ResponseList } from "@/config/types/api.type"
import { CompanyQueryParam, HightQualitySupplyLogo, SearchCompanyInfo } from "@/config/types/company.type"

/**
 * 企业快查服务
 */
export class WxSupplierService {
  /**
   * 获取企业查询参数
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.getIndustryTrendList,
  })
  public getIndustryTrendList(requestParams: RequestParams): Observable<ResponseObj<CompanyQueryParam>> {
    return requestParams.request()
  }

  /**
   * 企业查询列表
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.getSupplierQuickList,
  })
  public getSupplierQuickList(requestParams: RequestParams): Observable<ResponsePage<any>> {
    return requestParams.request()
  }

  /**
   * 企业详情
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.getSupplierQuickInfo,
  })
  public getSupplierQuickInfo(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取热门供货方推荐
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.getHighSupplyRecommend,
  })
  public getHighSupplyRecommend(requestParams: RequestParams): Observable<Array<HightQualitySupplyLogo>> {
    return requestParams.request()
  }

  /**
   * 录入认证
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.authenticateSupplier,
  })
  public authenticateSupplier(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 查看认证详情
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.getAuthenticateDetails,
    force: true,
  })
  public getAuthenticateDetails(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 搜索企业
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.getSupplierDown,
  })
  public quickSearchCompany(requestParams: RequestParams): Observable<ResponseList<SearchCompanyInfo>> {
    return requestParams.request()
  }

  /**
   * 检测用户查看企业次数
   * @param requestParams
   */
  @Request({
    server: WxSupplierController.checkCustomerLimits,
  })
  public checkCustomerLimits(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }
}
