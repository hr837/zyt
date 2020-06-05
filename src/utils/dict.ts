const DictSource = require("../../public/json/dict.json")
import { DictType } from "@/config/types/business.type"

type dictKey = keyof typeof DictSource

/**
 * 数据字典服务
 */
export class DictService {
  /**
   * 格式化数据字典，返回字段的文字说明
   * @param key 字典key
   * @param value 数据值
   */
  public static format(key: dictKey, value: string) {
    const items: Array<DictType> = DictSource[key]
    const item = items.find((x) => x.value === value)
    if (!item) return value
    return item.text
  }

  /**
   * 获取数据字典
   * @param key 字典key
   */
  public static getDict(key: dictKey): Array<DictType> {
    return DictSource[key]
  }
}
