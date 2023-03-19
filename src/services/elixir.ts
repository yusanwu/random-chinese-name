import Core from "./core";
import type { CommonParams } from "../types/common";
import { adjective as prefix, type as suffix } from "../configs/elixir";

class Elixir extends Core {
  /** 默认参数 */
  private defaultParams: Required<CommonParams> = { limit: 2, count: 10 };
  /**
   * 获取随机名称
   * 
   * @param   { CommonParams  }  params         参数对象
   * @param   { number        }  params.limit   随机名称的总字数 => 取值区间：[2, 7]
   * @param   { number        }  params.count   随机名称的总数量 => 取值区间：[1, 100]
   * @return  { Array<string> }                 名称的字符串数组
   */
  getName(params?: CommonParams): string[] {
    let { limit, count }: CommonParams = {
      ...this.defaultParams, ...params
    }
    const validation = this._checkParams([
      [limit, 'limit', 'number'],
      [count, 'count', 'number'],
    ]);
    if (typeof validation !== 'boolean') return validation;

    limit = limit < 2 ? 2 : limit > 7 ? 7 : limit;
    count = count < 1 ? 1 : count > 100 ? 100 : count;
    return this._getName({ prefix, suffix, limit, count });
  }
}

export const elixir = new Elixir();