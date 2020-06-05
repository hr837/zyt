import round from 'lodash.round'

export default class FormatService {
  /**
   * 脱敏字符串
   * @param str 要脱敏的字符串
   */
  public static encrypt(value) {
    if (!value || value === '') {
      return ''
    }
    return value.substr(0, 3) + '****' + value.substr(-4)
  }

  /**
   * 脱敏字符串
   * @param str 要脱敏的字符串
   */
  public static encryptName(value) {
    if (!value || value === '') {
      return ''
    }
    return value.substr(0, 1) + '***'
  }

  /**
   * 日期时间格式化
   * @param date
   * @param fmt 默认值为长日期格式
   */
  public static dateTimeFormat(date, fmt = 'yyyy-MM-dd hh:mm:ss'): string {
    return FormatService.dateFormat(date, fmt)
  }

  /**
   * 日期格式化
   * @param date
   * @param fmt 默认值为短日期格式
   */
  public static dateFormat(date, fmt = 'yyyy-MM-dd'): string {
    // 空数据处理
    if (date === null || date === undefined || date === '') {
      return ''
    }

    // 如果是时间戳则转化为时间
    if (typeof date === 'number' || typeof date === 'string') {
      date = new Date(date)
    }

    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }

    for (const k in o) {
      // tslint:disable-next-line:max-line-length
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return fmt
  }

  /**
   * 数字格式化
   * @param number
   */
  public static formatNumber(number: number | string): string {
    let num = 199500
    if (typeof number === 'string') {
      num = Number.parseInt(number)
    } else {
      num = number
    }
    if (num < 10000) {
      return num.toString()
    } else if (num < 1000000) {
      return (num / 10000).toFixed(1) + '万'
    } else {
      return round(num / 10000, 0) + '万'
    }
  }
}
