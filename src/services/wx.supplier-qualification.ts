import { Observable } from "rxjs"
import { Request, RequestParams } from "@/core/http"
import { WxSupplierQualificationContorller } from "@/config/services/wx.supplier-qualification.controller"
import { ResponseObj, ResponseList } from "@/config/types/api.type"

/**
 * 企业经营信息
 */
export class WxSupplierQualifacationService {
  // /**
  //  * 资质验证结果
  //  * @param requestParams
  //  */
  // @Request({
  //   server: WxSupplierQualificationContorller.getSupplierQualificationResults,
  // })
  // public getSupplierQualificationResults(requestParams: RequestParams): Observable<ResponseObj<any>> {
  //   return requestParams.request()
  // }

  /**
   * 获取营业执照详情
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getBusinessLicense,
  })
  public getBusinessLicense(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取营业状态
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getOperatingStatus,
  })
  public getOperatingStatus(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取营业执照有效期
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getExpirationDate,
  })
  public getExpirationDate(
    requestParams: RequestParams
  ): Observable<ResponseObj<{ establishDate: string; maturityDate: string }>> {
    return requestParams.request()
  }

  /**
   * 获取国产医疗器械产品注册证
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getDomesticRegistrationCertificate,
  })
  public getDomesticRegistrationCertificate(requestParams: RequestParams): Observable<ResponseList<any>> {
    return requestParams.request()
  }

  /**
   * 获取进口医疗器械产品注册证
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getImportedRegistrationCertificate,
  })
  public getImportedRegistrationCertificate(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取医疗器械经营许可
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getManageLicense,
  })
  public getManageLicense(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取医疗器械生产许可
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getProductionLicense,
  })
  public getProductionLicense(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 获取企业认证标准
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getCertificationStandard,
  })
  public getCertificationStandard(requestParams: RequestParams): Observable<ResponseList<{ standard: any }>> {
    return requestParams.request()
  }

  /**
   * 获取进出口权
   * @param requestParams
   */
  @Request({
    server: WxSupplierQualificationContorller.getImportExport,
  })
  public getImportExport(requestParams: RequestParams): Observable<ResponseObj<{ businessScope: any }>> {
    return requestParams.request()
  }
}
