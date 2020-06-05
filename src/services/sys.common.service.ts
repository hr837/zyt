import { Observable } from "rxjs"
import { ResponseObj } from "@/config/types/api.type"
import { Request, RequestParams } from "../core/http"
import { SysCommonController } from "../config/services/sys.common.controller"

/**
 * 微信API服务
 */
export class SysCommonService {
  /**
   * 获取物资行情
   * @param files 要上传的文件
   */
  @Request({
    server: SysCommonController.wxUpload,
    force: true,
  })
  public upload(requestParams: RequestParams): Observable<ResponseObj<any>> {
    // 添加multipart标识
    const formData = requestParams.data
    if (formData instanceof FormData) {
      if (!formData.has("enctype")) {
        formData.append("enctype", "multipart/form-data")
      }
    }

    requestParams.options.header = {
      "Content-Type": `multipart/form-data`,
    }

    return requestParams.request()
  }
}
