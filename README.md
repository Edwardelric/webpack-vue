# webpack-vue 项目:
* npm install -g vue-cli
* vue init webpack my-project
* cd my-project
* npm install/yarn 
* npm run dev

## 项目内容:
* flex 布局
* 阿里阿里图库创建小图标
* vue-loader
* vue-resource
* mock 数据

### 遇到的问题:
  node 端口占用后会报错：throw er; // Unhandled 'error' event：
  * lsof -i tcp:port;
  * kill -9 :port;
  * npm run dev.
