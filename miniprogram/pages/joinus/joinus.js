// pages/joinus/joinus.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picture: null,
    name: null,
    sid: null,
    phone: null,
    major: null,
    hobby: null,
    errmess: null,
    politic: ["未知", "党员", "共青团团员", "群众"],
    idx0: 0,
    resume: null,
    save: false
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
        picture: this.data.userInfo.picture,
        name: this.data.userInfo.name,
        sid: this.data.userInfo.sid,
        phone: this.data.userInfo.phone,
        major: this.data.userInfo.major,
        hobby: this.data.userInfo.hobby
      })
    }
  },

  addPicture() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function(res) {
        const filePath = res.tempFilePath[0]
        var openid = app.globalData.userInfo._openid
        const cloudPath = 'picture/' + openid + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success(res) {
            console.log(res.fileID)
            that.setData({
              picture: res.fileID
            })
          }
        })
      }
    })
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
  },

  bindPicker1Change(e) {
    this.setData({
      idx0: e.detail.value
    })
  },

  hobby(e) {
    this.setData({
      hobby: e.detail
    })
    if (e.detail.length == 0) {
      this.setData({
        hobby: null
      })
    }
  },

  bindTextArea: function (e) {
    console.log(e.detail.value)
    this.setData({
      save: true
    })
  },

  
})