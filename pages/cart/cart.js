// pages/cart/cart.js
// import {getSetting,chooseAddress,openSetting} from "../../utils/asywx.js"
import {showModal,showToast} from "../../utils/asywx.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cart:[],
    allCheck:false,
    totalPrice:0,
    totalNum:0,
  },
  onShow(){
     //获取缓存中的收货地址信息
    const address =wx.getStorageSync('address');
    //获取缓存中购物车数组
    const cart = wx.getStorageSync('cart')||[];
    //计算全选
    //every:如果数组中检测到有一个元素不满足，则整个表达式返回 false 如果所有元素都满足条件，则返回 true
    // const allCheck =cart.length ? cart.every(v=>v.check) :false;
    //总价格 总数量
    this.setCart(cart);
    this.setData({
      address,
    });
  },
  //收货地址
  chooseAddress(){
    //1.获取权限状态
    wx.getSetting({
      success: (result) => {
        console.log(result);
        console.log('111');
        //2.获取权限状态时如果一些属性名很诡异，都需使用【】形式来获取
        const scopeAddress = result.authSetting["scope.address"];
        if(scopeAddress === true || scopeAddress === undefined){
          //3.获取收货地址
          wx.chooseAddress({
            success: (result1) => {
              wx.setStorageSync('address', result1);
              console.log('222');
            },
          });
        }else{
          //4.用户拒绝授权权限 需用户自己打开授权页面
          console.log('333');
          wx.openSetting({
           success:(result2)=>{
            console.log(result2);
            //3.获取收货地址
            wx.chooseAddress({
              success: (result3) => {
                wx.setStorageSync('address', result3);
                console.log(result3);
              },
            });
            console.log('444');
           }
          })
        }

      },
    });
    
    /** 
    try{
      getSetting().then(result=>{
        const scopeAddress = result.authSetting["scope.address"];
        if(scopeAddress === false){
          openSetting().then(res=>{
            console.log(res);
          })
        }
        chooseAddress().then(res=>{
          wx.setStorageSync('address', res);
          console.log(res);
        });
      })
    }catch(error){
      console.log(error);
    }
    */

  },
 //商品选中
 itemChange(e){
  const id= e.currentTarget.dataset.id;
  let {cart} =this.data;
  let index = cart.findIndex(v=>v.id === id);
  cart[index].check = !cart[index].check;
  
  this.setCart(cart);
 },
 //设置购物车状态同时重新计算
 setCart(cart){
  let totalPrice=0;
  let totalNum=0;
  let allCheck =true;

  cart.forEach(v=>{
    if(v.check){
      totalPrice += v.num * v.price;
      totalNum += v.num ;
    }else{
      allCheck = false;
    }
  });
  //判断数组是否为空
  allCheck = cart.length !=0 ? allCheck :false;

  this.setData({
    cart,
    totalPrice,
    totalNum,
    allCheck,
  });
  wx.setStorageSync('cart', cart);
 },
 //全选功能
 allChange(){
  let {cart,allCheck} =this.data;
  allCheck =!allCheck;
  cart.forEach(v=>v.check = allCheck);
  this.setCart(cart);
 },
 //商品数量的编辑功能
 itemNumEdit(e){
  const {operation,id} = e.currentTarget.dataset;
  console.log(operation,id);
  let {cart} =this.data;
  const index = cart.findIndex(v=>v.id === id);
  if(cart[index].num ===1 && operation ===-1){
    /** 
    wx.showModal({
      content: '您是否要删除？',
      title: '提示',
      success: (result) => {
        if(result.confirm){
          cart.splice(index,1);
          this.setCart(cart);
        }else if(result.cancel){

        }

      },
    })
    */
   showModal({content:'您是否要删除？'}).then(res=>{
    if(res.confirm){
      cart.splice(index,1);
      this.setCart(cart);
    }
   })
  }else{
    cart[index].num += operation;
    this.setCart(cart);
  }
  
 },
 //结算
 pay(){
  const {address,totalNum}= this.data;
  if(!address.userName){
    showToast({title:'您还没有选择收货地址'}).then(res=>{return; });
  }else if(totalNum === 0){
    showToast({title:'您还没有选购商品'}).then(res=>{return; })
  }else{
    wx.navigateTo({
      url: '/pages/cart/pay/pay',
    })
  }
  
 }
})