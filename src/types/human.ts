import type { CommonParams } from "./common";

/**
 * 人类取名的参数接口
 */
export interface HumanGetNameParams extends Partial<CommonParams> {
  /** 是否默认使用单姓 */
  single?: boolean

  /** 是否默认男性取名 */
  male?: boolean
}