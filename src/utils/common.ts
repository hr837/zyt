import AppConfig from "@/config/app.config"

export default class CommonService {
  /**
   * 获取文件在服务器的地址
   * @param relaviteUrl
   */
  public static getAttachUrl(relaviteUrl: string) {
    if (!relaviteUrl) return ""
    if (relaviteUrl.startsWith("http")) {
      return relaviteUrl
    }
    return AppConfig.server + "/sys/common/static/" + relaviteUrl
  }

  /**
   * 获取webView加载的文件路径
   * @param relaviteUrl
   */
  public static getWebAttach(fileName: string) {
    if (fileName.startsWith("http")) {
      return fileName
    }
    return AppConfig.attach + "/upFiles/" + fileName
  }

  /**
   * 获取浏览器类型
   */
  static getBrowserType(): "weixin" | "weibo" | "qq" | "other" {
    const ua = navigator.userAgent.toLowerCase()
    console.log("用户使用浏览器", ua)
    if (new RegExp("micromessenger").test(ua)) {
      return "weixin"
    } else if (new RegExp("weibo").test(ua)) {
      return "weibo"
    } else if (new RegExp("qq").test(ua)) {
      return "qq"
    } else {
      return "other"
    }
  }

  /**
   * 检测图片，大于500KB 进行压缩
   * @param file
   */
  public static checkImageSize(file: File): Promise<File | Blob> {
    return new Promise((resolve) => {
      if (file.size < 1024 * 500) return resolve(file)

      const cvs = document.createElement("canvas")
      const ctx = cvs.getContext("2d")
      if (!ctx) return resolve(file)

      // 加载图片
      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.onload = () => {
        const orginWidth = img.naturalWidth
        const orginHeight = img.naturalHeight
        const staticWidth = 750
        const computedHeight = (orginHeight * staticWidth) / orginWidth
        cvs.width = staticWidth
        cvs.height = computedHeight
        ctx.drawImage(img, 0, 0, staticWidth, computedHeight)
        cvs.toBlob((data) => resolve(data || file))
      }
    })
  }
}
