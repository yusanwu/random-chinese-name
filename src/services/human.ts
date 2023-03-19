import Core from "./core";
import type { HumanGetNameParams } from "../types/human";
import { SingleSurname, CompoundSurname, FemaleName, MaleName } from "../configs/human";

class Human extends Core {
  /** 默认参数 */
  private defaultParams: Required<HumanGetNameParams> = {
    single: true, male: true, limit: 2, count: 10,
  };
  /**
   * 获取随机名称
   * 
   * @param   { HumanGetNameParams }  params         参数对象
   * @param   { boolean            }  params.single  是否默认使用单姓
   * @param   { number             }  params.male    是否默认男性取名
   * @param   { number             }  params.limit   随机名称的总字数 => 取值区间：[2, 4]
   * @param   { number             }  params.count   随机名称的总数量 => 取值区间：[1, 100]
   * @return  { Array<string>      }                 名称的字符串数组
   */
  getName(params?: HumanGetNameParams): string[] {
    let { single, male, limit, count }: HumanGetNameParams = {
      ...this.defaultParams, ...params
    }
    const validation = this._checkParams([
      [single, 'single', 'boolean'],
      [male, 'male', 'boolean'],
      [limit, 'limit', 'number'],
      [count, 'count', 'number'],
    ]);
    if (typeof validation !== 'boolean') return validation;
    
    limit = limit < 2 ? 2 : limit > 4 ? 4 : limit;
    limit = !single && limit <= 2 ? 3 : limit;
    single = limit === 4 ? false : single;
    count = count < 1 ? 1 : count > 100 ? 100 : count;
    
    const prefix = [CompoundSurname, SingleSurname][+single];
    const suffix = [FemaleName, MaleName][+male];
    const prefixPriority = true;
    return this._getName({ prefix, suffix, limit, count, prefixPriority });
  }
}

export const human = new Human();