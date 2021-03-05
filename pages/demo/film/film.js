// pages/demo/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    goodList:[],
  },
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10,
  },
  total:1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanners();
    this.getGoods();
  },
  getBanners(){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success:(data) =>{
        var _this =this;
        _this.banners = data.data.message;
        _this.setData({
          banners :  _this.banners
        })
        console.log(_this.banners);
      }
    });
  },
  getGoods(){
    wx.showLoading({
      title: '加载中...',
      icon:'none'
    });
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',
      data:this.QueryParams,
      success:(res) =>{
        // this.goodList = res.data.message.goods;
        const total = res.data.message.total;
        this.total = Math.ceil( total / this.QueryParams.pagesize);
        this.setData({
          goodList:[...this.data.goodList, ...res.data.message.goods]
        });
        wx.stopPullDownRefresh();
        wx.hideLoading();
        console.log(res);
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    this.setData({
      goodList:[]
    });
    this.QueryParams.pagenum = 1;
    this.getGoods();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.QueryParams.pagenum >= this.total){
      wx.showToast({
        title: '没有数据了',
        icon:'none'
      })
    }else{
      this.QueryParams.pagenum ++;
      this.getGoods();
    }
    console.log('res');
  },
})