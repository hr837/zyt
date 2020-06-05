import { Observable } from "rxjs"
import { Request, RequestParams } from "@/core/http"
import { WxLoginController } from "@/config/services/wx.login.controller"
import { WxMbLoginController } from "@/config/services/wx.mblogin.controller"
import { ResponseObj } from "@/config/types/api.type"

/**
 * 微信API服务
 */
export class WxService {
  /**
   * 绑定微信信息
   * @param requestParams
   */
  @Request({
    server: WxLoginController.wechatLogin,
  })
  public bindWxUserInfo(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 使用微信手机号登录
   */
  @Request({
    server: WxLoginController.getPhoneNumber,
  })
  public getPhoneNumber(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取手机验证码
   * @param requestParams
   */
  @Request({
    server: WxMbLoginController.getVerCode,
  })
  public getMobileVerifyCode(requestParams: RequestParams): Observable<ResponseObj<any>> {
    return requestParams.request()
  }

  /**
   * 手机验证码登录
   * @param requestParams
   */
  @Request({
    server: WxMbLoginController.wechatMbLogin,
  })
  public mobileVerifyLogin(requestParams: RequestParams): Observable<any> {
    return requestParams.request()
  }

  /**
   * 获取验证码图片
   * @param requestParams
   */
  @Request({
    server: WxMbLoginController.randomImage,
  })
  public getRandomImage(requestParams: RequestParams): Observable<ResponseObj<null>> {
    return requestParams.request()
  }
}
