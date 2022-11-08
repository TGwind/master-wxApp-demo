Page({
  data: {
    searchInput: "",  //搜索内容字符串

  },
  inputChange(event){
    // console.log(event.detail)
    //实现数据同步，数据绑定，搜索字符串与输入框同步
    this.setData({
      searchInput: event.detail
    })

  },
  onLoad: function (options) {
    this.setData({
      list: wx.getStorageSync('searchHis')
    })
  },
  onShow: function () {

  },
  search(e) {
    this.setData({
      inputVal: e.detail
    })
    if (e.detail) {
      let searchHis = wx.getStorageSync('searchHis')
      if (!searchHis) {
        searchHis = [e.detail]
      }
      if (!searchHis.includes(e.detail)) {
        searchHis.push(e.detail)
      }
      wx.setStorageSync('searchHis', searchHis)
      this.setData({
        list: searchHis
      })
    }
    wx.redirectTo({
      url: '/pages/goods/list?name=' + this.data.inputVal,
    })
  },
  onClose(e) {
    const idx = e.currentTarget.dataset.idx
    const searchHis = this.data.list
    searchHis.splice(idx, 1)
    wx.setStorageSync('searchHis', searchHis)
    this.setData({
      list: searchHis
    })
  },
  go(e) {
    const idx = e.currentTarget.dataset.idx
    const keywords = this.data.list[idx]
    wx.redirectTo({
      url: '/pages/goods/list?name=' + keywords,
    })
  },
  searchscan() {
    wx.scanCode({
      scanType: ['barCode', 'qrCode', 'datamatrix', 'pdf417'],
      success: res => {
        wx.redirectTo({
          url: '/pages/goods/list?name=' + res.result,
        })
      }
    })
  }
})