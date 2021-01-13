// pages/img/img.js
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:[],
    right:[],
    //被点击左侧的菜单
    currentIndex:0,
    //右侧内容的滚动条距离顶部的距离
    scrollTop:0,
    message: [
    {
      id: 1,
      pid: 0,
      name: '大家电',
      isCheck: false,
      childen: [{
        id: 1,
        pid: 0,
        name: '电视',
        isCheck: false,
        childen: [{
            id: 1,
            isCheck: false,
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
            name: "电视1"
          },
          {
            id: 2,
            isCheck: false,
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
            name: "电视2"
          },
        ]
        },
        {
          id: 2,
          pid: 1,
          name: '空调',
          isCheck: false,
          childen: [{
              id: 3,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "空调1"
            },
            {
              id: 4,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "空调2"
            },
          ]
        },
        {
          id: 3,
          pid: 2,
          name: '洗衣机',
          isCheck: false,
          childen: [{
              id: 5,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "洗衣机1"
            },
            {
              id: 6,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "洗衣机2"
            },
          ]
        },
        {
          id: 4,
          pid: 3,
          name: '插排',
          isCheck: false,
          childen: [{
              id: 7,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "插排1"
            },
            {
              id: 8,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "插排2"
            },
          ]
        },
      ]
    },
    {
      id: 2,
      pid: 1,
      name: '推荐商品',
      isCheck: false,
      childen: [{
          id: 1,
          pid: 0,
          name: '水果',
          isCheck: false,
          childen: [{
              id: 1,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "水果1"
            },
            {
              id: 2,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "水果2"
            },
          ]
        },
        {
          id: 2,
          pid: 1,
          name: '外卖',
          isCheck: false,
          childen: [{
              id: 7,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "外卖1"
            },
            {
              id: 8,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "外卖2"
            },
          ]
        },
        {
          id: 3,
          pid: 2,
          name: '淘宝',
          isCheck: false,
          childen: [{
              id: 9,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "淘宝1"
            },
            {
              id: 10,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "淘宝2"
            },
          ]
        },
      ]
    },
    {
      id: 3,
      pid: 2,
      name: '生活用品',
      isCheck: false,
      childen: [{
          id: 1,
          pid: 0,
          name: '枕头',
          isCheck: false,
          childen: [{
              id: 5,
              isCheck: false,
              img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2240207102,4158111087&fm=15&gp=0.jpg',
              name: "枕头1"
            },
            {
              id: 6,
              isCheck: false,
              img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592668443,935582559&fm=26&gp=0.jpg',
              name: "枕头2"
            },
          ]
        },
        {
          id: 2,
          pid: 1,
          name: '洗洁精',
          isCheck: false,
          childen: [{
              id: 7,
              isCheck: false,
              img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592668443,935582559&fm=26&gp=0.jpg',
              name: "洗洁精1"
            },
            {
              id: 8,
              isCheck: false,
              img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592668443,935582559&fm=26&gp=0.jpg',
              name: "洗洁精2"
            },
          ]
        },
        {
          id: 3,
          pid: 2,
          name: '饭碗',
          isCheck: false,
          childen: [{
              id: 9,
              isCheck: false,
              img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592668443,935582559&fm=26&gp=0.jpg',
              name: "饭碗1"
            },
            {
              id: 10,
              isCheck: false,
              img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592668443,935582559&fm=26&gp=0.jpg',
              name: "饭碗2"
            },
          ]
        },
      ]
    }]
  },
  //接口返回数据
  cate:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取本地存储中的数据
    // const Cates =wx.getStorageSync("cates");
    // if(!Cates){
    //   //不存在则请求
    //   this.getCate();
    // }else{
    //   //旧数据有没有过期
    //   if(Date.now()-Cates.time > 1000 * 10){
    //     this.getCate();
    //   }else{
    //     this.Cates = Cates.data;
    //     let left = this.cate.map(v => v.name);
    //     let right = this.cate[0].childen;
    //     this.setData({
    //       left,
    //       right
    //     });
    //   }
    // }

    this.cate = this.data.message;
    let left = this.cate.map(v => v.name);
    let right = this.cate[0].childen;
    this.setData({
      left,
      right
    });
    // console.log();
  },
  handleTap(e){
    const { index1 } = e.currentTarget.dataset;
    let right = this.cate[index1].childen;
    this.setData({
      currentIndex:index1,
      right,
      //重新设置scrollTop
      scrollTop:0
    });

    console.log({index1});
  },
  getCate(){
    // request({
    //   url:''
    // })
    // .then(res =>{
    //   this.cate = res.data.message;
    //   //把接口数据存入本地存储
    //   wx.setStorageSync('cates', {time:Date.now(),data:this.cate});

    //   //构造左侧数据
    //   let left = this.cate.map(v=> v.name);
    //   //构造右侧数据
    //   let right = this.cate[0].childen;
    //   this.setData({
    //     left,
    //     right
    //   });
    // });
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