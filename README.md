# 这是一个记录我学习前端、算法等基础的仓库

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](https://github.com/feross/standard)

[![Coverage Status](https://coveralls.io/repos/github/Molunerfinn/FE-Learning/badge.svg?branch=master)](https://coveralls.io/github/Molunerfinn/FE-Learning?branch=master)

## 目录说明

### algorithm

算法练习目录。用typescript来写，练习算法的同时，同时练习typescript、前端测试（mocha）。

### test

测试目录，用于执行代码测试。

### es6tutorial

这个目录下的两个文件：`ECMAScript 6入门.epub`是阮一峰老师的[ECMAScript 6入门](http://es6.ruanyifeng.com/)的离线电子版。已经经过相应的修改。

`SUMMARY.md`则是对应阮一峰老师[es6tutorial](https://github.com/ruanyf/es6tutorial)的gitbook的SUMMARY文件，将阮一峰老师的[es6tutorial](https://github.com/ruanyf/es6tutorial)克隆到本地后，将`SUMMARY.md`文件放入该目录，然后执行`gitbook build`、`gitbook epub`等命令就能生成和输出相应的电子文档了。（注意：前提是你已经安装了`gitbook`和`ebook-convert`）。  

如果在执行`gitbook build`、`gitbook epub`等命令报错的话，注意看报错信息，如果是指向`string.md`这个文件的错误，很可能只是个标签问题。详情请看：  
`https://github.com/ruanyf/es6tutorial/pull/206`
