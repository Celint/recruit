//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'secondhandbook-1a2ce5',
        traceUser: true,
      })
    }

    this.globalData = {
      deindex: null,       //四大部门的代号
      userInfo: null,      //用户信息
      resume: null,        //个人简历
    }
  }
})
