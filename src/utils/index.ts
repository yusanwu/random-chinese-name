import * as animal from "../configs/animal";
import * as cheats from "../configs/cheats";
import * as clothes from "../configs/clothes";
import * as elixir from "../configs/elixir";
import * as human from "../configs/human";
import * as organize from "../configs/organize";
import * as place from "../configs/place";
import * as plant from "../configs/plant";
import * as weapon from "../configs/weapon";

/**
 * 新词筛选
 * 
 * @param  { string[] } base 基础字库 
 * @param  { string[] } wait 待筛字库 
 * @return { string[] }      新字字库
 */
function wordFilter(base: string[], wait: string[]): void {
  console.log(`基础字库长度：${base.length}`);
  console.log(`待筛字库长度：${wait.length}`);

  const res: string[] = [];
  for (let i = 0; i < wait.length; i++) {
    const word = wait[i];
    if (base.indexOf(word) === -1 && res.indexOf(word) === -1) {
      res.push(word);
    }
  }
  console.log(`新字字库：${JSON.stringify(res)}`);
}

wordFilter(['1'], ['2'])