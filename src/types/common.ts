/**
 * 取名函数的公共参数接口 
 */ 
export interface CommonParams {
  /** 字数限制 */
  limit?: number

  /** 名称数量 */
  count?: number
}

/**
 * 获取随机名称的参数接口
 */ 
export interface GetNameParams extends Required<CommonParams> {
  /** 前置词库 */
  prefix: string[]

  /** 后置词库 */
  suffix: string[]

  /** 是否前置词库优先获取 */ 
  prefixPriority?: boolean

  /** 结果 */ 
  result?: string[]
}

/** 
 * 获取词库的参数接口
 */ 
export interface GetWordParams {
  /** 词库 */ 
  words: string[]

  /** 是否只取一次 */ 
  once?: boolean

  /** 取字数量 */ 
  limit?: number

  /** 结果 */ 
  result?: string
}