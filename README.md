# vue2.0 项目

## 技术栈:
  webpack + vue-cli + vuex + axios + ES6/7 + scss + muse-ui + css3

## 使用的外部组件:
  * better-scroll  横向的
  * vue-scroller   上拉下拉加载vue 组件

## 运行环境
  * node: v6.2.2
  * npm: v3.9.5
  * Mac: MacBook Pro 版本10.12.4
  * 阿里 RAP(mock数据)
  * 强烈建议使用 mac 开发, 不然如 node-sass 组件库安装会失败

## 项目启动:
  * npm clone 项目地址
  * npm install
  * npm run dev(本地调试)
  * npm run build(代码打包)
  * 上线部署注意事项:
    * test 环境测试的时候 主要 运行 npm run dev 不需要修改代码
    * product 生产环境 需要将 store 文件下 index.js 40行修改为 http://api.zsmy.cn

## 目标功能
  - [x] 免费问诊 + 上传图片    (ios 和 android 开发)
  - [x] 新增、编辑、删除问诊人  (ios 和 android 开发)
  - [x] 就诊热信息选择         (ios 和 android 开发)
  - [x] 基本信息和个人信息填写  (ios 和 android 开发)
  - [x] 健康建议导入数据并展示  (ios 和 android 开发)
  - [x] 资讯列表 (page/topics.vue)
  - [x] 资讯详情 (page/topicdetail.vue)
  - [x] 找药 (page/findmedicine.vue)
  - [x] 收藏的药品 (page/medicinefavorite.vue)
  - [x] 搜索的药品 (page/medicinelist.vue)
  - [x] 药品详情 (page/medicinedetail.vue)
  - [x] 药品下单 (page/payment.vue)
  - [x] 地址列表 (page/address.vue)
  - [x] 年月日仿ios下拉效果
  - [x] 添加、编辑地址 (page/addaddress.vue | page/updateaddress.vue)

## 技术要点
  * RAP自动生成动态的mock数据
  * keep-alive 防止路由切换ajax的再次请求
  * 封装axios,判断是否有权限,有权限就进入正常请求,无权限跳登录页
  * 请求报错信息统一存放在 axios.interceptors.response 的 err 回调里面
  * route beforeEach 拦截是否有权限访问
  * vue的生命周期 (data => created => mounted => activated => deactivated)
  * vuex 和 sessionStorage 共同关联保存登录用户信息
  * 统一使用vuex 状态处理toast消息提示
  * 统一使用vuex 状态处理是否loading
  * better-scroll 新增滑动效果
  * Vue filter 自定义过滤
  * 省市区三级联动选择思路解析:
    * 获取请求的三级联动数据
    * 将数据转换为
      ``` province
      [
        {
          id: 1,
          pid: 1,
          level: 1,
          name: '北京',
          city: [
             {
               id: 1
               pid: 1,
               level: 2,
               name: '北京',
               country: [
                  {
                    id: 1,
                    pid: 1,
                    level: 3,
                    name: '东城区'
                  },
                  {
                    id: 2,
                    pid: 1,
                    level: 3,
                    name: '西城区'
                  }

               ]
             }
          ]
        }
     ]
     ```

## 解惑
  * vue-resource 的摒弃是因为官网不再支持并推荐使用axios
  * axios能更好的统一设置request token 和 response的错误提示

## 遇到的问题
  * 资讯列表切换调用同一个component发送请求获取数据的刷新,加载更多问题;
  * vue-router /:id 参数形式的路由改变不会多次触发component的mounted,因为调用的是同一个;
  * flex align-items:stretch 实现不定高度等高效果;
  * overflow-y : auto; -webkit-overflow-scrolling:touch; 可以替代better-scroll方法
  * muse-ui 里picker组件的数据必须要现有数据才能展现,可以通过加载自定义component包含picker解决
  * muse-ui icon 使用外部需要value=":icon xxx" 的形式书写

## 项目结构

  ```
  .
  ├── build                                       // webpack配置文件
  ├── config                                      // 项目打包路径
  ├── dist                                        // 上线项目文件，放在服务器即可正常访问
  ├── src                                         // 源码目录
  │   ├── components                              // 组件
  │   │   ├── common                              // 公共组件
  │   │   │   ├── bottomNav.vue                   // 首页底部4个导航组件
  │   │   │   ├── headerTools.vue                 // 首页搜索+扫一扫+消息提示组件
  │   │   │   ├── loading.vue                     // loading组件
  │   │   │   ├── menu.vue                        // 首页中间小栏目菜单组件
  │   │   │   ├── swiper.vue                      // 轮播图组件
  │   │   │   ├── toast.vue                       // 消息提示组件
  │   │   │   └── topNav.vue                      // 内部页面公用返回和title组件
  │   │   └── content.vue                         // 指令(暂无开发内容)
  │   ├── direction                               // 基本配置
  │   │   ├── star.js                             // 评价星数指令    (未使用)
  │   ├── page
  │   │   ├── address
  │   │   │   ├── address.vue                     // 地址管理
  │   │   │   ├── addaddress.vue                  // 添加地址
  │   │   │   ├── updateaddress.vue               // 更新地址
  │   │   │   ├── addresssheet.vue                // 三级联动仿ios component
  │   │   ├── consulter                                            (未使用)
  │   │   │   ├── addconsulter.vue                // 添加问诊人
  │   │   │   └── consulter.vue                   // 问诊人管理
  │   │   ├── deal                                                 (未使用)
  │   │   │   └── deal.vue                        // 订单
  │   │   ├── doctor                                               (未使用)
  │   │   │   └── doctor.vue                      // 医师介绍
  │   │   ├── guide
  │   │   │   └── guide.vue                       // 进入app的引导页 (未使用)
  │   │   ├── home
  │   │   │   └── home.vue                        // 首页
  │   │   ├── info                                                 (未使用)
  │   │   │   └── info.vue                        // 个人信息介绍
  │   │   ├── login
  │   │   │   └── login.vue                       // 登录
  │   │   ├── products                                             (未使用)
  │   │   │   └── products.vue                    // 商品详情页
  │   │   ├── quickconsult                                         (未使用)
  │   │   │   └── quickconsult.vue                // 快速问诊
  │   │   ├── register                                             (未使用)
  │   │   │   └── register.vue                    // 注册
  │   │   ├── suggest
  │   │   │   └── suggest.vue                     // 建议
  │   │   ├── topics
  │   │   │   ├── topicdetail.vue                 // 健康资讯详情
  │   │   │   ├── topics.vue                      // 健康资讯
  │   │   │   └── topicslist.vue                  // 健康资讯分类
  │   ├── router
  │   │   └── router.js                           // 路由配置
  │   ├── static
  │   │   ├── fonts                               // 字体
  │   │   ├── images
  │   │   │   ├── common                          // 公用图片
  │   │   │   └── guide                           // 引导页图片
  │   │   ├── styles
  │   │   │   ├── content                         // 内容样式
  │   │   │   ├── footer
  │   │   │   ├── header
  │   │   │   ├── helper
  │   │   │   │   └── _mixin.scss                 // mixin
  │   │   │   ├── iconfont.scss
  │   │   │   ├── reset
  │   │   │   │   └── _mixin.scss                 // mixin
  │   │   │   └── common.scss                     // 公用样式
  │   ├── store                                   // vuex 文件
  │   │   ├── modules                             // module
  │   │   │   │   ├── bottomnav.js                // 底部 nav module
  │   │   │   │   ├── menu.js                     // home 菜单项 module
  │   │   │   │   ├── quickconsult.js             // (未使用)
  │   │   │   │   ├── toast.js                    // toast 提示语module
  │   │   │   │   └── user.js                     // 存储user的信息module
  │   │   └── index.js
  │   ├── App.vue                                 // 入口vue
  │   └── main.js                                 // 入口main.js
  └── index.html                                  // 入口index文件
  .
  ```
