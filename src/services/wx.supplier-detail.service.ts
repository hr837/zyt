import { Observable } from "rxjs"
import { Request, RequestParams } from "@/core/http"
import { WxSupplierDetailContorller } from "@/config/services/wx.supplier-detail.contorller"
import { ResponseObj } from "@/config/types/api.type"
import { FincalInfo, CompanyHealth } from "@/config/types/company.type"

/**
 * 企业经营信息
 */
export class WxSupplierDetailService {
  /**
   * 供应商财务信息
   * @param requestParams
   */
  @Request({
    server: WxSupplierDetailContorller.getSupplierFinanceMsg,
  })
  public getSupplierFinanceMsg(requestParams: RequestParams): Observable<ResponseObj<FincalInfo>> {
    return requestParams.request()
  }

  /**
   * 健康度
   * @param requestParams
   */
  @Request({
    server: WxSupplierDetailContorller.getSupplierHealthyMsg,
  })
  public getSupplierHealthyMsg(requestParams: RequestParams): Observable<ResponseObj<CompanyHealth>> {
    return requestParams.request()
  }

  /**
   * 工商信息
   * @param requestParams
   */
  @Request({
    server: WxSupplierDetailContorller.getSupplierBusinessMsg,
  })
  public getSupplierBusinessMsg(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 供应商采购信息
   * @param requestParams
   */
  @Request({
    server: WxSupplierDetailContorller.getSupplierPurchaseMsg,
  })
  public getSupplierPurchaseMsg(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 供应商主营
   * @param requestParams
   */
  @Request({
    server: WxSupplierDetailContorller.getSupplierSalesMsg,
  })
  public getSupplierSalesMsg(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 供应方企业详情
   * @param requestParams
   */
  @Request({
    server: WxSupplierDetailContorller.getSupplierDetails,
  })
  public getSupplierDetails(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 优质供应商详情
   * @param requestParams
   */
  @Request({
    server: WxSupplierDetailContorller.getHotSupplierDetails,
  })
  public getHotSupplierDetails(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }
}
