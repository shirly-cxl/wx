// pages/img/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{
      id:0,
      price:6666,
      name:'红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚',
      img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3738324299,1361227017&fm=26&gp=0.jpg',
      pic:[
        {
          id:0,
          img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3738324299,1361227017&fm=26&gp=0.jpg'
        },
        {
          id:1,
          img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1090945193,2986838216&fm=26&gp=0.jpg'
        },
        {
          id:2,
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1226359993,4019682530&fm=26&gp=0.jpg'
        },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {id} = options;
    // this.goodsObj.id= options;
    console.log(id);
    this.goodsInfo =this.data.goodsObj;
  },
  //商品对象
  goodsInfo:{},
  //点击轮播图放大预览
  prevewImge(e){
    const urls= this.goodsInfo.pic.map(v=>v.img);
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current:current,
      urls: urls,
    });
    console.log('放大预览');
    console.log(urls);
  },
  //点击加入购物车
  carAdd(){
    //1.获取缓存中的购物车 数组
    let cart=wx.getStorageSync("cart")||[];
    //2.判断 商品对象是否存在于购物车数组中
    let index=cart.findIndex(v=>v.id === this.goodsInfo.id);

    if(index === -1){
      //3.第一次添加
      this.goodsInfo.num = 1;
      this.goodsInfo.check = true;
      cart.push(this.goodsInfo);
      console.log('2222');
    }else{
      //4.已经存在购物车 执行 num++
      cart[index].num++;
      console.log('111');
    }
    //5.把购物车重新添加到缓存中
    wx.setStorageSync("cart",cart);
    //6.弹窗提示
    wx.showToast({
      title: '添加成功',
      icon:"success",
      mask:true,
    });
    console.log('加入购物车'+index);
  },
  // getGoodDetail(id){
  //   request({url:'',data:{id}})
  //   .then(res=>{
  //     //如果接口返回的数据有一些不用到，如以下写法
  //     this.setData({
  //       name:res.data.name,
  //       price:res.data.price,
  //       //有一些手机不识别webp图片格式，需自己改，可以简单的用字符串替换
  //       picture:res.data.picture.replace(/\.webp/g,'.jpg'),
  //       pic:res.data.pic,
  //     })
  //   })
  // }
})