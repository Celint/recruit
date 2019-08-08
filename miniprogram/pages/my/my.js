// pages/my/my.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const resume = db.collection('resume')

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
    resume: null
  },

  onShow() {
    var that = this
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
        major: this.data.userInfo.major,
        errmess: null
      })
      resume.where({
        _openid: app.globalData.userInfo._openid
      }).get({
        success(res) {
          if (res.data.length != 0) {
            that.setData({
              resume: res.data
            })
          }
        }
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
    app.globalData.userInfo.name = this.data.name
    var that = this
    userInfo.doc(app.globalData.userInfo._id).update({
      data: {
        name: that.data.name
      }
    })
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
    app.globalData.userInfo.sid = this.data.sid
    var that = this
    userInfo.doc(app.globalData.userInfo._id).update({
      data: {
        sid: that.data.sid
      }
    })
  },

  phone(e) {
    var that = this
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
      app.globalData.userInfo.phone = this.data.phone
      userInfo.doc(app.globalData.userInfo._id).update({
        data: {
          phone: that.data.phone
        }
      })
    } else {
      this.setData({
        errmess: null,
        phone: null
      })
      app.globalData.userInfo.phone = this.data.phone
      userInfo.doc(app.globalData.userInfo._id).update({
        data: {
          phone: that.data.phone
        }
      })
    }
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
    app.globalData.userInfo.major = this.data.major
    var that = this
    userInfo.doc(app.globalData.userInfo._id).update({
      data: {
        major: that.data.major
      }
    })
  },

  modifyIt(e) {
    console.log(e)
  },

  deleteIt(e) {
    console.log(e)
  }

})