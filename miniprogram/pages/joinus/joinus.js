// pages/joinus/joinus.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onShow() {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo == null) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    }
  }
  
})