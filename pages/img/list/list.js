// pages/img/list/list.js
import { request } from "../../../request/index.js";
// import regeneratorRuntime from '../../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tabs:[
      {
        id:0,
        name:'综合',
        isActive:true
      },
      {
        id:1,
        name:'销量',
        isActive:false
      },
      {
        id:2,
        name:'价格',
        isActive:false
      },
    ],
    goods:[
      {
        id:0,
        name:'小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼小鱼',
        price:1000,
        img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2956370624,4180433682&fm=26&gp=0.jpg'
      },
      {
        id:1,
        name:'小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱',
        price:999,
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3194681197,666223376&fm=26&gp=0.jpg'
      },
      {
        id:2,
        name:'地球地球地球地球地球地球地球地球地球地球地球地球地球地球地球地球地球地球',
        price:888,
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1759676552,2885121100&fm=26&gp=0.jpg'
      },
      {
        id:3,
        name:'小羊小羊小羊小羊小羊',
        price:888,
        img:null
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.data.name = options.name;
    let {name} ='';
    name = this.data.name;
    // this.queryParams.id = options.id;
    this.setData({name});
    console.log(name);
    this.getGoods();
  },
  //滚动条触底事件
  onReachBottom(){
    if(this.queryParams.pageNum >= this.totalPage){
      wx.showToast({
        title: '没有下一页数据了',
      });
    }else{
      this.queryParams.pageNum++;
      this.getGoods();
    }
  },
  //下拉刷新
  onPullDownRefresh(){
    // this.setData({
    //   goods:[]
    // });
    // this.queryParams.pageNum=1;
    // this.getGoods();
    console.log('下拉刷新');
  },
  handItemChange(e){
    const {index}= e.detail;
    let {tabs} = [];
    tabs = this.data.tabs;
    tabs.forEach((v,i)=> i === index ? v.isActive=true : v.isActive=false);
    this.setData({tabs});
    console.log(tabs);
  },
  //接口要的参数
  queryParams:{
    query:'',
    id:'',
    pageNum:1,
    pageSize:10,
  },
  //总页数
  totalPage:1,
  //获取商品列表数据
  // async getGoods(){
  //  const res = await request({url:"/wx/listBanner",data:this.queryParams});
  //  //获取总条数
  //  const total=res.total;
  //  //计算总页数
  //  this.totalPage = Math.ceil(total/this.queryParams.pageSize)
  //  //拼接数组
  //  this.setData({
  //    goods:[...this.data.goods,...res.goods]
  //  })；
  //  //关闭下拉刷新窗口
  //  wx.stopPullDownRefresh();
  //  console.log(res);
  // },
   getGoods(){
    request({url:"/wx/listBanner"}).
    then(res =>{
      console.log(res);
      //关闭下拉刷新窗口
      wx.stopPullDownRefresh();
    });
  },

})