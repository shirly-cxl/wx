// pages/img/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {
      id: 0,
      price: 6666,
      name: '红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚',
      img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3738324299,1361227017&fm=26&gp=0.jpg',
      pic: [{
          id: 0,
          img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3738324299,1361227017&fm=26&gp=0.jpg'
        },
        {
          id: 1,
          img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1090945193,2986838216&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1226359993,4019682530&fm=26&gp=0.jpg'
        },
      ]
    },
    //商品是否被收藏
    isCollect: false,
  },
  //商品对象
  goodsInfo: {},
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    const {
      id
    } = options;
    // this.goodsObj.id= options;
    console.log(id);
    this.goodsInfo = this.data.goodsObj;
  },
  onShow: function () {
    //1.获取当前的小程序的页面栈-数组 长度最大是10页面
    let pages = getCurrentPages();
    //2.数组中索引最大的页面就是当前页面
    let currentPage = pages[pages.length - 1];
    //3.获取参数
    let options = currentPage.options;
    const {
      id
    } = options;
    this.getGoodDetail(id);
    console.log('2');
  },
  //点击轮播图放大预览
  prevewImge(e) {
    const urls = this.goodsInfo.pic.map(v => v.img);
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current: current,
      urls: urls,
    });
    console.log('放大预览');
    console.log(urls);
  },
  //点击加入购物车
  carAdd() {
    //1.获取缓存中的购物车 数组
    let cart = wx.getStorageSync("cart") || [];
    //2.判断 商品对象是否存在于购物车数组中
    let index = cart.findIndex(v => v.id === this.goodsInfo.id);

    if (index === -1) {
      //3.第一次添加
      this.goodsInfo.num = 1;
      this.goodsInfo.check = true;
      cart.push(this.goodsInfo);
      console.log('2222');
    } else {
      //4.已经存在购物车 执行 num++
      cart[index].num++;
      console.log('111');
    }
    //5.把购物车重新添加到缓存中
    wx.setStorageSync("cart", cart);
    //6.弹窗提示
    wx.showToast({
      title: '添加成功',
      icon: "success",
      mask: true,
    });
    console.log('加入购物车' + index);
  },
  getGoodDetail(id) {
    //4.获取缓存中的商品收藏数组
    let collect = wx.getStorageSync('collect') || [];
    //5.判断当前商品是否被收藏
    let isCollect = collect.some(v => v.id === this.goodsInfo.id);
    this.setData({
      isCollect
    });
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
  },
  //点击 商品收藏
  handleCollect() {
    let isCollect = false;
    //1.获取缓存中的商品收藏数组
    let collect = wx.getStorageSync('collect') || [];
    //2.判断该商品是否被收藏过
    let index = collect.findIndex(v => v.id === this.goodsInfo.id);
    //3.当index！=-1表示已经收藏
    if (index !== -1) {
      //4.收藏过则删除该商品
      collect.splice(index, 1);
      isCollect = false;
      wx.showToast({
        title: '取消成功',
        icon:'success',
        mask:true,
      });
    } else {
      //5.没有收藏则收藏
      collect.push(this.goodsInfo);
      isCollect = true;
      wx.showToast({
        title: '收藏成功',
        icon:'success',
        mask:true,
      });
    }
    //6.把数组存入缓存中
    wx.setStorageSync('collect', collect);
    //7.修改data中的属性 isCollect
    this.setData({
      isCollect
    });
  }
})