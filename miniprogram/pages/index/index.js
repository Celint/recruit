//index.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

Page({
  data: {
    show: true,
    parts: [{
      name: "创业网",
      icon: "../../images/cclogo.png"
    }, {
      name: "办公室",
      icon: "../../images/5815875139695_610.jpg"
    }, {
      name: "SYIB",
      icon: "../../images/syib.png"
    }, {
      name: "还有一个部门是什么？",
      icon: "../../images/3966c198255443eaa3258f2d6b402bc5.jpeg"
    }]
  },

  onLoad: function() {
    // console.log("你好")
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
      }, fail(err) {
        console.log(err)
      }
    })
  },

  goDepartment(e){
    app.globalData.deindex = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/department/department'
    })
  },

  joinus() {
    wx.navigateTo({
      url: '/pages/joinus/joinus'
    })
  },

  openup() {
    this.setData({
      show: false
    })
  },

  opendown() {
    this.setData({
      show: true
    })
  }

})
