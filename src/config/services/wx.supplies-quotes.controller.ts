import { RequestMethod } from '../../core/http'
import { ControllerConfig } from '../type.config'

// 服务名称
const service = 'wechat'
// 控制器名称
const controller = 'suppliesquotes'

/**
 * API接口配置
 */
export const WxSuppliesQuotesController: ControllerConfig = {
  // 获取物资行情
  getAllSuppliesQuotes: {
    service,
    controller,
    action: 'getAllSuppliesQuotes',
    type: RequestMethod.Get
  },
  // 物资行情统计数据
  getSuppliesPriceByCondition: {
    service,
    controller,
    action: 'getSuppliesPriceByCondition',
    type: RequestMethod.Get
  },
  // 首页物资行情统趋势
  getHomeSuppliesPrice: {
    service,
    controller,
    action: 'getHomeSuppliesPrice',
    type: RequestMethod.Get
  }
}
