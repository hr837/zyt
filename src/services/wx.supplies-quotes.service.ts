import { Observable } from "rxjs"
import { Request, RequestParams } from "@/core/http"
import { WxSuppliesQuotesController } from "@/config/services/wx.supplies-quotes.controller"
import { ResponseList } from "@/config/types/api.type"
import { MarketType, MarketInfo } from "@/config/types/market.type"

/**
 * 微信API服务
 */
export class WxSuppliesQuotesService {
  /**
   * 获取物资行情
   * @param requestParams
   */
  @Request({
    server: WxSuppliesQuotesController.getAllSuppliesQuotes,
  })
  public getAllSuppliesQuotes(requestParams: RequestParams): Observable<ResponseList<MarketType>> {
    return requestParams.request()
  }

  /**
   * 获取物资行情分类统计数据
   * @param requestParams
   */
  @Request({
    server: WxSuppliesQuotesController.getSuppliesPriceByCondition,
    force: true,
  })
  public getSuppliesPriceByCondition(requestParams: RequestParams): Observable<ResponseList<MarketInfo>> {
    return requestParams.request()
  }

  /**
   * 首页查询物资价格指数
   * @param requestParams
   */
  @Request({
    server: WxSuppliesQuotesController.getHomeSuppliesPrice,
  })
  public getHomeSuppliesPrice(requestParams: RequestParams): Observable<ResponseList<MarketInfo>> {
    return requestParams.request()
  }
}
