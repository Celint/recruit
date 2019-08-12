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
          name: "技术部",
          path: "../../images/jsb.png"
        },{
          name: "美工部",
          path: "../../images/mgb.png"
        },{
          name: "记者部",
          path: "../../images/jzb.png"
        },{
          name: "编辑部",
          path: "../../images/bjb.png"
        }]
        break
      case 1:
        department = '2'
        title = 'PF 创业实训'
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
        title = '创业园'
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