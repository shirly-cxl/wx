// pages/mine/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        id: 0,
        name: '商品收藏',
        isActive: true
      },
      {
        id: 1,
        name: '品牌收藏',
        isActive: false
      },
      {
        id: 2,
        name: '店铺收藏',
        isActive: false
      },
      {
        id: 3,
        name: '浏览足迹',
        isActive: false
      },
    ],
    collect:[],
  },
  handItemChange(e) {
    const {
      index
    } = e.detail;
    let {
      tabs
    } = [];
    tabs = this.data.tabs;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    });
  },
  onShow(){
    const collect = wx.getStorageSync('collect')||[];
    this.setData({collect});
  },
})