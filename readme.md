# shiyue-boot 使用教程

## 基于epii-boot npm包引擎，开启一套http服务
`是shiyue的一种服务模式，只创建一个App；shiyue可提供创建多个App，即开启多套http服务`

## 如何使用


> 1、终端运行 `npm install shiyue-boot` 安装想要 npm 包<br/>
> 2、终端运行  `tsc --init` 生成 tsconfig.json 文件<br/>
> 3、终端运行  `npm init -y ` 生成 package.json 文件<br/>
> 4、终端运行 `npm install @types/node -D` 安装 node 基本模块<br/>
> 5、新建 src 文件夹 在文件夹里面新建 epii.boot.ts 文件，shiyue-boot 需要识别 `epii.boot.ts` 文件  所以必须建这个文件   就是项目的入口文件

### **shiyue-boot.ts 会自动创建一个 App 不需要项目来单独创建，项目只需要设置一些方法即可**

### 写一个基本的接口

epii.boot.ts 文件

```javascript
import {Route} from "shiyue-boot";

export default function(){
    Route("/login",function(ctx){
        ctx.success("登录成功")
    })
}
```

### 项目启动

在 package.json 里面设置

```json
"scripts": {
  "dev":"epii-boot-run-ts",
},
```

直接运行 npm run dev 即可启动项目
还可以直接运行 npx epii-boot-run-ts
浏览器访问
[http://127.0.0.1:8080/login](http://127.0.0.1:8080/login)
返回

```json
{"success":true,"msg":"成功","data":"登录成功","code":1}
```

这样一个基本的接口就写好了

### 开放的方法

1. Use
2. Port
3. Route
4. Module


- 使用以上方法可以不考虑App
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

