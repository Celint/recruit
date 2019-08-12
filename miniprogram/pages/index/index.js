//index.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

Page({
  data: {
    show: true,
    mi: 0,
    parts: ['../../images/cyw.png', '../../images/pfcysx.png', '../../images/syib.png', '../../images/cyy.png']
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

  popup() {
    if (this.data.show == true) {
      var i = 40;
      while (i > 0) {
        for (var t = Date.now(); Date.now() - t <= 10;);
        i--;
        this.setData({
          mi: 40 - i
        })
      }
      this.setData({
        mi: 0,
        show: false
      })
      var i = 100;
      while (i > 0) {
        for (var t = Date.now(); Date.now() - t <= 2;);
        i--;
        this.setData({
          si: 100 - i,
          pi: 2 * i
        })
      }
    } else {
      var i = 100;
      while (i > 0) {
        for (var t = Date.now(); Date.now() - t <= 1;);
        i--;
        this.setData({
          si: i,
          pi: 200 - 2 * i,
        })
      }
      this.setData({
        show: true
      })
    }
  },

  goDepartment(e) {
    app.globalData.deindex = e.currentTarget.dataset.index
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