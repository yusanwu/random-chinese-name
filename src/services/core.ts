import type { GetNameParams, GetWordParams } from "../types/common";

export default class Core {
  /**
   * 返回一个指定范围内的随机数，包含边界
   * 
   * @param   { number } maximumIndex 最大可取的数值
   * @example getRandomIndex(1) => [0, 1]
   * @return  { number } 范围内的一个随机数
   */
  getRandomIndex(maximumIndex: number): number {
    return Math.floor(Math.random() * (maximumIndex + 1));
  }

  /**
   * 检查参数是否合法 
   * 
   * @param   { [any, string, string][] } params 二阶数组
   * @return  { boolean | string[] }
   */ 
  _checkParams(params: [any, string, string][]): string[] | boolean {
    for (let param of params) {
      const [v, k, t] = param;
      if (typeof v !== t) return [`Error: ${k} 参数类型错误，应该传入 ${t} 类型`];
    }
    return true;
  }
  
  /**
   * 获取随机名称
   * 
   * @param  { GetNameParams } params                参数对象
   * @param  { Array<string> } params.prefix         前置词库
   * @param  { Array<string> } params.suffix         后置词库
   * @param  { number        } params.limit          随机名称的总字数
   * @param  { number        } params.count          随机名称的总数量
   * @param  { boolean       } params.prefixPriority 是否前置词库优先 => 默认为否
   * @param  { Array<string> } params.result         随机名称数组
   * @return { Array<string> }                       随机名称数组
   */ 
  _getName(params: GetNameParams): string[] {
    const {
      prefix, suffix, limit, count, prefixPriority = false, result = []
    } = params;
    if (result.length === count) return result;
    const firstWord = this.getWord({
      words: [suffix, prefix][+prefixPriority],
      once: true
    });
    const secondWord = this.getWord({
      words: [prefix, suffix][+prefixPriority],
      once: false,
      limit: limit - firstWord.length
    });
    result.push(
      prefixPriority ? firstWord + secondWord : secondWord + firstWord
    );
    return this._getName({
      prefix, suffix, limit, count, prefixPriority, result
    });
  }

  /**
   * 词库取字
   * 
   * @param  { GetWordParams } params        参数对象
   * @param  { Array<string> } params.prefix 词库数组
   * @param  { boolean       } params.once   是否只取一次
   * @param  { number        } params.count  取字数量
   * @param  { string        } params.result 结果
   * @return { string        }               结果
   */ 
  getWord(params: GetWordParams): string {
    let { words, once = false, limit, result = "" } = params;
    if (result.length === limit) return result;
    const word = words[this.getRandomIndex(words.length - 1)];
    return once
      ? word
      : this.getWord({ words, once, limit, result: result + word });
  }
}
