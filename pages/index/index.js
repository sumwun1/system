//index.js
//获取应用实例
const app = getApp()

Page({
  /*data: {
    motto: 'Hello Worl',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.level({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },*/
  /*level: function(e) {
    //console.log(e)
    console.log("eugfindjvk")
    /*app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.navigateTo({
      url: "../level/level"
    });
  }*/

  seeRank: function (options) {
    //console.log("urihfdnj");
    wx.navigateTo({
      url: '../rank/rank',//The path of the page to jump to
    })
  },
  seePhonics: function (options) {
    wx.navigateTo({
      url: '../phonics/phonics',//The path of the page to jump to
    })
  }
})
