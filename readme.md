# shiyue-boot 使用教程

## 基于epii-boot npm包引擎，开启一套http服务
`是shiyue的一种服务模式，只创建一个App；shiyue可提供创建多个App，即开启多套http服务`

### 开放方法
- 使用以下方法可以不考虑App
- 不能链式调用

1、Use
```js
 // 加载中间件，中间件可以在每次web请求时做相应的业务处理
 Use(handler: ContextHandler): void;

```
2、Init
```js
 //实现初始化任务
 Init(handler: InitHandler): void;

```
3、Module
```js
 //加载模块
 /**
  * route:设置模块名称
  * module:设置此模块的的路径 | 引入的模块类
  */
 Module(route: string, module: String | Controller | Function | IController): void;

```
4、Route
```js
 //模块api路径
 Route(route: string, handler: ContextHandler): void;

```
5、ResponseAdvice
```js
 //服务返回数据格式处理函数
 ResponseAdvice(handler: ResponseAdvice): void;

```
6、Port
```js
 //服务端口
 //优先级比listen低，同时设置的话listen覆盖port端口
 Port(port: number): void;

```

