# 介绍

🍭 哈喽，这是一个为中国网文作家提供的随机取名工具库

🍉 当前支持的取名类型包含：人物，动物，衣物，武诀，丹药，门派，地点，植物，武器。

# 安装

使用 npm 安装示例如下：

```bash
npm install random-chinese-name --save
```

# 类型

在使用之前，我们需要先了解取名类型的名称，如下表所示：

|类型|名称|类型|名称|类型|名称|
|:-:|:-:|:-:|:-:|:-:|:-:|
|人物|human|动物|animal|衣物|clothes|
|武诀|cheats|丹药|elixir|门派|organize|
|地点|place|植物|plant|武器|weapon|

# 引入

若需在 CommonJS 规范项目中使用，引入方式如下：

```js
const { <类型名称> } = require('random-chinese-name');
```

若需在 Module 规范项目中使用，引入方式如下：

```js
import { <类型名称> } from "random-chinese-name";
```

# 参数

通用参数总共只有两个，如下表所示：

|字段|含义|范围|默认|
|:-|:-|:-|:-:|
| limit | 名称的字数 | 人物 [ 2, 4 ]，其他 [ 2, 7 ] | 2 |
| count | 取名的个数 | [ 1, 100 ] | 100 |

在所支持的类型中，人物取名较为特殊，有单复姓，性别的区分，所以参数增加了两个：

|字段|含义|默认|
|:-|:-|:-:|
|male|是否为男性取名|true|
|single|是否为单姓取名|true|

# 示例

人物取名：

```js
/** 男，单姓，两字名称，100 个 */ 
human.getName();

/** 女，单姓，两字名称，100 个 */ 
human.getName({ male: false });

/** 女，复姓，三字名称，100 个 */ 
human.getName({ male: false, single: false });

/** 女，复姓，三字名称，100 个 */ 
/** 注意：当为复姓时，limit 默认为 3，所以此处不设置 limit 也可以 */ 
human.getName({ male: false, single: false, limit: 3 });

/** 女，复姓，四字名称，20 个 */ 
human.getName({ male: false, single: false, limit: 4, count: 20 });
```

其他取名：

```js
<类型取名>.getName();
<类型取名>.getName({ limit: 6 });
<类型取名>.getName({ limit: 6, count: 50 });
```