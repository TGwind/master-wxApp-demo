// pages/index.js
Page({
      /**
       * 页面的初始数据
       */
      data: {
        searchInput: "",  //搜索内容字符串
        // 首页轮播图图片列表
        swiperList: [
          {
            url: "http://114.115.238.56/img/index.jpg"
          }
        ],
        // 首页大标签栏分类
        activeTab: 0,
        // 首页小标签分类
        categoryButtonList01: [
          "全部","赛事答辩","学术讲座","项目汇报"
        ],
        categoryButtonList02: [
          "全部","赛事答辩","学术讲座","项目汇报"
        ],
        categoryButtonList03: [
          "全部","新电商大赛","三创赛","电商大赛"
        ],
        categoryButtonList04: [
          "全部","新电商大赛","三创赛","电商大赛"
        ],
        
        // 首页PPT卡片列表
        PPTCardList01: [
          {
            imgUrl: "http://114.115.238.56/img/PPTcover01.jpg", //图片资源地址
            text: '让渐变色为你的PPT增添视觉效果',  //PPT介绍文本
            tags: ["渐变", "色彩", "基础"],   //PPT标签
            visitNum: 0,    //访问量
          },
          {
            imgUrl: 'http://114.115.238.56/img/PPTcover01.jpg',
            text: '炫酷的PPT布局教学，实用技能',
            tags: ["渐变", "布局", "基础"],
            visitNum: 0,
          },
          {
            imgUrl: 'http://114.115.238.56/img/PPTcover01.jpg',
            text: '炫酷的PPT布局教学，实用技能',
            tags: ["渐变", "布局", "基础"],
            visitNum: 0,
          }
        ],
        PPTCardList02:
        [
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红旅赛道",
            textContent: "红色省赛PPT" ,
            tags: ["红旅","公益","答辩"],
            visitNum: 0
          },
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红色主题",
            textContent: "二十大PPT巡讲" ,
            tags: ["红色","活动","答辩"],
            visitNum: 0
          },
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红色主题",
            textContent: "二十大PPT巡讲" ,
            tags: ["红色","活动","答辩"],
            visitNum: 0
          },
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红色主题",
            textContent: "二十大PPT巡讲" ,
            tags: ["红色","活动","答辩"],
            visitNum: 0
          }
        ],
        PPTCardList03: 
        [
          {
            imgUrl: "/images/nav/game1.png", //图片资源地址
            textHead: "新电商大赛",
            text: 'PPT赛道直播培训',  //PPT介绍文本
            tags: ["美化", "复制", "转化"],   //PPT标签
            visitNum: 0,    //访问量
          },
          {
            imgUrl: "/images/nav/game1.png", //图片资源地址
            textHead: "新电商大赛",
            text: 'PPT赛道直播培训',  //PPT介绍文本
            tags: ["美化", "复制", "转化"],   //PPT标签
            visitNum: 0,    //访问量
          },
        ],
        PPTCardList04:
        [
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红旅赛道",
            textContent: "红色省赛PPT" ,
            tags: ["红旅","公益","答辩"],
            visitNum: 0
          },
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红色主题",
            textContent: "二十大PPT巡讲" ,
            tags: ["红色","活动","答辩"],
            visitNum: 0
          },
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红色主题",
            textContent: "二十大PPT巡讲" ,
            tags: ["红色","活动","答辩"],
            visitNum: 0
          },
          {
            imgUrl: "/images/nav/video-ppt1.png",
            textHead:"红色主题",
            textContent: "二十大PPT巡讲" ,
            tags: ["红色","活动","答辩"],
            visitNum: 0
          }
        ],
      },
        goSearch() {
          wx.navigateTo({
            url: '/pages/search/index'
          })
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
          // wx.hideTabBar()
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide() {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload() {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh() {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom() {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage() {

        }
      })