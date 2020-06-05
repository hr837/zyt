// import Taro from '@tarojs/taro'
import { ExtendService } from "@/core/http"

export class TokenService extends ExtendService {
  public before = (params: any) => {
    // const token = Taro.getStorageSync('token')
    // if (!token) {
    //   return
    // }
    // params.options.header = params.options.header || {}
    // params.options.header['X-Access-Token'] = token
  }

  public after = (response: any, requestParams: any) => {
    // if (response.status === 200 && response.data.code === 403) {
    //   Taro.showToast({ title: '用户身份过期,将重新登录', icon: 'none' })
    //   setTimeout(() => {
    //     Taro.redirectTo({
    //       url: '/pages/login/index'
    //     })
    //   }, 1000)
    // }
  }
}
