// pages/department/department.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onShow() {
    var that = this
    var index = app.globalData.deindex
    var title, part
    switch(index) {
      case 0:
        title = '中国大学生创业网'
        part = [{
          name: "网络技术部",
          path: "../../images/ac37e80c754d43309aea17331df63f49.jpeg"
        },{
          name: "美工部",
          path: "../../images/u=3887626723,1013741648&fm=26&gp=0.jpg"
        },{
          name: "记者部",
          path: "../../images/002C91s8zy6Mde7MPfcea.jfif"
        },{
          name: "编辑部",
          path: "../../images/c82e9d9b12ee4de58706584bf055dcfa.jpeg"
        }]
        break
      case 1:
        title = '办公室'
        part = [{
          name: "部门一",
          path: "../../images/part.png"
        }, {
          name: "部门二",
          path: "../../images/part.png"
        }, {
          name: "部门三",
          path: "../../images/part.png"
        }, {
          name: "部门四",
          path: "../../images/part.png"
        }]
        break
      case 2:
        title = 'SYIB'
        part = [{
          name: "部门一",
          path: "../../images/part.png"
        }, {
          name: "部门二",
          path: "../../images/part.png"
        }, {
          name: "部门三",
          path: "../../images/part.png"
        }, {
          name: "部门四",
          path: "../../images/part.png"
        }]
        break
      case 3:
        title = '第4个部门'
        part = [{
          name: "部门一",
          path: "../../images/part.png"
        }, {
          name: "部门二",
          path: "../../images/part.png"
        }, {
          name: "部门三",
          path: "../../images/part.png"
        }, {
          name: "部门四",
          path: "../../images/part.png"
        }]
        break
      default:
        break
    }
    wx.setNavigationBarTitle({
      title: title
    })
    this.setData({
      part: part
    })
  }

})