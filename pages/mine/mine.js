// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfos:{},
    collectNums:0,
  },
  onShow() {
    const userInfos = wx.getStorageSync('userInfo');
    const collect = wx.getStorageSync('collect') || [];

    this.setData({userInfos,collectNums:collect.length});
  },
  handGetUserInfo(e){
    const {userInfo} = e.detail;
    wx.setStorageSync('userInfo',userInfo);
    console.log(userInfo);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})