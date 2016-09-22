####Common

　　这个目录用来存放所有node端的通用方法，或者转换为es6/es7语法，最后打完包是AMD模块，可以通过node直接引入


包含以下几个模块
>jsdoc  `用来生成类库文档`
>
gulp  `打包代码` (基于index.js配置文件打包模块)
>
AVA `单元测试框架`


<span style='color:yellow'>**最终输出**单一js文件</span>

####命令
执行某个文件  ``$ babel-node xxx``

***
####调试步骤
　　因为采用了es6/es7的代码，所以node端，必须加入babel-cli的解析工具，将es6/es7的
代码动态转换为es5的代码，再执行nodejs代码

1.  安装Visual Studio Code
2.
