const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onShow() {
    this.setData({
      inDep: app.globalData.inDep
    })
    wx.setNavigationBarTitle({
      title: app.globalData.inDep
    })
  },

})