//index.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

Page({
  data: {

  },

  onLoad: function() {
    var openid
    wx.cloud.callFunction({
      name: "login",
      success(res) {
        openid = res.result.openid
        userInfo.where({
          _openid: openid
        }).get({
          success(res) {
            if (res.data.length != 0) {
              app.globalData.userInfo = res.data[0]
            }
          }
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  goDepartment() {
    wx.navigateTo({
      url: '/pages/department/department'
    })
  },

  joinus() {
    app.globalData.department = '0'
    app.globalData.innerDep = ''
    app.globalData.status = 0
    wx.navigateTo({
      url: '/pages/joinus/joinus'
    })
  },

  onShareAppMessage(){
    
  },

})