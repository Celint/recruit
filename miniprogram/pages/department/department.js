// pages/department/department.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    part : [{
      name: "技术部",
      path: "../../images/jsb.png",
      introduce: "\n1.网站后台应用程序的设计维护\n2.服务器的管理维护\n3.网站日常运营安全维护\n4.网站硬件的维护和管理"
    }, {
      name: "美工部",
      path: "../../images/mgb.png",
      introduce: "\n1.网站页面设计\n2.网站画报、画册的设计制作\n3.其他一些专题美术设计\n"
    }, {
      name: "记者部",
      path: "../../images/jzb.png",
      introduce: "\n1.校内外新闻采访\n2.专题栏目的供稿\n3.优秀创业任务的 专题采访报道\n4.校内外创业讲座视频拍摄和编辑\n"
    }, {
      name: "编辑部",
      path: "../../images/bjb.png",
      introduce: "\n1.对网站页面和栏目的策划设计\n2.负责专题栏目的策划和设计\n3.负责网站各个栏目的更新和维护\n4.创业论坛的管理\n"
    }]
  },

  onShow() {
    
  },

  goDepartment(e) {
    var index = e.currentTarget.dataset.index
    app.globalData.inDep = "创业网 · " + this.data.part[index].name
    app.globalData.introduce = this.data.part[index].introduce
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },

  goDetail() {
    app.globalData.inDep = "创业网"
    app.globalData.introduce = "\n中南大学创新创业办的中国大学生创业网始建于2002年9月，并已在国际顶级域名数据库中记录的专业性服务网站，亦是集教育、管理、服务为一体的多功能综合性网站。网站在中南大学学生创新创业指导中心的指导下，实现公司化运作，完全由学生自主管理，运行和维护。在铁道和本部两个校区共拥有3间办公室，配套设施齐全，现拥有员工70多名。2007年，网站被评为全国“十佳”校园服务网站。"
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

})