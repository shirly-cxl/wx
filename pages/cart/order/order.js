// pages/cart/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:'全部',
        isActive:true
      },
      {
        id:1,
        name:'代付款',
        isActive:false
      },
      {
        id:2,
        name:'代发货',
        isActive:false
      },
      {
        id:3,
        name:'退款/退货',
        isActive:false
      },
    ],
    order:[
      {
        id:0,
        addr:'',
        is_send:'',
        number:'01234567890021345',
        price:'1364',
        time:'20211190510'
      },
      {
        id:1,
        addr:'',
        is_send:'',
        number:'7894567890021345',
        price:'1364',
        time:'20211112364'
      },
      {
        id:2,
        addr:'',
        is_send:'',
        number:'65482317990021345',
        price:'1364',
        time:'20211121364'
      },
      {
        id:3,
        addr:'',
        is_send:'',
        number:'32648923548751548',
        price:'1364',
        time:'2021136972'
      },
    ],
  },
  handItemChange(e){
    const {index}= e.detail;
    this.changeTitle(index);
    //重新发送请求
    this.getOrder(index+1);
    console.log(index);
  },
  //根据标题索引来激活选中 标题数组
  changeTitle(index){
    let {tabs} = [];
    tabs = this.data.tabs;
    tabs.forEach((v,i)=> i === index ? v.isActive=true : v.isActive=false);
    this.setData({tabs});
    // console.log(tabs);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow(options) {
    const token = wx.getStorageSync('token');
    if(!token){
      wx.navigateTo({
        url: '/pages/logs/logs',
      });
      return;
    }
    //1.获取当前的小程序的页面栈-数组 长度最大是10页面
    let pages = getCurrentPages();
    //2.数组中索引最大的页面就是当前页面
    let currentPage = pages[pages.length-1];
    //3.获取type参数
    const {type} = currentPage.options;
    //4.激活选中页面标题
    this.changeTitle(type-1);
    this.getOrder(type);
    console.log(type);
  },
  //获取订单列表方法
  getOrder(type){
    // wx.request({
    //   url: 'url',
    //   data: {type},
    //   success: (result) => {}, 
    // })
    const orders= this.data.order;
    this.setData({
      order: orders.map(v => ({...v,time_cn:(new Date(v.time*1000).toLocaleString())}))
    })

  },
})