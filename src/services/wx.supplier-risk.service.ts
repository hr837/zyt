import { Observable } from "rxjs"
import { Request, RequestParams } from "@/core/http"
import { WxSupplierRiskController } from "@/config/services/wx.supplier-risk.controllerts"
import { ResponseObj, ResponseList } from "@/config/types/api.type"

/**
 * 企业信息查询
 */
export class WxSupplierRiskService {
  /**
   * 获取海关失信
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierCustoms,
  })
  public getSupplierCustoms(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }

  /**
   * 获取非法集资
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierCollectMoney,
  })
  public getSupplierCollectMoney(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }

  /**
   * 获取政府采购严重违法失信行为
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierDishonesty,
  })
  public getSupplierDishonesty(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取恶意逃税债借款人
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierLoan,
  })
  public getSupplierLoan(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取其他严重违法
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierOther,
  })
  public getSupplierOther(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取PEVC企业违法
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierPevc,
  })
  public getSupplierPevc(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取安全生产领域失信
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierSecurity,
  })
  public getSupplierSecurity(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取统计领域严重失信企业
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierSerious,
  })
  public getSupplierSerious(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取严重失信
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierSeriousDishonesty,
  })
  public getSupplierSeriousDishonesty(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取重大税收违法案件
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierTax,
  })
  public getSupplierTax(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
  /**
   * 获取严重拖欠农民工工资失信主体
   * @param requestParams
   */
  @Request({
    server: WxSupplierRiskController.getSupplierWage,
  })
  public getSupplierWage(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }
}
