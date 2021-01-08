# nuxtjs-temp

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


Nuxt.js 是一个基于 Vue.js 的服务端渲染应用框架。 你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 Nuxt.js。 

它解决最大的2个问题：**1. 首屏问题，2. SEO问题**

#### 优点：
1. Nuxt.js 预设了利用Vue.js开发服务端渲染的应用所需要的各种配置。把 webpack 、vue loader，vuex, router 系列配置整合到了一起，真是非常大大降低了配置成本
2. 前端耗时少，首屏加载速度快。因为后端拼接完了html，浏览器只需要直接渲染出来。
2. 有利于SEO。因为在后端有完整的html页面，所以爬虫更容易爬取获得信息，更有利于seo。
3. 无需占用客户端资源。即解析模板的工作完全交由后端来做，客户端只要解析标准的html页面即可，这样对于客户端的资源占用更少，尤其是移动端，也可以更省电。
4. 静态资源可以做CDN缓存/加速。

#### 缺点：
1. 占用服务器端资源。
即服务器端完成html模板的解析，如果请求较多，会对服务器造成一定的访问压力。而如果使用前端渲染，就是把这些解析的压力分摊了前端，而这里确实完全交给了一个服务器。
