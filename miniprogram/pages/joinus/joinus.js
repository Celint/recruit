// pages/joinus/joinus.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

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
    var that = this
    if (app.globalData.userInfo == null) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    } else {
      userInfo.doc(app.globalData.userInfo._id).get({
        success: res => {
          app.globalData.userInfo = res.data
          that.setData({
            userInfo: res.data
          })
          that.setData({
            picture: that.data.userInfo.picture,
            name: that.data.userInfo.name,
            sid: that.data.userInfo.sid,
            phone: that.data.userInfo.phone,
            major: that.data.userInfo.major,
            hobby: that.data.userInfo.hobby,
            errmess: null
          })
          switch (that.data.userInfo.politicCountenance) {
            case "党员": {
              that.setData({
                idx0: 1
              })
              break
            }
            case "共青团员": {
              that.setData({
                idx0: 2
              })
              break
            }
            case "群众": {
              that.setData({
                idx0: 3
              })
              break
            }
            default: 
              break
          }
        }
      })
    }
  },

  addPicture() {
    var that = this
    wx.chooseImage({
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: chooseResult => {
        const filePath = chooseResult.tempFilePaths[0]
        var mytime = new Date().valueOf()
        var id = app.globalData.userInfo._id
        const cloudPath = 'pictures/' + mytime + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success(res) {
            that.setData({
              picture: res.fileID
            })
            app.globalData.userInfo.picture = res.fileID
            userInfo.doc(id).update({
              data: {
                picture: res.fileID
              }
            })
          }
        })
      }
    })
  },

  reAddPicture() {
    wx.cloud.deleteFile({
      fileList: [this.data.picture]
    })
    var that = this
    wx.chooseImage({
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: chooseResult => {
        const filePath = chooseResult.tempFilePaths[0]
        var mytime = new Date().valueOf();
        var id = app.globalData.userInfo._id
        const cloudPath = 'pictures/' + mytime + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success(res) {
            that.setData({
              picture: res.fileID
            })
            app.globalData.userInfo.picture = res.fileID
            userInfo.doc(id).update({
              data: {
                picture: res.fileID
              }
            })
          }
        })
      }
    })
  },

  removePicture() {
    var that = this
    wx.showModal({
      title: '删除一寸相片',
      content: '确定删除吗？',
      success: function(res) {
        if(res.confirm) {
          wx.cloud.deleteFile({
            fileList: [that.data.picture]
          })
          that.setData({
            picture: null
          })
          userInfo.doc(app.globalData.userInfo._id).update({
            data: {
              picture: null
            },success: re => {
              app.globalData.userInfo.picture = null
            }
          })
        } else if (res.cancel) {

        }
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

  bindPicker1Change(e) {
    this.setData({
      idx0: e.detail.value
    })
    if (e.detail.value == 1) {
      app.globalData.userInfo.politicCountenance = "党员"
      var that = this
      userInfo.doc(app.globalData.userInfo._id).update({
        data: {
          politicCountenance: "党员"
        }
      })
    } else if (e.detail.value == 2) {
      app.globalData.userInfo.politicCountenance = "共青团员"
      var that = this
      userInfo.doc(app.globalData.userInfo._id).update({
        data: {
          politicCountenance: "共青团员"
        }
      })
    } else if (e.detail.value == 3) {
      app.globalData.userInfo.politicCountenance = "群众"
      var that = this
      userInfo.doc(app.globalData.userInfo._id).update({
        data: {
          politicCountenance: "群众"
        }
      })
    }
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
    app.globalData.userInfo.hobby = this.data.hobby
    var that = this
    userInfo.doc(app.globalData.userInfo._id).update({
      data: {
        hobby: that.data.hobby
      }
    })
  },

  bindTextArea: function (e) {
    console.log(e.detail.value)
    this.setData({
      save: true
    })
  },

  
})