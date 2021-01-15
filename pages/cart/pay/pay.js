// pages/cart/pay/pay.js
// import {getSetting,chooseAddress,openSetting} from "../../utils/asywx.js"
// import {showModal,showToast} from "../../../utils/asywx.js"

Page({
  data: {
    address:{},
    cart:[],
    totalPrice:0,
    totalNum:0,
  },
  onShow(){
     //获取缓存中的收货地址信息
    const address =wx.getStorageSync('address');
    //获取缓存中购物车数组
    let cart = wx.getStorageSync('cart')||[];
    //过滤后的购物车数组
    cart = cart.filter(v=>v.check);

    let totalPrice=0;
    let totalNum=0;

    cart.forEach(v=>{
      if(v.check){
        totalPrice += v.num * v.price;
        totalNum += v.num ;
      }
    });
  
    this.setData({
      cart,
      totalPrice,
      totalNum,
      address,
    });

  },
})