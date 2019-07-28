// pages/my/my.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    sid: null,
    phone: null,
    major: null,
    errmess: null,
    save: false,
    resume: false
  },

  onShow() {
    if (app.globalData.userInfo == null) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    } else {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    if (app.globalData.resume != null) {
      this.setData({
        name: app.globalData.resume.name,
        sid: app.globalData.resume.sid,
        phone: app.globalData.resume.phone,
        major: app.globalData.resume.major
      })
    }
  },

  name(e) {
    this.setData({
      name: e.detail
    })
    if (e.detail.length == 0) {
      this.setData({
        name: null
      })
    }
    this.saveIt()
  },

  sid(e) {
    this.setData({
      sid: e.detail
    })
    if (e.detail.length == 0) {
      this.setData({
        sid: null
      })
    }
    this.saveIt()
  },

  phone(e) {
    if (e.detail.length > 0 && e.detail.length < 11) {
      this.setData({
        errmess: "手机号格式错误"
      })
    } else if (e.detail.length == 11) {
      this.setData({
        errmess: null,
        phone: e.detail
      })
    } else {
      this.setData({
        errmess: null
      })
    }
    this.saveIt()
  },

  major(e) {
    this.setData({
      major: e.detail
    })
    if (e.detail.length == 0) {
      this.setData({
        major: null
      })
    }
    this.saveIt()
  },

  saveIt() {
    if (this.data.name != null && this.data.phone != null && this.data.sid != null && this.data.major != null) {
      this.setData({
        save: true
      })
    } else {
      this.setData({
        save: false
      })
    }
  },

})