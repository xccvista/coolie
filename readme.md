# Coolie@0.7.7 苦力 [![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url]


苦力——一个纯净、易用的模块加载器。


入门及文档：<http://frontenddev.org/column/introduce-coolie/>



# 接口
## `coolie.config.base`
模块的参考路径。该值参考于`coolie.js`。


## `coolie.config.version`
- `String` 全部模块的版本号，不建议手动写。
- `Object` 模块细粒度版本号，构建之后会自动生成。


## `coolie.config.host`
模块加载所在的 host（如`http://s.ydr.me`），默认为模块加载器脚本所在的 host。


## `coolie.use`
启用模块加载器
```
coolie.config({
	base: './'
}).use();
```

## `coolie.callback`
模块全部加载完毕后回调。常用于测试项目。



[travis-img]: https://travis-ci.org/cloudcome/coolie.svg?branch=master
[travis-url]: https://travis-ci.org/cloudcome/coolie
[coveralls-img]: https://coveralls.io/repos/cloudcome/coolie/badge.svg
[coveralls-url]: https://coveralls.io/r/cloudcome/coolie