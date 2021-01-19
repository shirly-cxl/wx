// pages/cart/pay/pay.js
// import {getSetting,chooseAddress,openSetting} from "../../utils/asywx.js"
// import {showModal,showToast} from "../../../utils/asywx.js"

Page({
  data: {
    address: {},
    cart: [],
    totalPrice: 0,
    totalNum: 0,
  },
  onShow() {
    //获取缓存中的收货地址信息
    const address = wx.getStorageSync('address');
    //获取缓存中购物车数组
    let cart = wx.getStorageSync('cart') || [];
    //过滤后的购物车数组
    cart = cart.filter(v => v.check);

    let totalPrice = 0;
    let totalNum = 0;

    cart.forEach(v => {
      if (v.check) {
        totalPrice += v.num * v.price;
        totalNum += v.num;
      }
    });

    this.setData({
      cart,
      totalPrice,
      totalNum,
      address,
    });

  },
  handPrderPay() {
    try {
      //判断缓存中有没有token
      const token = wx.getStorageSync("token");
      if (!token) {
        wx.navigateTo({
          url: '/pages/logs/logs',
        });
        return;
      }
      //3.创建订单
      //1)请求头
      const header = {
        tokens: token
      };
      //2）请求参数
      const price = this.data.totalPrice;
      let goods = [];
      const cart = this.data.cart;
      cart.forEach(v => goods.push({
        id: v.id,
        number: v.num,
        goods_price: v.price
      }));
      //4.发送请求，创建订单
      wx.request({
        url: 'url',
        success: (result) => {
          console.log(result);
        }
      });
      //5.发起预支付接口

      //6.发起微信支付
      //1）微信支付
      // wx.requestPayment({
      //   nonceStr: 'nonceStr',
      //   package: 'package',
      //   paySign: 'paySign',
      //   timeStamp: 'timeStamp',
      //   signType: 'signType',
      //   success: (res) => {},
      //   fail: (res) => {
      //     wx.showToast({
      //       title: '支付失败',
      //       duration: 1000,
      //       mask: true,
      //     });
      //   },
      // });

      // 7.请求 查询订单状态

      //8.手动删除缓存中的 已经支付的商品
      let newCart =wx.getStorageSync('cart');
      newCart = newCart.filter( v => !v.check);
      wx.setStorageSync('cart', newCart);

      //9.支付成功 跳转页面
      wx.showToast({
        title: '支付成功',
        duration: 1000,
        mask: true,
      });

      wx.navigateTo({
        url:'/pages/cart/order/order'
      });

    } catch (error) {
      wx.showToast({
        title: '支付失败',
        duration: 1000,
        mask: true,
      });
      console.log(error);
    }


    console.log('已经存在token');
  },
})