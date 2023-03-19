# Introduction

🍭 Hello, this is a random name generator library for Chinese online literature authors.

🍉 Currently supported name types include: Human, Animal, Clothes, Cheats, Elixir, Organize, Place, Plant, and weapon.

[中文文档](https://github.com/demigodliu/random-chinese-name/blob/main/README.ZH.md)

# Installation

Use npm to install the package, as shown below:

```bash
npm install random-chinese-name --save
```

# Types

Before using the library, we need to know the names of the name types, as shown in the table below:

|Type|Name|Type|Name|Type|Name|
|:-:|:-:|:-:|:-:|:-:|:-:|
|Human|human|Animal|animal|Clothes|clothes|
|Cheats|cheats|Elixir|elixir|Organize|organize|
|Place|place|Plant|plant|Weapon|weapon|

# Import

To use the library in a CommonJS project, import it as follows:

```js
const { <type name> } = require('random-chinese-name');
```

To use the library in a Module project, import it as follows:

```js
import { <type name> } from "random-chinese-name";
```

# Parameters

There are only two common parameters, as shown in the table below:

|Field|Meaning|Range|Default|
|:-|:-|:-|:-:|
| limit | Number of characters in the name | Human [ 2, 4 ], others [ 2, 7 ] | 2 |
| count | Number of names to generate | [ 1, 100 ] | 100 |

For the human type, which is the most special type, with distinctions between single and compound surnames and gender, two additional parameters are added:

|Field|Meaning|Default|
|:-|:-|:-:|
|male|Whether the name is for a male|true|
|single|Whether the surname is a single surname|true|

# Examples

Human names:

```js
/** Male, single surname, two characters, 100 names */ 
human.getName();

/** Female, single surname, two characters, 100 names */ 
human.getName({ male: false });

/** Female, compound surname, three characters, 100 names */ 
human.getName({ male: false, single: false });

/** Female, compound surname, three characters, 100 names */ 
/** Note: when using a compound surname, limit defaults to 3, so limit does not need to be set here */ 
human.getName({ male: false, single: false, limit: 3 });

/** Female, compound surname, four characters, 20 names */ 
human.getName({ male: false, single: false, limit: 4, count: 20 });
```

Other names:

```js
<type name>.getName();
<type name>.getName({ limit: 6 });
<type name>.getName({ limit: 6, count: 50 });
```