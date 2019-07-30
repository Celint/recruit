const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const app = getApp()

Page({

  getUserInfo: function (e) {
    userInfo.add({
      data: {
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl,
        name: null,
        sid: null,
        phone: null,
        major: null,
        hobby: null,
        picture: null,
      },
    }).then(res => {
      userInfo.doc(res._id).get({
        success(re) {
          app.globalData.userInfo = re.data
          wx.navigateBack({
            delta: 1,
          })
        }
      })
    }).catch(err => {
      wx.showToast({
        title: '登录失败',
        icon: 'none',
        duration: 2000
      })
    })
  },

  wait() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
 
})