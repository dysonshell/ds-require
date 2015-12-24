# @ds/nrequire

用于 hack node.js 的 require，让

```
require(`${DSC}/some-module/a/b/c.js`);
```

能够解析到 `${config.dsAppRoot}/${config.dsComponentPrefix}/some-module/a/b/c.js`

## usage

```js
require('ds-require');
```

在代码一开始添加这一行即可，需要配置至少存在 `dsAppRoot` 和 `dsComponentPrefix`，后面的代码 `require('dsc/xxx/yyy.js')` 就会查找 `${config.dsAppRoot}/${config.dsComponentPrefix}/xxx/yyy.js` 文件。其中 require 路径中的前缀 `dsc` 即配置中的 `dsComponentPrefix`，默认为 `"dsc"`。

实际上这样的功能也可以通过将 `${config.dsAppRoot}/${config.dsComponentPrefix}` 目录做一个[软链](https://en.wikipedia.org/wiki/Symbolic_link)在 `node_modules/` 目录之下，但那样做至少有不好之处：

1. 软链在 windows 系统下比较麻烦；
2. `npm shrinkwrap` 命令不能通过，会提示有 extraneous 的模块；
3. 如果需要修改查找路径，需要重设软链，不如直接修改配置来得方便。

以上

## license
MIT
