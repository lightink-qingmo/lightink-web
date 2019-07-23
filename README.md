## Lightink-web

#### 目录结构

```
├─api	    接口
├─components	    项目的共用组件
├─config      项目的配置文件
├─model	     Model层（看业务成都）
├─pages      各个页面存放的文件夹
├─static	    静态资源文件夹
├─styles	    样式文件夹
│      base.less
├─logs	 日志
│      request.js
│      withRematch.js
├─ecosystem.config	pm2配置文件夹
├─next.config	 next配置文件夹
├─package.json								
├─server.js	 node服务启动文件
└─README
```

#### 已经完成配置
-- axios
-- cacheable
-- express
-- less
#### 环境安装
```
npm install
```
#### 项目启动
```
npm run start
```
#### 项目发布以Pm2部署

并且通过端口号以及环境变量来区分不同的项目，__注意，使用pm2启动node服务，尽量保证多个进程,单个进程服务cpu容易爆__
```
npm run startpm2
```
