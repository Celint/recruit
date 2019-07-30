// pages/my/my.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

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
    resume: null
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
      this.setData({
        name: this.data.userInfo.name,
        sid: this.data.userInfo.sid,
        phone: this.data.userInfo.phone,
        major: this.data.userInfo.major
      })
    }
    if (app.globalData.resume != null) {
      this.setData({
        resume: app.globalData.resume
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
        errmess: "手机号格式错误",
        phone: e.detail
      })
    } else if (e.detail.length == 11) {
      this.setData({
        errmess: null,
        phone: e.detail
      })
    } else {
      this.setData({
        errmess: null,
        phone: null
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
    if (this.data.name != null && this.data.phone.length == 11 && this.data.sid != null && this.data.major != null) {
      this.setData({
        save: true
      })
    } else {
      this.setData({
        save: false
      })
    }
  },

  save() {
    var id = app.globalData.userInfo._id
    var that = this
    userInfo.doc(id).update({
      data: {
        name: that.data.name,
        sid: that.data.sid,
        phone: that.data.phone,
        major: that.data.major
      }, success(res) {
        that.setData({
          save: false,
        })
        app.globalData.userInfo.name = that.data.name
        app.globalData.userInfo.sid = that.data.sid
        app.globalData.userInfo.phone = that.data.phone
        app.globalData.userInfo.major = that.data.major
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 500,
        })
      }
    })
  }

})