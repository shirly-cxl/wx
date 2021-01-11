// pages/demo/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      html:'<div class="div_class"><h1>Title</h1><p class="p">Life is&nbsp;<i>like</i>&nbsp;a box of<b>&nbsp;chocolates</b></p></div>',
      htmlList:[
        {
          name:'div',
          attrs:{
            class:"my",
            style:"color:red;",
          },
          children:[
            {
              name:'p',
              attrs:{},
              children:[
                {
                  type:'text',
                  text:"hello rich-text"
                }
              ]
            }
          ]
        }
      ]
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})