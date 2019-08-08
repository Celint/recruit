// pages/department/department.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    department: '0'
  },

  onShow() {
    var that = this
    var index = app.globalData.deindex
    var title, part, department
    switch(index) {
      case 0:
        department = '1'
        title = '创业网'
        part = [{
          name: "网络技术部",
          path: "../../images/ac37e80c754d43309aea17331df63f49.jpeg"
        },{
          name: "美工部",
          path: "../../images/u=3887626723,1013741648&fm=26&gp=0.jpg"
        },{
          name: "记者部",
          path: "../../images/reporter.png"
        },{
          name: "编辑部",
          path: "../../images/c82e9d9b12ee4de58706584bf055dcfa.jpeg"
        }]
        break
      case 1:
        department = '2'
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
        department = '3'
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
        department = '4'
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
      title: title,
      part: part,
      department: department
    })
  },

  goDepartment(e) {
    var index = e.currentTarget.dataset.index
    app.globalData.inDep = this.data.title + " · " + this.data.part[index].name
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },

  joinus() {
    app.globalData.department = this.data.department
    app.globalData.innerDep = ''
    app.globalData.status = 0
    wx.navigateTo({
      url: '/pages/joinus/joinus'
    })
  },

})