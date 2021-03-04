// pages/demo/news/news.js
var newsData=require('../../../utils/news-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerImgs:[
      '../../../image/timg.jpeg',
      '../../../image/5g.jpeg',
      '../../../image/ai.jpeg',
      '../../../image/huawei.jpeg'
    ],
    newsList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(newsData);
    this.setData({
      newsList: newsData.newsData
    })
  },
  openNews: function(e){
    var index= e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/demo/newsDetail/newsDetail?index='+index,
    })
    console.log(e);
  },
  
})