// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      url: "/images/nav/game-head-img.jpg"
    }],
    //显示的tab页面的索引
    activeTab: 0,
    categoryButtonList01: [
      "全部", "院级赛事", "校级赛事", "省级赛事",
    ],
    categoryButtonList02: [
      "全部", "策划书", "现场答辩", "省级赛事",
    ],
    categoryButtonList03: [
      "全部", "校级比赛", "省级比赛", "国家赛事",
    ],
    PPTCardList01:[
      {
        imgUrl: "http://114.115.238.56/img/posters.jfif",
        text: "第一届新电商大赛",
        visitNum: 0
      },
      {
        imgUrl: "http://114.115.238.56/img/posters.jfif",
        text: "第一届新电商大赛",
        visitNum: 0
      },
      {
        imgUrl: "http://114.115.238.56/img/posters.jfif",
        text: "第一届新电商大赛",
        visitNum: 0
      },
      {
        imgUrl: "http://114.115.238.56/img/posters.jfif",
        text: "第一届新电商大赛",
        visitNum: 0
      },
    ],
    PPTCardList02: [
      {
        imgUrl: "http://114.115.238.56/img/gameskill01.jpg", //图片资源地址
        text: '让渐变色为你的PPT增添视觉效果',  //PPT介绍文本
        tags: ["渐变", "色彩", "基础"],   //PPT标签
        visitNum: 0,    //访问量
      },
      {
        imgUrl: 'http://114.115.238.56/img/gameskill02.jpg',
        text: '炫酷的PPT布局教学，实用技能',
        tags: ["渐变", "布局", "基础"],
        visitNum: 0,
      },
      {
        imgUrl: 'http://114.115.238.56/img/gameskill03.jpg',
        text: '炫酷的PPT布局教学，实用技能',
        tags: ["渐变", "布局", "基础"],
        visitNum: 0,
      }
    ],
    PPTCardList03:[
      {
        imgUrl: "http://114.115.238.56/img/gamemodule01.jpg",
        text: "第一届新电商大赛",
        visitNum: 0
      },
      {
        imgUrl: "http://114.115.238.56/img/gamemodule02.jpg",
        text: "第一届新电商大赛",
        visitNum: 0
      },

    ],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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