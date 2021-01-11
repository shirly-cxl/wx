// app.js
App({
  //应用第一次启动的就会触发的事件
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  //应用被用户看见的时候触发
  onShow(){
    console.log('onShow');
  },
  //应用被隐藏的时候触发
  onHide(){
    console.log('onHide');
  },
  //应用代码发生报错的时候触发
  onError(err){
    console.log(err);
  },
  //应用第一次启动的时候，如果找不到入口页面才会触发
  onPageNotFound(){
    console.log('onPageNotFound');
  }
})
